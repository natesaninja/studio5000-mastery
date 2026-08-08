# LAB 1.6C — Seal-in vs OTL/OTU

## Goal
Same conveyor run request two ways; list hazards like a senior tech.

## Time
45–60 min

---

## Procedure

### Branch A — Production style
Existing OTE seal-in on `INF01_MTR01_Run_Cmd`.

### Branch B — Experiment tags only
Create:
- `EXP_Start`, `EXP_Stop`, `EXP_Run_Latched` (do **not** alias to real motor)

Logic:
- Start → `OTL EXP_Run_Latched`  
- Stop → `OTU EXP_Run_Latched`  

### Compare table

| Question | Seal-in OTE | OTL/OTU |
|----------|-------------|---------|
| Drops when permissive opens mid-run (if permissives in series)? | | |
| Needs OTU path? | | |
| Behavior after mode change / power cycle (note platform)? | | |
| Risk if Stop not in logic? | | |
| Good default for conveyor starter? | | |

### Hazard list
Write ≥5 hazards of OTL motor commands in a packaging line.

---

## Pass criteria
- [ ] Both patterns demonstrated  
- [ ] Comparison table complete  
- [ ] ≥5 hazards  
- [ ] Recommendation: which pattern for INF01 production and why  
