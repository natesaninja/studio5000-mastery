# 2.1 — Timers (TON, TOF, RTO)

## Learning objectives

- Select TON vs TOF vs RTO for real equipment scenarios without hesitation
- Use `.PRE`, `.ACC`, `.EN`, `.TT`, `.DN` correctly
- Build debounce, dwell, and runtime patterns
- Reset RTO intentionally

**Time:** 5–6 h | **Prereq:** Phase 1 gate  
**Labs:** `../../LABS/02-intermediate/LAB-2.1A-dwell.md`, `LAB-2.1B-runtime-hours.md`

---

## Electrician map

| Timer relay | Instruction | Behavior |
|-------------|-------------|----------|
| On-delay | **TON** | Timing while rung true; DN after PRE |
| Off-delay | **TOF** | DN drops after PRE once rung goes false |
| Retentive / elapsed | **RTO** | Accumulates; holds ACC until RES |

---

## Members you’ll live in

| Member | Meaning |
|--------|---------|
| `.PRE` | Preset (ms typically for TIMER) |
| `.ACC` | Accumulated |
| `.EN` | Enable (rung true condition status) |
| `.TT` | Timing |
| `.DN` | Done |

**Units:** TIMER base is milliseconds in Logix TIMER structures — confirm when setting PRE (3000 = 3 s).

---

## Patterns

1. **Debounce sensor** — TON short PRE before accepting true  
2. **Dwell / lubricate** — TON after start before next step  
3. **Drop-out delay** — TOF keep fan running after heat off  
4. **Runtime hours** — RTO while running; scale ACC to hours; RES only on maintenance reset  

---

## Common faults

- Using TON when you needed RTO (ACC clears when rung false)  
- Forgetting RES on RTO  
- PRE left at 0  
- Timing on a chattering input without debounce  

---

## Teach-back

> “Explain TON vs RTO like you’re teaching timer relays in a motor control class.”

## Success criteria

- [ ] Correct timer for 5 scenarios  
- [ ] Quiz ≥ 85%  

## Next

→ [2.2 Counters](02-counters.md)
