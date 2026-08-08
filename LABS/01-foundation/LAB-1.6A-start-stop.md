# LAB 1.6A — 3-wire start/stop (infeed conveyor)

## Goal
Implement seal-in start/stop with OL and e-stop OK permissives.

## Time
60–90 min  
**Emulate or hardware**

---

## Logic requirements

Rung design:

- Series: `EStop_OK`, `Stop_OK`, `OL_OK`  
- Start branch: `Start_PB` OR `Run_Cmd`  
- Coil: `OTE Run_Cmd`  
- Run light follows `Run_Cmd`  

Document Stop convention at top of routine description.

---

## Test plan

| # | Action | Expected | Pass |
|---|--------|----------|------|
| 1 | All permissives OK, pulse Start | Run seals ON | ☐ |
| 2 | Press Stop (Stop_OK → 0) | Run drops | ☐ |
| 3 | OL_OK false, try Start | No run | ☐ |
| 4 | While running, drop OL_OK | Run drops | ☐ |
| 5 | While running, drop EStop_OK | Run drops | ☐ |
| 6 | Hold Start only (no seal-in if broken) | Must seal without holding | ☐ |

---

## Pass criteria
- [ ] All tests pass  
- [ ] No OTL on motor run  
- [ ] Screenshot or note of online monitor  
- [ ] Zero unintended forces  

## If it fails
Use DT-01. Do not force Run as a “fix.”
