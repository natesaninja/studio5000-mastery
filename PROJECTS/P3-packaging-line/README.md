# P3 — Packaging line (Phase 3 gate)

## Objective
Three-station line using mixed languages, UDT/AOI motors, and peer data.

## Time
12–15 hours

## Builds on
- P1 interlocks, P2 alarms/HMI naming  
- Mini-M3 motor AOI/UDT  

## Stations (example)
1. **Infeed conveyor**  
2. **Process / hold**  
3. **Outfeed / reject**  

## Requirements
- [ ] ≥3 motor instances via UDT + AOI (or justified equivalent)  
- [ ] Modes: Auto / Manual / Fault  
- [ ] Sequence in ST **or** SFC  
- [ ] Discrete interlocks in Ladder  
- [ ] Optional FBD for analog  
- [ ] Produce/consume **or** MSG with heartbeat + CommFault defaults  
- [ ] Alarm summary bits  
- [ ] Architecture one-pager  

## Rubric
| Item | Pts |
|------|-----|
| Architecture & language choices | 25 |
| AOI/UDT quality | 25 |
| Sequence correctness | 20 |
| Comms fault handling | 15 |
| Docs + teach-back | 15 |

**Pass ≥ 85**

## Retention
- `../LEARNING_PATH/Retention/teach-back/TB-phase3.md`  
- Cards: languages, AOI/UDT, heartbeat (`05`, `04`)  
- Mini-M4 next for hardened heartbeat  

## Next
Mini-M4 → P4 → [CAPSTONE](../CAPSTONE-inspect-station/)
