# 3.9 — Advanced fault isolation

## Learning objectives

- Distinguish major vs minor faults
- Read fault logs and code families
- Introduce GSV/SSV for status
- Understand task overlap and watchdog symptoms
- Plan a fault routine strategy

**Time:** 5–6 h | **Prereq:** 3.1–3.8  
**Lab:** `../../LABS/03-advanced/LAB-3.9-fault-log.md`  
**Faults:** `../../ON_THE_JOB/Fault_Codes/FC-05-major-minor-faults.md`

---

## Electrician map

| Panel event | Controller |
|-------------|------------|
| Main breaker trip | Major fault stop (analogous severity) |
| Annunciator warning | Minor fault / recoverable |
| Looking at trip unit codes | Fault log / code |

---

## Practical order

1. Is controller faulted or still running degraded?  
2. Read major fault code/type  
3. Program fault vs I/O fault vs motion fault family  
4. Inspect recent change / power event / module  
5. Clear only after root cause understood  

---

## GSV preview

Get System Value — read controller/task/mode status into tags for diagnostics and HMI. Use sparingly and purposefully.

---

## Teach-back

> “What is the difference between fixing a fault and clearing a fault?”

## Next

→ Project **P3** `../../PROJECTS/P3-packaging-line/`
