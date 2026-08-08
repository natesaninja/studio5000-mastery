# Cross Reference & Studio tools (fast)

**Job aid.** How to use the laptop like a meter and a print package.

Master workflow: [Finding_the_Problem_Area.md](Finding_the_Problem_Area.md)

---

## Tool order on a typical motor call

```
1. Force tables
2. Data Monitor — tag chain
3. Cross Reference — on Run_Cmd (or coil tag)
4. Module LED / properties if cmd true but no field
5. Trend if intermittent
6. Meter if layer is field
```

---

## 1. Force tables

**Electrician:** Find software jumpers.

| Do | Don’t |
|----|-------|
| Open forces first on “haunted” machines | Leave force overnight |
| Log tag, value, why, who, time | Force safety inputs |
| Remove and verify real device control | Use force as permanent bypass |

**Test meanings**

| Action | If… |
|--------|-----|
| Force input TRUE, logic responds | Logic OK → field/input path suspect |
| Force input TRUE, no response | Wrong tag, logic not scanned, other permissive |
| Force output TRUE, LED on, load dead | Field after module |
| Force output TRUE, LED off | Module/alias/supply |

---

## 2. Data Monitor

**Electrician:** Multi-point probe on named wires.

1. Online → Controller Tags → **Monitor**  
2. Filter by equipment (`INF01_`, `MTR02_`)  
3. Watch a **chain**:

```
Permissives + Start/Stop → Run_Cmd → FB / Fault / Light
```

4. One operate cycle → first false bit = problem area  

**Tips:** Read tag descriptions. Frozen *all* values → path/controller/scan issue ([DT-SCAN](Symptom_Decision_Trees/DT-SCAN-logic-not-running.md) / [DT-COM](Symptom_Decision_Trees/DT-COM-communication-loss.md)).

---

## 3. Cross Reference

**Electrician:** Every landing of a wire number.

1. Right-click tag → **Cross Reference**  
2. List examines (XIC/XIO) and writes (OTE/OTL/OTU/…)  
3. Find **OTE owner** for motor commands  
4. Open that rung online with live values  

| Result | Action |
|--------|--------|
| No writes | Wrong tag or missing logic |
| Multiple OTEs | Contention — fix ownership |
| Writes in uncalled routine | [DT-SCAN](Symptom_Decision_Trees/DT-SCAN-logic-not-running.md) |

Works **offline** for planning; verify **online** for truth.

---

## 4. Trends

**Electrician:** Chart recorder.

| Use for | Setup |
|---------|--------|
| Random stops | PE + permissive + Run_Cmd + Fault |
| Suspected bounce | Fast sample rate |
| Proof for work order | Screenshot/export named by problem |

See [DT-INT](Symptom_Decision_Trees/DT-INT-intermittent.md).

---

## 5. Search / Find

**Electrician:** Index of the print set.

- Tag name fragments  
- HMI prompt text if in descriptions  
- MSG path strings  
- State names in ST  

When the organizer is huge and you only know “case sealer.”

---

## 6. Rung animation

Useful visualization. **Does not** prove voltage at the starter.  
Always pair with tags + meter when needed.

---

## 7. Module properties

Online → I/O tree → module:

- Connection OK / faulted / inhibited  
- Catalog vs sticker  
- Field power issues (often with DI)  

[Common_Faults_&_Codes.md](Common_Faults_&_Codes.md)

---

## 8. Online vs offline

| Need live truth | Online |
|-----------------|--------|
| Study structure / prepare change | Offline OK |
| Intermittent | Online + trend |
| Download | Identity + authorization |

[Online_vs_Offline.md](Online_vs_Offline.md)

---

## Cheatsheet links

- [Quick_Cheatsheets/floor-laptop-toolkit.md](Quick_Cheatsheets/floor-laptop-toolkit.md)  
- [Quick_Cheatsheets/diagnostic-status-bits.md](Quick_Cheatsheets/diagnostic-status-bits.md)  
- [Quick_Cheatsheets/ladder-instructions.md](Quick_Cheatsheets/ladder-instructions.md)  
