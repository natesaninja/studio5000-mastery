# DT-MAJ — Major fault recovery

**Symptom:** Controller faulted; program stopped or not running as expected; fault LED; outputs in fault action state.  
**Electrician parallel:** Control circuit tripped — reset only after you know why.

```
START: Major fault / controller not running logic normally
│
├─ 1. MAKE SAFE
│  Assume outputs may be OFF or in configured fault state
│  Do not bypass safety to “get a few more parts”
│
├─ 2. GO ONLINE (if path exists) — DT-COM if not
│  Record BEFORE clearing:
│    Type / Code / Description / Time / Routine if shown
│
├─ 3. CLASSIFY (see FC-05, FC-07)
│  ├─ Program/instruction related
│  ├─ I/O related
│  ├─ Watchdog / resource
│  ├─ Motion related
│  └─ Power-up / memory related
│
├─ 4. CORRECT THE CAUSE (examples)
│  Program: divide by zero source, bad indirect, recent edit → fix logic offline/online window
│  I/O: restore module/connection, power remote rack
│  Watchdog: remove infinite loop / reduce overload (eng support)
│  Motion: clear drive/axis cause per OEM
│  Power-up: proper load from SD/known ACD, firmware match
│
├─ 5. CLEAR FAULT per site procedure
│  Only after cause addressed or approved temporary state
│
├─ 6. VERIFY
│  Mode → RUN
│  No immediate re-fault
│  Critical I/O connections OK
│  Sample Manual functions if safe
│  Ops trial
│
└─ 7. DOCUMENT
   Code + root cause + fix + who cleared
```

## Do / Don’t

| Do | Don’t |
|----|-------|
| Write the code down | Clear, clear, clear hoping |
| Ask “what changed?” | Download random old ACD blindly |
| Check forces after recovery | Leave test rungs |
| Escalate motion/safety | Force safety to run through fault |

## If it re-faults immediately

Cause still present.  
Re-read code; check I/O tree; consider last download; call controls engineer with **recorded code**.

## If you cannot go online

1. Note LED pattern ([FC-01](../Fault_Codes/FC-01-controller-leds.md))  
2. Power / keyswitch checks only per procedure  
3. Get engineering laptop / correct path  
4. Do not cycle power repeatedly as a “fix” without understanding fault action on outputs  

## Related

- [Reading_Faults_Detail.md](../Reading_Faults_Detail.md)  
- [major-fault-pocket.md](../Quick_Quick_Cheatsheets/major-fault-pocket.md)  
