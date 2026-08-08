# Cheatsheet — Tags & data types

| Type | Use |
|------|-----|
| BOOL | Discrete |
| DINT | Default integers, states |
| INT | Legacy/16-bit needs |
| REAL | Engineering units |
| TIMER | TON/TOF/RTO structure |
| COUNTER | CTU/CTD structure |

## Scope
- **Controller:** I/O aliases, HMI, shared, MSG  
- **Program:** local helpers  

## Alias
`My_Start` → `Local:1:I.Data.0` (example path)

## Naming sketch
`Area_Equip_Signal_Role`  
`CMD_` `STS_` `ALM_` `CFG_` `EU_` `RAW_`
