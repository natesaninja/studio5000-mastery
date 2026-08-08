# P1 I/O map — INF01 packaging infeed

**Controller:** PKG_CELL01  
**Date:**  
**Author:**  

| Wire # | Device | DI/DO | Module path | Alias tag | Notes |
|--------|--------|-------|-------------|-----------|-------|
| | Start PB NO | DI | | INF01_Start_PB | |
| | Stop PB NC | DI | | INF01_Stop_OK | Healthy = ON |
| | OL aux | DI | | INF01_OL_OK | |
| | Guard prox | DI | | INF01_Guard_OK | |
| | Discharge PE | DI | | INF01_Dsch_Clear | State NO/NC: |
| | E-stop / safety OK | DI | | INF01_EStop_OK | Permissive only |
| | Fault reset PB | DI | | INF01_Fault_Reset | |
| | Starter coil | DO | | INF01_MTR01_Run_Cmd | |
| | Run light | DO | | INF01_Run_Light | |
| | Fault light | DO | | INF01_Fault_Light | |

## Stop convention statement
Field Stop is wired ________. When not pressed, tag is ________. Logic uses ________.
