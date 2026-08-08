# Template — Tag naming standard

## Pattern
`[Area]_[Equipment]_[Signal]_[Qualifier]`

Examples:
- `PKG_INF_MTR01_Run_Cmd`
- `PKG_TNK01_Level_EU`
- `CMD_PKG_INF_MTR01_Start`
- `STS_PKG_INF_MTR01_Running`
- `ALM_PKG_TNK01_LevelHigh`
- `CFG_PKG_TNK01_LevelHigh_SP`

## Prefixes
| Prefix | Use |
|--------|-----|
| CMD_ | Operator/system commands |
| STS_ | Status |
| ALM_ | Alarms |
| CFG_ | Setpoints/config |
| RAW_ | Unscaled |
| EU_ | Engineering units |

## Rules
- No spaces  
- Controller scope for HMI/I/O  
- Descriptions required on I/O aliases  
- Site standards override this template  
