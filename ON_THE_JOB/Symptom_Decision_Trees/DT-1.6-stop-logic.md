# DT-1.6 — Won’t stop / stop inverted / stop ignored

```
START: Stop PB does not behave as operators expect
│
├─ Monitor INF01_Stop_OK (or site stop tag) while pressing Stop
│
├─ Value when NOT pressed (healthy):
│  Expect 1 for NC field wired stop into DI
│  If 0 healthy → wiring, power, wrong contact, or alias
│
├─ Value when PRESSED:
│  Expect 0 for NC field opening
│  If stays 1 → jumper, welded, wrong parallel path, FORCE on tag
│
├─ Is Stop_OK (or stop examine) actually on the run rung?
│  NO → logic bug
│  YES ↓
│
├─ Instruction polarity
│  XIO on an OK tag that is 1 when healthy → inverted (won't run)
│  Missing stop on OTL run → may not unlatch
│
├─ Forces on Stop or Run?
│  YES → remove
│
└─ Multiple OTE/OTL owners of Run?
   → Cross-reference; one owner
```

## Classic packaging failure
Night shift “fixed” stop by forcing `Stop_OK` true permanently so line would run — morning can’t stop from PB. Force table is the first screen after safety.
