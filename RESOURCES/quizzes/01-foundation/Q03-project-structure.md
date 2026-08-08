# Quiz 1.3 — Project structure

**Closed notes.** 10 questions. Pass ≥ 8/10.

1. Define Task, Program, and Routine in one line each.  
2. Give a packaging-line example of each.  
3. Continuous vs Periodic task — one-line difference.  
4. What should a large MainRoutine often do?  
5. Offline vs online: which can change a running machine immediately if you download?  
6. Risk of upload?  
7. Where do Controller Tags live relative to programs?  
8. Why not name every program `Program1`?  
9. Unscheduled program symptom?  
10. Hierarchy order from top: Controller → ____ → ____ → ____.

---

## Answers

1. **Task** schedules how/when logic runs; **Program** groups a machine section; **Routine** holds the actual logic sheet.  
2. e.g. Continuous MainTask; `prg_Infeed`; `rtn_Motors`.  
3. Continuous uses residual time; Periodic runs at a set rate.  
4. JSR to other routines (act as index).  
5. Download from PC affects controller contents (online world).  
6. Overwriting newer offline edits on the PC with older/different controller content.  
7. Controller-wide — visible across programs (not inside one program only).  
8. No equipment context; maintenance can’t navigate.  
9. Logic never executes.  
10. Task → Program → Routine.

**Score: __ / 10**
