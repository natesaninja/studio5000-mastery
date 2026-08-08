# DT-02 — I/O not updating / tag disagrees with field

**Use for:** Packaging sensors, guards, photoeyes, pushbuttons, stack lights.

```
Symptom: field device state ≠ tag  OR  module LED ≠ tag
│
├─ Forces present on tag or I/O? (check force tables first)
│  YES → Remove/log; retest
│  NO ↓
│
├─ Module connection healthy (no fault/inhibit)? Online module properties
│  NO → FC-02 path, power, chassis, network adapter, keying, wrong catalog
│  YES ↓
│
├─ Alias points to correct module/slot/bit? (I/O map in hand)
│  NO → Fix alias / map; off-by-one is common after panel work
│  YES ↓
│
├─ For INPUTS: meter at module terminal agrees with module LED?
│  NO → Field wiring / device / power / wrong TB
│  YES, but tag wrong → config, wrong project downloaded, connection image issue
│
├─ For OUTPUTS: tag TRUE, LED off?
│  → module power, output supply, module fault, wrong alias
│  tag TRUE, LED on, field dead?
│  → wire, load, common, blown fuse, HOA open
│
└─ Packaging special: HOA in HAND bypasses PLC — confirm selector before blaming logic
```

## Quick packaging patterns

| Observation | Think |
|-------------|--------|
| Prox LED on, DI LED on, tag 0 | Force / alias / connection |
| All DI dead, CPU OK | Field 24 V |
| Start lights neighbor conveyor | DO alias swapped |
