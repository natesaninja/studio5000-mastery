# Quiz 1.5 — Digital I/O

**Closed notes.** 10 questions. Pass ≥ 8/10.

1. What does I/O Configuration represent in electrician terms?  
2. Example meaning of path `Local:1:I.Data.0`?  
3. Why alias instead of putting `Local:2:O.Data.0` on every rung?  
4. List three checks when input LED ≠ tag.  
5. CPU healthy, all DI false — likely power domain?  
6. Electronic keying mismatch can cause what symptom?  
7. Sinking/sourcing mismatch typical result?  
8. Alias off-by-one bit looks like?  
9. True/False: Forces can make tag disagree with field.  
10. What document proves which wire lands on which alias?

---

## Answers

1. Panel layout of modules/slots before “energizing” the design — software twin of installed I/O.  
2. Local chassis, slot 1, input data bit 0 (exact structure may vary; concept holds).  
3. Readability; retarget one alias if landing changes; fewer edit errors.  
4. Forces; alias path; connection/inhibit/fault; field power/wiring; wrong project.  
5. Field 24 V (or sensor supply).  
6. Module won’t connect properly / fault / inhibited operation.  
7. Inputs/outputs don’t read or switch as expected; “dead” points.  
8. Neighbor device operates or wrong indicator.  
9. **True**.  
10. I/O map (and drawings).

**Score: __ / 10**
