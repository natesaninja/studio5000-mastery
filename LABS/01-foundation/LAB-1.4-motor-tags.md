# LAB 1.4 — Infeed motor tag set

## Goal
Create a complete controller-scoped tag list for conveyor starter logic without address thinking.

## Time
60–75 min

---

## Required tags

Create **controller-scoped** tags with **descriptions**:

### Commands / field inputs
| Tag | Type | Description |
|-----|------|-------------|
| INF01_Start_PB | BOOL | Start PB (NO) |
| INF01_Stop_OK | BOOL | Stop healthy (NC field → ON when OK) |
| INF01_OL_OK | BOOL | OL aux healthy |
| INF01_Guard_OK | BOOL | Guard closed |
| INF01_Dsch_Clear | BOOL | Discharge clear photoeye |
| INF01_EStop_OK | BOOL | Safety OK permissive into standard PLC |
| INF01_Fault_Reset | BOOL | Fault reset PB |

### Outputs / status
| Tag | Type | Description |
|-----|------|-------------|
| INF01_MTR01_Run_Cmd | BOOL | Motor run command to starter |
| INF01_MTR01_Run_FB | BOOL | Optional aux feedback |
| INF01_Run_Light | BOOL | Run indication |
| INF01_Fault_Light | BOOL | Fault indication |
| INF01_Fault | BOOL | Fault active/latched |
| INF01_Auto_Mode | BOOL | Auto selected (future) |

### Program-scoped (demonstrate scope)
| Tag | Scope | Purpose |
|-----|-------|---------|
| tmp_Debug | Program | Local helper — prove HMI would not see it |

---

## Procedure
1. Create all tags in Edit Tags.  
2. Export or screenshot tag list into lab report / `output/LAB14_tags.md`.  
3. Answer in report:  
   - Why is `Run_Cmd` controller-scoped?  
   - What is an alias going to do in Lab 1.5?  
   - Rename drill: write tags for a second motor `INF01_MTR02` pattern (paper only).  

---

## Pass criteria
- [ ] All required tags + descriptions  
- [ ] One program-scoped tag exists  
- [ ] Written scope justification  
- [ ] Naming consistent (`INF01_…`)  

## Failure modes
- Spaces in names  
- `Motor` with no equipment ID  
- Putting I/O-facing bits only in program scope  
