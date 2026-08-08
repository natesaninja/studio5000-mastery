# Quiz 1.6 — Ladder fundamentals

**Closed notes.** 12 questions. Pass ≥ 10/12.

1. XIC is true when the bit equals ____.  
2. XIO is true when the bit equals ____.  
3. OTE vs OTL — difference in one line.  
4. Draw mentally: series XICs implement logical ____.  
5. Branches implement logical ____.  
6. NC Stop, healthy, tag `Stop_OK` = 1. Which examine usually allows run: XIC or XIO on `Stop_OK`?  
7. What is the classic “double invert” stop mistake?  
8. Why put guard/photoeye permissives in the seal-in path, not only before Start?  
9. Default pattern for packaging conveyor starter: seal-in OTE or OTL?  
10. Two OTE instructions writing the same tag — problem?  
11. ONS is used primarily for ________ (one-shot idea).  
12. Online: Run_Cmd true, DO LED off — is that primarily a ladder examine problem or an output path problem?

---

## Answers

1. **1**  
2. **0**  
3. OTE follows rung each scan; OTL latches on until OTU (or other clear).  
4. **AND**  
5. **OR**  
6. **XIC**  
7. NC field already “inverts” electrically; using XIO on an OK tag (or stacking extra inversions) flips intended stop logic.  
8. So opening them **drops** the running motor, not only blocks initial start.  
9. **Seal-in OTE**  
10. Contention — last write wins / confusing ownership; use one owner.  
11. Detecting rising edge / single scan pulse (e.g., counting).  
12. **Output path** (alias/module/field supply) — command already true.

**Score: __ / 12**
