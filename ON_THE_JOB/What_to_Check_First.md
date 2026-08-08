# What to check first

**Electrician language. Job aid only.**  
Match the symptom → do the first checks in order → open the tree if not solved in 5 minutes.

Master workflow: [Finding_the_Problem_Area.md](Finding_the_Problem_Area.md)

---

## Universal first three (almost every call)

1. **Safe?**  
2. **Force tables** — anything forced?  
3. **Controller identity** — are you online to the right PLC / right panel label?

---

## Symptom quick cards

### A. “Won’t start” (motor / conveyor / pump)

| # | Check | Why |
|---|--------|-----|
| 1 | Mode Auto vs Manual / HOA | Hand may bypass PLC |
| 2 | E-stop / guard / safety OK | Machine correctly refusing |
| 3 | Online: does `Run_Cmd` go TRUE? | Splits logic vs power |
| 4 | If cmd TRUE: DO LED + voltage at coil | Output path vs starter |
| 5 | `Stop_OK` healthy when not pressed? | NC stop trap |

**Tree:** [DT-01](Symptom_Decision_Trees/DT-01-wont-start.md) · [DT-OUT](Symptom_Decision_Trees/DT-OUT-outputs-not-on.md)

---

### B. “Output not turning on” (light, valve, starter from PLC)

| # | Check |
|---|--------|
| 1 | Command tag TRUE? |
| 2 | Forces on that tag? |
| 3 | Alias to correct DO bit? |
| 4 | Module fault / output power / fuse? |
| 5 | Voltage at load? HOA? Safety contactor downstream? |

**Tree:** [DT-OUT](Symptom_Decision_Trees/DT-OUT-outputs-not-on.md)

---

### C. “Input not reading” (PB, prox, PE, OL aux)

| # | Check |
|---|--------|
| 1 | Forces on input? |
| 2 | Module LED while you actuate device? |
| 3 | Tag value vs LED — mismatch = alias/connection |
| 4 | Field 24 V if **all** inputs dead |
| 5 | Sinking/sourcing / landing wrong channel |

**Tree:** [DT-IN](Symptom_Decision_Trees/DT-IN-inputs-not-reading.md)

---

### D. “Sequence hangs” / Auto stuck mid-cycle

| # | Check |
|---|--------|
| 1 | What **state** number/name is it in? (Monitor) |
| 2 | Which transition sensor is false? |
| 3 | Fault latched blocking advance? |
| 4 | Routine actually scanned? (JSR / SFC step) |
| 5 | Timeout should have fired — timer PRE/rung? |

**Tree:** [DT-SCAN](Symptom_Decision_Trees/DT-SCAN-logic-not-running.md)

---

### E. “Intermittent” / random stops / sometimes

| # | Check |
|---|--------|
| 1 | Do **not** replace parts first |
| 2 | Trend: suspect sensor + Run_Cmd + Fault |
| 3 | Wiggle wire / connector while trending |
| 4 | Force table (left-on forces act “random” across shifts) |
| 5 | Loose shield / noise on PE |

**Tree:** [DT-INT](Symptom_Decision_Trees/DT-INT-intermittent.md)

---

### F. “After power cycle / came up wrong”

| # | Check |
|---|--------|
| 1 | Controller major fault? Record code |
| 2 | Field 24 V and chassis power both good? |
| 3 | Remote I/O connections back? |
| 4 | Latched faults / modes needing reset? |
| 5 | VFD Ready before PLC Run command? |
| 6 | Retentive latches stuck in bad state? |

**Tree:** [DT-PWR](Symptom_Decision_Trees/DT-PWR-after-power-cycle.md)

---

### G. “FAULT light on controller” / major fault

| # | Check |
|---|--------|
| 1 | Make process safe |
| 2 | Go online — **write Type/Code/Description before clear** |
| 3 | I/O tree yellow modules? |
| 4 | What changed / power event? |
| 5 | Fix cause → clear → verify no instant re-fault |

**Tree:** [DT-MAJ](Symptom_Decision_Trees/DT-MAJ-major-fault-recovery.md) · [Common_Faults_&_Codes.md](Common_Faults_&_Codes.md)

---

### H. “Can’t go online” / HMI red / lost comms

| # | Check |
|---|--------|
| 1 | Controller powered? Link lights? |
| 2 | Correct path / IP / not the neighbor cell? |
| 3 | Laptop subnet vs controller |
| 4 | Switch port / cable |
| 5 | Scope: laptop only vs whole plant HMI |

**Tree:** [DT-COM](Symptom_Decision_Trees/DT-COM-communication-loss.md) · [DT-03](Symptom_Decision_Trees/DT-03-wont-download.md)

---

### I. “Ignores Stop” / runs on its own

| # | Check |
|---|--------|
| 1 | **Force tables first** |
| 2 | Monitor `Stop_OK` while pressing Stop |
| 3 | Cross-Ref Run_Cmd for extra OTE/OTL |
| 4 | HMI maint / bypass bits |
| 5 | NC stop programming convention |

**Tree:** [DT-1.6](Symptom_Decision_Trees/DT-1.6-stop-logic.md)

---

### J. “VFD runs in Hand, not from PLC”

| # | Check |
|---|--------|
| 1 | PLC `Run_Cmd` true in Auto? |
| 2 | If no → logic/permissives |
| 3 | If yes → DO or network to drive; drive Remote source; STO/safety; speed ref |

**Tree:** [DT-OUT](Symptom_Decision_Trees/DT-OUT-outputs-not-on.md) · scenarios VFD in [Scenarios/electrician-field-pack.md](Scenarios/electrician-field-pack.md)

---

### K. “Safety won’t reset”

| # | Check |
|---|--------|
| 1 | Do **not** force safety inputs |
| 2 | Dual channel / device that still open |
| 3 | Reset PB sequence (many need clear + reset) |
| 4 | Only then: does PLC see Safety_OK? |

**Tree:** [DT-06](Symptom_Decision_Trees/DT-06-safety-trip.md)

---

### L. “Analog reading wrong”

| # | Check |
|---|--------|
| 1 | Raw wrong or only scaled (EU) wrong? |
| 2 | Loop power / mA if 4–20 |
| 3 | Scale min/max / units |
| 4 | Channel config / landing |

**Tree:** [DT-04](Symptom_Decision_Trees/DT-04-analog-wrong-reading.md)

---

## One-line splitters (memorize)

| See | Means |
|-----|--------|
| Cmd tag FALSE | Logic side |
| Cmd TRUE, DO LED OFF | PLC output path |
| LED ON, no load volts | Field after module |
| Load volts, no motion | Power device / mechanical |
| CPU OK, all DI dead | Field 24 V |
| LED ON, tag FALSE | Force / alias / connection |

---

## Related

- [Finding_the_Problem_Area.md](Finding_the_Problem_Area.md)  
- [Symptom_Decision_Trees/README.md](Symptom_Decision_Trees/README.md)  
- [Quick_Cheatsheets/troubleshooting-pocket.md](Quick_Cheatsheets/troubleshooting-pocket.md)  
