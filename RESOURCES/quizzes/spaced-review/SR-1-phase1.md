# SR-1 — Phase 1 spaced-repetition deck

Use after P1 (or after 1.8). Review at **+1 day, +1 week, +1 month** from first clear of each card.

## How to review
Cover answers. Speak aloud like teaching an apprentice. Miss → re-lab that module section.

---

## Cards

### Scan & mental model
**Q:** Continuous scan steps?  
**A:** Read inputs → solve logic → write outputs.

**Q:** Why LED can disagree with tag?  
**A:** Forces, wrong alias, connection/config, wrong project mapping.

**Q:** PLC vs voltmeter on stuck contact?  
**A:** Meter sees voltage now; PLC uses input image + logic.

### Hardware
**Q:** Three power domains?  
**A:** Chassis/CPU; field 24 V; network (motor power separate).

**Q:** CPU OK, all inputs dead — check first?  
**A:** Field 24 V supply.

### Structure
**Q:** Task / Program / Routine?  
**A:** Schedule / machine section / logic sheet.

**Q:** Unscheduled program does what?  
**A:** Never runs.

### Tags
**Q:** Alias means?  
**A:** Name for same path/memory — not a second copy.

**Q:** HMI command bit scope?  
**A:** Controller scope.

**Q:** Default integer type?  
**A:** DINT.

### I/O
**Q:** `Local:1:I.Data.0` concept?  
**A:** Local slot 1 input bit 0.

**Q:** Why alias rungs?  
**A:** Readable; retarget one place; fewer errors.

### Ladder
**Q:** XIC / XIO truth?  
**A:** True if 1 / true if 0.

**Q:** NC stop healthy → tag? Instruction on Stop_OK?  
**A:** Usually 1; XIC.

**Q:** Seal-in pattern?  
**A:** Start OR Run, series permissives, OTE Run.

**Q:** Why permissives not only on Start?  
**A:** Must drop motor when interlock opens while running.

**Q:** Default motor memory: OTE seal-in or OTL?  
**A:** OTE seal-in.

### Online / force
**Q:** Download direction?  
**A:** PC → controller.

**Q:** Force equals?  
**A:** Jumper — log, use, remove, verify.

**Q:** Green rung guarantees coil voltage?  
**A:** No.

### Troubleshoot
**Q:** Six buckets?  
**A:** Energy/mode; field; I/O config; alias; logic; overrides.

**Q:** DT-01 / DT-02 / DT-03?  
**A:** Won’t start / I/O mismatch / won’t download-online.

**Q:** Tag true, starter dead — first ideas?  
**A:** DO LED, alias, output supply, fuse, field coil circuit.

**Q:** Cross-reference for?  
**A:** Every use / find OTE owner.

---

## Schedule log

| Review | Date | % correct | Weak cards |
|--------|------|-----------|------------|
| +1 day | | | |
| +1 week | | | |
| +1 month | | | |
