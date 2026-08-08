# LAB 1.7 — Online, monitor, force, remove

## Goal
Complete a safe force lifecycle on the infeed project.

## Time
60–90 min

## Safety
On real hardware: authorization, LOTO awareness, no defeating safety devices. Prefer Emulate for force practice.

---

## Procedure

### 1. Path & identity
- Browse to controller  
- Confirm name matches project  
- Record path string in lab report  

### 2. Download
- Download project  
- Resolve prompts carefully  
- Note any revision warnings  

### 3. Go online
- Monitor: Stop_OK, Guard_OK, Start_PB, Run_Cmd  
- Exercise start/stop without forces (all permissives true)  

### 4. Force log (paper)

| Time | Tag | Forced value | Reason | By | Removed? |
|------|-----|--------------|--------|-----|----------|
| | INF01_Start_PB | 1 | Lab test | | |

### 5. Force test
1. With permissives OK, force Start true → Run should seal (or follow your logic).  
2. Remove Start force.  
3. Confirm Run can be stopped and only starts from real Start.  
4. Optional: force a permissive false while running — observe drop-out; remove force.  

### 6. Audit
- Open forces tables  
- **Must be empty**  
- Screenshot or signed note  

### 7. Upload caution (dry run)
Write: “I would upload only when ______ and after saving ______.”

---

## Pass criteria
- [ ] Online success  
- [ ] Force log filled  
- [ ] All forces removed  
- [ ] Start works from field/emulate input without force  
- [ ] Lab report complete  

## Fail condition
Any force left on at end of lab = automatic redo.
