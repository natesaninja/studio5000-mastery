# LAB 1.3 — Project skeleton (packaging cell)

## Goal
Build a real organizer structure for the infeed learning project.

## Time
45–60 min

---

## Procedure

### 1. New project
- Controller name: `PKG_CELL01`  
- Type: Emulate **or** your CompactLogix/ControlLogix  
- Write exact type string + revision in lab report  

### 2. Programs / routines
Under the continuous task program (rename program to `prg_Infeed` if desired):

| Routine | Type | Purpose |
|---------|------|---------|
| MainRoutine | Ladder | Entry / future JSR hub |
| rtn_Permissives | Ladder | Empty |
| rtn_Motors | Ladder | Empty |
| rtn_Faults | Ladder | Empty |
| rtn_HMI | Ladder | Empty (future) |

### 3. Navigation drill (timed)
From memory, open each in under 30 seconds:

- [ ] Controller Tags  
- [ ] Program Tags  
- [ ] MainRoutine  
- [ ] I/O Configuration  
- [ ] Controller Properties  

### 4. Offline vs online note
Write three differences offline vs online in lab report.

### 5. Save
`labs/01-foundation/output/LAB13_Skeleton.ACD`

---

## Pass criteria
- [ ] All routines exist  
- [ ] Timed navigation pass  
- [ ] Revision documented  

## Stretch
Add a second program `prg_CaseSealer` empty — shows multi-program cells.
