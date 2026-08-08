# Common faults & codes — job aid

**Field guide.** Exact Type/Code numbers vary by controller firmware — always record the **live** description, then classify.

Deep read: [Reading_Faults_Detail.md](Reading_Faults_Detail.md)  
Recovery tree: [Symptom_Decision_Trees/DT-MAJ-major-fault-recovery.md](Symptom_Decision_Trees/DT-MAJ-major-fault-recovery.md)

---

## 1. Major vs minor (first split)

| Class | Effect | Do |
|-------|--------|-----|
| **Major** | Program may stop; outputs to fault action | Record code → fix cause → clear → verify |
| **Minor** | Warning; often still running | Log; act if process affected |

**Clear ≠ fix.** Re-fault immediately = cause still present.

---

## 2. Controller LEDs → [Fault_Codes/FC-01-controller-leds.md](Fault_Codes/FC-01-controller-leds.md)

| See | Think |
|-----|--------|
| No lights | Power / PSU |
| Fault LED | Online → major fault log |
| OK/RUN normal | Leave CPU; chase I/O/logic/field |
| Force indicator | Force tables **now** |
| Link dark | Network path (DT-COM) |

---

## 3. I/O module faults → [FC-02](Fault_Codes/FC-02-io-module-faults.md)

| Pattern | Likely |
|---------|--------|
| One module after swap | Catalog / slot / keying / field power |
| Whole remote rack | Adapter power, Ethernet, IP |
| All DI zero, CPU OK | **Field 24 V** |
| Tag on, DO LED off | Output supply / module / alias |

---

## 4. Connection faults → [FC-06](Fault_Codes/FC-06-connection-faults.md)

Connection = CIP schedule to module/device, not one wire.

| Status | Meaning |
|--------|---------|
| Faulted / timed out | Not updating |
| Inhibited | Told not to connect |
| OK but data wrong | Alias/logic — not connection |

Order: power → link lights → IP/path → catalog/keying → inhibit → switch/IT.

---

## 5. Major fault families → [FC-07](Fault_Codes/FC-07-fault-type-families.md)

| Family | Floor feel | First checks |
|--------|------------|--------------|
| Program / instruction | After logic change | Routine cited; math; JSR |
| I/O elevated | Module/rack event | I/O tree, FC-02/06 |
| Watchdog / task | Heavy scan / loops | Scan, overlap, ST loops |
| Motion | Axis/drive | Drive display, enable |
| Power-up / memory | After outage | SD load, known ACD, firmware |

Capture before clear:

```
Type: ____  Code: ____  Description: ________________
Time: ____  Program/Routine: ____  What changed: ____
```

---

## 6. MSG / CIP data → [FC-04](Fault_Codes/FC-04-msg-and-cip.md)

| Bit | Meaning |
|-----|---------|
| `.DN` | Success |
| `.ER` | Error — path, tag, size, target, network |
| Heartbeat stale | Peer dead or path dead — **safe defaults** |

---

## 7. Analog symptoms → [FC-03](Fault_Codes/FC-03-analog-symptoms.md)

| Reading | Suspect |
|---------|---------|
| Raw ~0 on 4–20 | Open loop / no loop power |
| Raw OK, EU wrong | Scale min/max / units |
| Pegged high | Short / wrong range |

---

## 8. Safety

Dual-channel / Guard / curtain trips → [DT-06](Symptom_Decision_Trees/DT-06-safety-trip.md)  
**Do not** force safety inputs as a normal fix.

---

## 9. Pocket cheats

- [Quick_Quick_Cheatsheets/major-fault-pocket.md](Quick_Quick_Cheatsheets/major-fault-pocket.md)  
- [Quick_Quick_Cheatsheets/troubleshooting-pocket.md](Quick_Quick_Cheatsheets/troubleshooting-pocket.md)  
- [Quick_Quick_Cheatsheets/diagnostic-status-bits.md](Quick_Quick_Cheatsheets/diagnostic-status-bits.md)  

---

## Detail sheets index

| File | Topic |
|------|--------|
| [FC-01](Fault_Codes/FC-01-controller-leds.md) | Controller LEDs |
| [FC-02](Fault_Codes/FC-02-io-module-faults.md) | I/O modules |
| [FC-03](Fault_Codes/FC-03-analog-symptoms.md) | Analog |
| [FC-04](Fault_Codes/FC-04-msg-and-cip.md) | MSG/CIP |
| [FC-05](Fault_Codes/FC-05-major-minor-faults.md) | Major vs minor |
| [FC-06](Fault_Codes/FC-06-connection-faults.md) | Connections |
| [FC-07](Fault_Codes/FC-07-fault-type-families.md) | Major families |
