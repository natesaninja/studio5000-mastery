# Capstone tag list

## Modes / commands
| Tag | Type | Scope | Description |
|-----|------|-------|-------------|
| CMD_Mode | DINT or BOOLs | Controller | 0 Off 1 Manual 2 Auto |
| CMD_StartCycle | BOOL | | |
| CMD_FaultReset | BOOL | | |
| CMD_Stop | BOOL | | |

## Status
| Tag | Type | Description |
|-----|------|-------------|
| STS_State | DINT | Auto state number |
| STS_StateName | STRING optional | |
| STS_LastResult | DINT | 0 none 1 pass 2 fail |
| STS_Ready | BOOL | |

## Alarms
| Tag | Description |
|-----|-------------|
| ALM_FaultActive | |
| ALM_Timeout_Station | |
| ALM_Timeout_Clear | |
| ALM_CommFault | optional |

## Equipment (or UDT instances)
| Instance / tags | Notes |
|-----------------|-------|
| | |
| | |

## Config
| Tag | Default | Units |
|-----|---------|-------|
| CFG_T_Debounce_ms | | ms |
| CFG_T_Inspect_ms | | ms |
| CFG_T_Clear_ms | | ms |
| CFG_T_FaultTimeout_ms | | ms |
