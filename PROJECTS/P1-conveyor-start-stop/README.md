# P1 — Conveyor start/stop (Phase 1 gate)

## Objective
Build a plant-credible **packaging infeed conveyor** motor control program using everything from Modules 1.1–1.8.

## Estimated time
6–8 hours

## Running example
- Equipment: `INF01` infeed conveyor  
- Controller: `PKG_CELL01` (Emulate or real)  
- Control: 24 VDC starter coil from DO; discrete permissives from DI  

---

## Functional requirements

- [ ] Momentary **Start**, **Stop** with documented NC field → `Stop_OK` convention  
- [ ] **E-stop OK** permissive into standard logic (note: not a full safety system design)  
- [ ] **OL OK**  
- [ ] Two process interlocks: **Guard_OK**, **Discharge_Clear**  
- [ ] Seal-in **Run_Cmd** to motor DO  
- [ ] **Run light**  
- [ ] **Fault light** (blocked start and/or latched fault + reset)  
- [ ] Cannot start if any critical permissive false  
- [ ] Opening an interlock while running drops the motor  

## Engineering requirements

- [ ] Controller-scoped aliases for all I/O  
- [ ] I/O map table (`IO_MAP.md` in this folder)  
- [ ] Meaningful `INF01_…` tag names + descriptions  
- [ ] Routine organization clean (single MainRoutine OK; multi-routine bonus)  
- [ ] Zero forces at handoff  
- [ ] Project verify clean  

## Verification

- [ ] Written test plan ≥ 8 steps with pass/fail  
- [ ] One injected fault found and fixed with RCA (from Lab 1.8 style)  
- [ ] Teach-back: **1 page** “How INF01 starts and stops” for an apprentice  
- [ ] Phase 1 cumulative quiz ≥ 85%  

## Deliverables in this folder

| File | Purpose |
|------|---------|
| `IO_MAP.md` | Point list |
| `TEST_PLAN.md` | Tests + results |
| `RCA_sample.md` | One fault RCA |
| `TEACHBACK.md` | Apprentice explanation |
| Your `.ACD` (local only — gitignored) | Working project |

---

## Rubric (100 pts)

| Item | Pts |
|------|-----|
| All functions work per tests | 40 |
| Tag / I/O / naming quality | 20 |
| Test plan evidence | 15 |
| Injected fault RCA | 10 |
| Teach-back quality | 15 |

**Pass ≥ 85**

## Stretch
- Jog mode (momentary, no seal-in) with selector  
- Runtime hour meter (preview RTO — Phase 2)  
- Second motor using same pattern  

## Spaced review
After pass: schedule **SR-1** (+1 day / +1 week / +1 month) in `quizzes/spaced-review/SR-1-phase1.md`.

## Reuses next
P2 tank project reuses permissives, seal-in, I/O discipline, force rules, and multi-routine structure.
