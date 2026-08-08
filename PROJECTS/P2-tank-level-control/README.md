# P2 — Tank level control (Phase 2 gate)

## Objective
Pump control with analog level, alarms, hours, HMI tags, trends — **reusing P1 motor discipline**.

## Time
8–10 hours

## Builds on
- P1 seal-in / permissives / I/O map habits  
- Mini-M2 debounce/hours patterns  

## Requirements
- [ ] Multi-routine structure (JSR)  
- [ ] Scaled level EU tag with documented raw/eng  
- [ ] Pump auto strategy documented (e.g. start below low, stop above high)  
- [ ] Manual mode via CMD_ tags  
- [ ] High/Low ALM_ bits  
- [ ] RTO runtime hours  
- [ ] Commissioning trend saved  
- [ ] Naming per `../RESOURCES/templates/tag-naming-standard.md`  
- [ ] Zero forces at handoff  

## Reuse checklist
- [ ] Same force discipline as P1  
- [ ] Same “cmd true vs field dead” split  
- [ ] Teach-back references electrician scaling ≈ meter calibration  

## Rubric
| Item | Pts |
|------|-----|
| Control strategy correct & documented | 30 |
| Scaling accuracy | 20 |
| Modes + HMI tag standard | 20 |
| Alarms + hours | 15 |
| Trend + teach-back | 15 |

**Pass ≥ 85**

## Retention
- Flashcards: `../LEARNING_PATH/Retention/flashcards/03-timers-counters.md` + analog questions in `02`  
- Teach-back: `../LEARNING_PATH/Retention/teach-back/TB-phase2.md`  
- Schedule SR-2  

## Next
Mini-M3 → P3 → … → [CAPSTONE](../CAPSTONE-inspect-station/)
