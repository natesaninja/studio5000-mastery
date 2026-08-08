# DT-1.3 — Can’t find logic / wrong behavior after edit

```
START: "My change isn't there" / "I can't find the motor rung"
│
├─ Is the correct ACD filename open? (check path)
│  NO → Open correct project
│  YES ↓
│
├─ Are you Online to the controller that runs the machine?
│  Offline looking at old file vs online different revision → mismatch
│  YES ↓
│
├─ Is the Program under a Task that is scheduled/running?
│  Unscheduled program will not run
│  YES ↓
│
├─ Is the Routine called?
│  MainRoutine empty of JSR and logic lives only in child routine → dead
│  YES ↓
│
├─ Cross-reference the tag — any hits?
│  NO → tag never used / typo
│  YES → open each hit; find OTE owner
│
└─ Looking in Program Tags for a Controller tag (or reverse)?
   → Check scope
```
