# Flashcards — Tasks, programs, scan, priorities

---

## Q1
**Q:** Task vs Program vs Routine?  
**A:** **Task** = schedule/how often. **Program** = machine section. **Routine** = logic sheet.

## Q2
**Q:** Continuous task means?  
**A:** Runs using residual controller time (not a fixed period).

## Q3
**Q:** Periodic task means?  
**A:** Executes on a fixed period (e.g., every 10 ms).

## Q4
**Q:** Event task means (idea)?  
**A:** Triggered by a configured event (advanced).

## Q5
**Q:** Unscheduled program symptom?  
**A:** Its logic never executes.

## Q6
**Q:** Scan steps (continuous)?  
**A:** Input image → solve logic → output image (simplified).

## Q7
**Q:** Task overlap means?  
**A:** Task didn’t finish before it was due again — timing/missed updates risk.

## Q8
**Q:** RPI (idea)?  
**A:** Requested Packet Interval — how often I/O connection updates.

## Q9
**Q:** Faster RPI always better?  
**A:** **No** — can overload network/CPU; set with intent.

## Q10
**Q:** Foundation default task strategy?  
**A:** One Continuous MainTask; optimize later with evidence.

## Q11
**Q:** Priority (idea)?  
**A:** Higher priority tasks preempt lower — critical logic placement matters.

## Q12
**Q:** Why not dump 800 rungs in MainRoutine?  
**A:** Untroubleshootable at 2 a.m.; use JSR structure.
