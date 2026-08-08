# P1 test plan — INF01

| # | Setup | Action | Expected | Result | Initials |
|---|-------|--------|----------|--------|----------|
| 1 | All permissives OK | Pulse Start | Run seals; run light on | | |
| 2 | Running | Stop | Run drops | | |
| 3 | Guard false | Start | No run; fault indication | | |
| 4 | Dsch_Clear false | Start | No run | | |
| 5 | Running | Open guard | Run drops | | |
| 6 | OL_OK false | Start | No run | | |
| 7 | EStop_OK false | Start | No run | | |
| 8 | Fault latched (if used) | Reset with permissives OK | Clears | | |
| 9 | Forces table | Audit | Empty | | |
| 10 | Cross-ref Run_Cmd | Inspect | Single OTE owner | | |

## Notes
