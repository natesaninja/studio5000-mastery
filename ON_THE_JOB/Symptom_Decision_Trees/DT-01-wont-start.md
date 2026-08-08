# DT-01 — Motor / conveyor won’t start

**Use for:** Packaging infeed, case conveyor, machine-tool spindle aux — any discrete run command.

```
START: "Won't start"
│
├─ Is it SAFE to troubleshoot? (LOTO / moving equipment / guards)
│  NO → Stop. Make safe first.
│  YES ↓
│
├─ Controller in RUN / not major faulted? Power OK? (DT-1.2 / FC-01)
│  NO → Power, mode, fault log
│  YES ↓
│
├─ Forces present on Start, Stop, Run, or permissives?
│  YES → Log and remove or explain; retest
│  NO ↓
│
├─ Does the COMMAND bit (Run_Cmd) go TRUE when you try to start?
│  NO → Logic / HMI / permissives / mode path
│  │     ├─ Start_PB tag TRUE while pressed?
│  │     ├─ Stop_OK TRUE when not pressed? (NC wiring convention!)
│  │     ├─ EStop_OK, OL_OK, Guard_OK, Dsch_Clear TRUE?
│  │     ├─ Fault latched blocking start?
│  │     ├─ Correct routine scanned (JSR / MainRoutine)?
│  │     └─ XIO/XIC inverted on stop or permissives?
│  YES ↓
│
├─ Does the physical OUTPUT energize (module LED / meter at DO terminal)?
│  NO → Alias wrong bit? Module fault? Output supply? Inhibited connection?
│  YES ↓
│
├─ Does the starter / VFD actually run?
│  NO → Field: coil, OL trip mechanically, VFD enable, HOA, power, mechanics
│  YES → Perception issue, wrong motor, feedback/HMI only
```

## Electrician parallel
- Coil voltage present? → starter/mechanical/VFD.  
- No coil voltage? → control path.  
- PLC adds: **Run_Cmd image** and **DO path** before the terminal.

## Packaging example
Infeed won’t start; `Guard_OK` false; prox LED on; module LED on; tag false → **alias/force** (DT-02), not “bad guard.”
