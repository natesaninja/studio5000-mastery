# Electrician field scenario pack

Practice with **6 buckets** + named decision trees. Write a short RCA each time.

**Buckets:** (1) Energy/mode (2) Field (3) I/O config (4) Alias/tag (5) Logic (6) Overrides  

---

## SC-F1 — Intermittent sensor (packaging photoeye)

**Ops:** “Infeed stops randomly. Maybe every few minutes.”  
**HMI:** No solid alarm; sometimes “discharge not clear.”

### Expected approach
1. Don’t replace the PE first.  
2. Online: identify `Dsch_Clear` (or site tag).  
3. **Trend** `Dsch_Clear` + `Run_Cmd` + `Fault` for a run.  
4. If trend shows short false drops → field bounce/loose/dirty/noise **or** real blockage.  
5. Meter/wiggle test wire; check mount and lens.  
6. Logic fix only if needed (debounce TON) **after** field proven or as approved change.

**Trees:** DT-IN, DT-01  
**Technique:** Trend ([03-floor-techniques](../Cross_Reference_and_Tools.md))

### Common wrong moves
- Force `Dsch_Clear` true permanently  
- Online-edit without evidence  
- Replace PE three times  

---

## SC-F2 — VFD not starting via PLC

**Ops:** “VFD keypad runs the blower in Hand. Auto does nothing.”  
**Drive display:** Ready in local; remote may show comm or not.

### Expected approach
1. Split: Hand works → power/motor likely OK.  
2. Online: does `Run_Cmd` (or network run bit) go TRUE in Auto?  
   - **No** → permissives/mode/logic (DT-01)  
   - **Yes** → command path to drive  
3. Discrete DO run: DO LED? Voltage at drive digital input? Drive input configured for remote?  
4. Ethernet/IP drive: connection OK (FC-06)? Drive faulted? Speed ref non-zero?  
5. Safety disable / STO / contactor upstream of drive?  
6. Parameter: control source = remote/network?

**Trees:** DT-OUT, DT-COM  
**Electrician win:** Prove PLC command vs drive configuration vs safety power.

---

## SC-F3 — Safety circuit interaction

**Ops:** “PLC says running permissives OK but won’t start after e-stop reset.”  
**Field:** E-stop pulled out; safety relay amber/red unclear.

### Expected approach
1. **DT-06** — this is safety first.  
2. Verify dual-channel devices, safety relay/module status, reset sequence (many need reset PB after clear).  
3. Online: what does standard PLC actually see (`EStop_OK` / `SafetyOK`)?  
4. If safety side not healthy, **do not** force PLC permissive.  
5. If safety OK and PLC tag false → interface wiring/alias (DT-IN).  
6. If safety OK and tag true → other permissives/logic (DT-01).

### Hard rule
Jumpering a light curtain ≠ forcing a photoeye. Document refusals.

---

## SC-F4 — After power-cycle issues

**Ops:** “After weekend outage, cell won’t run. Was fine Friday.”

### Checklist
| Check | Tree / sheet |
|-------|----------------|
| Controller major fault on power-up | DT-MAJ |
| Field 24 V and chassis power | DT-1.2 |
| Remote I/O connections re-established | DT-COM, FC-06 |
| Latched faults in logic needing reset | Monitor fault bits |
| Non-retentive modes back to default | Mode tags |
| VFDs not Ready yet; PLC already commanding | DT-OUT + drive |
| HMI reconnecting to wrong path | DT-COM |
| Retentive OTL left in bad state | Cross-ref latches |
| Clock/recipe/first-scan issues | Logic / eng |

**Often:** One remote adapter fuse or switch port; or drive fault log after brownout.

---

## SC-F5 — Outputs dead on whole card

**Ops:** “No stack lights, no starter outputs on that rack.”

### Expected approach
1. CPU running?  
2. Output module LED/fault? Output power supply for that card?  
3. Connection inhibited?  
4. Common blown fuse for output group?  
5. Safety contactor killing entire DO feed?  
6. Not a single-rung logic problem if **all** channels dead.

**Trees:** DT-OUT, FC-02, DT-1.2  

---

## SC-F6 — Input card all zeros

**Ops:** “No pushbuttons work; sensors dark in HMI.”

### Expected approach
1. Field 24 V at module commons.  
2. Module connection.  
3. If one sensor works → not whole supply.  
4. Wrong project / wrong controller online (identity).  

**Trees:** DT-IN, DT-1.2  

---

## SC-F7 — “Logic not scanning” after online edit attempt

**Ops:** “They tried a change; now that station never runs.”

### Expected approach
1. Pending edits abandoned? Online vs offline mismatch?  
2. JSR removed by mistake?  
3. MCR or mode bit forced false?  
4. Cross-ref motor command.  
5. Compare to last known-good ACD if available.

**Trees:** DT-SCAN, DT-01  

---

## SC-F8 — Communication loss to remote I/O (discharge end)

**Ops:** “Discharge sensors X’d out; infeed local still works.”

### Expected approach
1. Scope: local OK, remote dead → network/adapter (DT-COM).  
2. Adapter power and link.  
3. Connection status online.  
4. Switch port / cable in cable tray damage.  
5. IP conflict after device replace.

---

## SC-F9 — Motor tag true, starter pulls, VFD/motor doesn’t run at speed

**Ops:** “It hums / tries.”

### Expected approach
This may leave PLC world quickly: mechanical overload, wrong VFD ref, phase loss.  
Still confirm PLC isn’t dropping run 0.5 s later (trend Run_Cmd + FB).

---

## SC-F10 — Force left on from night shift

**Ops:** “Stop button doesn’t stop infeed.”

### Expected approach
1. Force tables **first**.  
2. Remove; verify.  
3. RCA: process failure, not “bad stop PB.”  
4. Coaching / lock procedure.

**Trees:** DT-1.6, DT-OUT  

---

## RCA one-liner template

```
Symptom → Evidence (tag/LED/meter/trend) → Bucket → Root cause → Fix → Prevention
```

## Scoring (self-drill)

For each scenario: 10 minutes, tree named, no more than one force (logged).  
Pass: correct bucket + cause family without shotgun download.
