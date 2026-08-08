# Finding the problem area

**Job aid.** Use this on a live machine to locate *where* the failure lives before you rewrite logic.

**Electrician idea:** Same as “device → wire → terminal → coil” — Logix just adds image, tags, and logic in the middle.

```
Device → wire → module → I/O image → alias/tag → logic → output image → DO → wire → load
                              ↑ forces, inhibits, wrong slot, connection faults also sit here
```

---

## 30-second path

```
SAFE?
  → What exactly failed? What still works? What changed?
  → Force tables empty?
  → Layer cake until you hit the first broken layer
  → Tool for that layer (Monitor / Cross-Ref / Module / Meter / Trend)
  → One test → fix → verify → remove forces → document
```

---

## 0. Safety (always first)

| Question | If no / unclear |
|----------|-----------------|
| Safe to energize / jog / force? | LOTO / make safe |
| Safety device involved (curtain, dual e-stop, gate)? | [DT-06](Symptom_Decision_Trees/DT-06-safety-trip.md) — do **not** force safety |
| Stored energy (servo, VFD)? | Treat as live until proven safe |
| Authorized for online/download? | Get authorization |

**Stabilize first.** Clever online edits under panic create second faults.

---

## 1. Crisp symptom (2 minutes)

Write answers — don’t keep them in your head:

1. **What** doesn’t work? (which motor, station, Auto vs Manual)  
2. **When** did it start?  
3. **What changed?** (power cycle, parts, program, network, “nobody”)  
4. **What still works?** (Hand on starter? Other conveyors? Local VFD keypad?)  
5. **Alarms / lights?** (HMI, stack, drive, safety relay, FAULT LED)  

| Bad | Good |
|-----|------|
| “PLC is broken” | “Infeed won’t start in Auto; Hand works; Guard HMI shows closed since 06:40” |

→ Jump to [What_to_Check_First.md](What_to_Check_First.md) for the matching symptom row.

---

## 2. Layer cake — find the broken layer

Work **top → bottom**. Skip a layer only when evidence proves it healthy.

| Layer | Question | Healthy look | If sick → |
|-------|----------|--------------|-----------|
| **1 Power & mode** | Chassis + field 24 V + keyswitch/mode? | CPU alive, field sensors have power, RUN | [DT-1.2](Symptom_Decision_Trees/DT-1.2-hardware-power.md) |
| **2 Safety / hard permissives** | E-stop, curtains, safety contactor? | Safety OK or known trip | [DT-06](Symptom_Decision_Trees/DT-06-safety-trip.md) |
| **3 Network / path** | Online to **this** controller? | Correct name/IP/panel | [DT-COM](Symptom_Decision_Trees/DT-COM-communication-loss.md) |
| **4 Controller health** | Major fault? Tasks running? | No FAULT; logic executing | [DT-MAJ](Symptom_Decision_Trees/DT-MAJ-major-fault-recovery.md) |
| **5 I/O & connections** | Module LEDs, connection, aliases? | Points update | [DT-IN](Symptom_Decision_Trees/DT-IN-inputs-not-reading.md) / [DT-OUT](Symptom_Decision_Trees/DT-OUT-outputs-not-on.md) |
| **6 Logic & overrides** | Permissives, mode, forces, sequence? | Tags move as expected | [DT-01](Symptom_Decision_Trees/DT-01-wont-start.md) / [DT-SCAN](Symptom_Decision_Trees/DT-SCAN-logic-not-running.md) |
| **7 Field load** | Starter, VFD, valve, mechanics? | Voltage at load when commanded | Pure electrician territory |

### Classic electrician traps

| You see | Problem area is usually |
|---------|-------------------------|
| CPU green, all sensors dead | **Field 24 V** (layer 1), not “bad PLC” |
| Hand on starter works, Auto dead | **Logic/mode/PLC command path** (6) or **HOA/remote** (7) |
| Tag true, starter dead | **Output path** (5) or **downstream** (7) |
| Ignores Stop | **Forces** or inverted stop (6) — open force table |
| Only after weekend power-up | [DT-PWR](Symptom_Decision_Trees/DT-PWR-after-power-cycle.md) |

---

## 3. Divide and conquer (the money splitters)

### Split A — Command vs power

| Observation | Area |
|-------------|------|
| `Run_Cmd` (or equivalent) **FALSE** when you request start | Logic / mode / permissives / HMI — **not** the coil yet |
| Tag **TRUE**, DO LED **OFF** | Alias, module, output supply, connection |
| DO LED **ON**, no voltage at load | Wire, TB, HOA, safety contactor after PLC |
| Voltage at load, no motion | Starter/VFD/mechanical/480 V |

### Split B — Field vs image

| Observation | Area |
|-------------|------|
| Device LED OK, module LED OK, tag wrong | Force / alias / connection / wrong controller |
| Device LED OK, module LED dark | Wiring to module / channel / power reference |
| Whole card dead | Supply / module fault / inhibit / connection |

### Split C — This device vs whole machine

| Observation | Area |
|-------------|------|
| One motor only | That alias/logic/field path |
| All outputs on a card | Card power / fuse / safety feed |
| All remote I/O, local OK | Network/adapter ([DT-COM](Symptom_Decision_Trees/DT-COM-communication-loss.md)) |

### Split D — Always vs intermittent

| Pattern | Tool |
|---------|------|
| Always fails | Monitor + Cross-Ref + meter |
| Random / sometimes | **Trend** ([DT-INT](Symptom_Decision_Trees/DT-INT-intermittent.md)) |

---

## 4. Studio tools — when and how (electrician language)

Full detail: [Cross_Reference_and_Tools.md](Cross_Reference_and_Tools.md)

### 4.1 Force tables — open early

**Like:** Looking for a jumper left on a contact.

| Step | Do |
|------|-----|
| 1 | Open I/O Forces / tag forces |
| 2 | If any unexpected → log, remove (with auth), retest |
| 3 | Never leave a force as a “fix” |

### 4.2 Data Monitor (Controller Tags)

**Like:** Multi-channel meter on named wires.

1. Go **online** to the correct controller.  
2. **Monitor Tags** — filter by equipment prefix (`INF01_`, `PMP02_`).  
3. Watch a **chain**, not one bit:

```
Start / Stop_OK / Guard / EStop_OK / Mode  →  Run_Cmd  →  Run_FB / Fault
```

4. Operate once. Find the **first bit that fails the chain**. That is your problem area.

| First false bit | Think |
|-----------------|--------|
| `Stop_OK` | Stop circuit / NC convention / force |
| `Guard_OK` | Field guard / alias / force |
| `Run_Cmd` never true | Logic/mode — Cross-Ref the OTE |
| `Run_Cmd` true, no FB | Output path or starter/VFD |

### 4.3 Cross Reference

**Like:** Finding every place a wire number lands on a drawing.

1. Right-click the command tag → **Cross Reference**.  
2. Find **who writes it** (OTE / OTL / OTU / MOV / MSG / HMI).  
3. Prefer **one OTE owner** for a motor run command.  
4. Open the rung that should seal/start — verify permissives live online.

| Cross-Ref shows | Meaning |
|-----------------|---------|
| No OTE | Nothing commands it — wrong tag or dead routine |
| Two OTEs | Contention — last wins |
| Only XIC, no write | Something else should write it (HMI/MSG) — or bug |

### 4.4 Trends

**Like:** Chart recorder on a flaky limit switch.

Use when: random stops, “sometimes,” flicker.

1. Trend **cause + effect** together (e.g. PE + permissive + Run_Cmd + Fault).  
2. Sample fast enough for the glitch.  
3. Save screenshot for the work order.  
4. See [DT-INT](Symptom_Decision_Trees/DT-INT-intermittent.md).

### 4.5 Search / Find

**Like:** Finding a wire number in a thick print package.

- Search tag fragment: `MTR01`, `VFD`, `Divert`  
- Search description text  
- Find which program owns the station  

Use when tribal knowledge says “it’s in the filler program” and the organizer is huge.

### 4.6 Module properties / I/O tree

**Like:** Looking at a card’s status LEDs with a manual in hand.

Online → I/O Configuration → module → Connection / status:

- Faulted / timed out / inhibited  
- Catalog vs physical sticker  
- Remote adapter power  

→ [Common_Faults_&_Codes.md](Common_Faults_&_Codes.md) · [FC-06](Fault_Codes/FC-06-connection-faults.md)

### 4.7 Meter (still required)

Tag true is **not** voltage at the coil.  
When layer 5–7 is in play: meter module terminal and load — LOTO rules apply.

---

## 5. Recommended tool order by layer

| Broken layer | Tools in order |
|--------------|----------------|
| Power | Eyes, LEDs, meter |
| Safety | Field devices, safety relay/module, then PLC `SafetyOK` tag |
| Network | Browser/Who Active, link lights, ping if allowed |
| Controller fault | Fault log Type/Code **before** clear |
| I/O | Module LED → Monitor tag → alias path → meter |
| Logic | Force table → Monitor chain → Cross-Ref → rung |
| Intermittent | Trend first, then field wiggle test |
| Field load | Meter at load, HOA, VFD display, mechanics |

---

## 6. 15-minute triage clock

| Min | Action |
|-----|--------|
| 0–2 | Safe + symptom + what changed |
| 2–5 | Power, FAULT/RUN, safety, obvious field |
| 5–10 | Online: forces, tag chain, module status |
| 10–13 | **One** hypothesis test |
| 13–15 | Stabilize, tell ops, plan next step |

Ops update format:

> “Safety clear/not. Controller running/faulted. Command bit true/false. Output LED on/off. I’m in [layer]. Next update in __ min.”

---

## 7. After you find it

1. Fix **cause**, not only symptom.  
2. Remove all test forces.  
3. Prove field device controls the process again.  
4. One-paragraph RCA for the next shift.  
5. If knowledge gap → later study matching `LEARNING_PATH` module + flashcard.

---

## 8. Jump table

| Need | File |
|------|------|
| Check-first by symptom | [What_to_Check_First.md](What_to_Check_First.md) |
| All trees | [Symptom_Decision_Trees/](Symptom_Decision_Trees/README.md) |
| Tool how-to | [Cross_Reference_and_Tools.md](Cross_Reference_and_Tools.md) |
| Codes / LEDs | [Common_Faults_&_Codes.md](Common_Faults_&_Codes.md) |
| Pocket card | [Quick_Cheatsheets/troubleshooting-pocket.md](Quick_Cheatsheets/troubleshooting-pocket.md) |
| Study later | [../LEARNING_PATH/README.md](../LEARNING_PATH/README.md) |
