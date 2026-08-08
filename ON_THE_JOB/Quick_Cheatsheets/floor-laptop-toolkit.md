# Cheatsheet — Floor laptop toolkit

## Open first (almost every call)
1. **Force tables**  
2. **Controller mode / fault**  
3. **Monitor tags** for the device  
4. **Cross-reference** on the output command  

## Data monitor
Watch a **chain**:
```
Start / Stop_OK / Guard / EStop_OK / Mode → Run_Cmd → Run_FB → Fault
```
Find the first bit that fails.

## Cross-reference
- Find OTE/OTL/OTU owners  
- Prefer **one OTE** per run command  
- Offline OK for planning  

## Forces
| Step | Do |
|------|-----|
| 1 | Authorize + tell ops |
| 2 | Log tag/value/why/who/time |
| 3 | Momentary test |
| 4 | Remove |
| 5 | Prove field device works |
| 6 | Table empty |

**Force input TRUE → logic OK?** Field/input path suspect.  
**Force output TRUE → LED on, load dead?** Field after module.

## Trends
- Cause + effect tags together  
- Fast enough sample for the glitch  
- Save artifact to work order  
- Name by problem  

## Module properties
- Connection status  
- Inhibit  
- Catalog vs sticker  
- RPI (don’t cargo-cult change)  

## Identity before download
Panel label = controller name = browser path  

## Online vs offline
| Need live truth | Online |
|-----------------|--------|
| Study structure | Offline OK |
| Intermittent | Trend online |
| Change production | Auth + window |

## Don’t
- Shotgun multi-rung edits  
- Force safety  
- Trust green rung as coil voltage  
- Download to “whatever appears first”  
