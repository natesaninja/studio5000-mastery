# LAB 1.6B — Packaging permissives + fault light

## Goal
Add guard + discharge clear; provide operator-visible fault indication.

## Time
60–90 min

---

## Requirements

### Run permissive (all series with existing)
- `INF01_Guard_OK`  
- `INF01_Dsch_Clear`  

### Fault indication (choose and document one design)

**Design A — Active block:**  
`Fault_Light` = Start pressed AND (any permissive false)

**Design B — Latched fault:**  
Invalid start attempt latches `INF01_Fault` → Fault_Light; clear with `Fault_Reset` only if permissives OK.

Use **Design B** if you can; otherwise A is acceptable with a note.

### Behavior
| Condition | Run | Fault light |
|-----------|-----|-------------|
| All OK, Start | Seals | Off |
| Guard open, Start | No | On (A or latched B) |
| Running, guard opens | Drop | Per design |
| Reset with still open guard | | Fault stays or reappears |

---

## Test plan
Document ≥6 tests covering start block, run drop-out, fault clear.

## Pass criteria
- [ ] Cannot start with either interlock false  
- [ ] Running drops if interlock opens  
- [ ] Operator can see blocked start  
- [ ] Design choice written in lab report  

## Realism note
Discharge photoeye “clear” logic depends on NO/NC wiring — state yours in the I/O map.
