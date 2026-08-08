# DT-SCAN — Expected logic not scanning / not updating

**Symptom:** Values frozen, rungs never “move,” edits seem ignored, subroutine “does nothing,” mode bits stuck.  
**Electrician parallel:** Control power on but MCR open for that section — or you’re looking at the wrong drawing book.

```
START: Logic not doing what the print/ACD says it should
│
├─ Are you ONLINE to the correct controller?
│  NO → DT-COM / DT-03; offline values are not live
│  YES ↓
│
├─ Controller mode RUN (or Remote Run) and not major-faulted?
│  Faulted → DT-MAJ
│  Program mode → logic may not be executing as you expect
│  YES ↓
│
├─ Do ANY tags update when you toggle a known good input?
│  NO → connection/controller/scan fundamental problem
│       (lost online display, controller locked up rare, wrong path)
│  YES ↓ (some live, this logic dead)
│
├─ Is the Program scheduled under an executing Task?
│  Unscheduled program → never runs
│  Task inhibited / faulted → DT-MAJ / task properties
│  YES ↓
│
├─ Is the Routine called?
│  MainRoutine has no JSR to rtn_Motors and logic only there → dead
│  SFC not in that step → actions not running
│  MCR zone false → outputs in zone de-energized (non-retentive)
│  JMP skipping section → logic skipped
│  YES ↓
│
├─ AOI / subroutine conditions
│  AOI EnableIn false?
│  JSR not executed because preceding condition false every scan?
│
├─ Multiple writers
│  Another OTE/OTL/HMI/MSG overwrites your bit every scan
│  → Cross-reference all writes
│
├─ Looking at Program-scoped tag while machine uses Controller tag
│  (or opposite) → wrong variable
│
└─ Periodic task rate / overlap (advanced)
   Missed short pulses; task overlap warnings
   → Task monitor; don’t randomly speed RPI without plan
```

## Quick tests

| Test | Result means |
|------|----------------|
| Known input updates in monitor | Online path OK |
| Cross-ref shows no JSR path to routine | Organizational bug |
| Force input that rung needs → still no coil | You’re on wrong rung/tag or skipped logic |
| Values update only after download | You were offline editing |

## After online edit

Pending edits not finalized → logic never became active.  
See Phase 2 online-edit discipline; tree still: confirm edit accepted and matches online.
