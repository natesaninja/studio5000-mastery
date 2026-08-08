# Flashcards — Core instructions

**How:** Cover the answer. Say it out loud. Mark Again/Hard/Good.

---

## Q1
**Q:** XIC is true when the bit equals?  
**A:** **1** (examine if closed / “NO” sense relative to tag=1)

## Q2
**Q:** XIO is true when the bit equals?  
**A:** **0**

## Q3
**Q:** OTE vs OTL in one line each?  
**A:** **OTE** follows rung each scan. **OTL** latches ON until OTU (or other clear).

## Q4
**Q:** Default pattern for a conveyor starter run memory?  
**A:** **Seal-in OTE** (Start OR Run) with series permissives — not OTL by default.

## Q5
**Q:** NC Stop wired in field, healthy (not pressed). Input usually? Instruction on `Stop_OK`?  
**A:** Input **1**; typically **XIC Stop_OK**.

## Q6
**Q:** What is the “double invert” stop mistake?  
**A:** Treating NC field as if you must also XIO an OK tag — logic ends inverted.

## Q7
**Q:** Why put Guard/PE permissives in the seal-in path, not only before Start?  
**A:** So opening them **drops** a running motor, not only blocks initial start.

## Q8
**Q:** Two OTE instructions writing the same tag — problem?  
**A:** Contention / last wins / unclear ownership — prefer one owner.

## Q9
**Q:** JSR is like what in a drawing package?  
**A:** “See sheet X” — call another routine.

## Q10
**Q:** Missing JSR to a routine that holds motor logic — symptom?  
**A:** Logic never runs (DT-SCAN).

## Q11
**Q:** ONS is for?  
**A:** One-shot / rising edge (e.g., count parts once per presence).

## Q12
**Q:** CTU on a photoeye without ONS often causes?  
**A:** Miscounts / free-running while beam stays on (scan-dependent mess).

## Q13
**Q:** MCR zone false roughly does what to non-retentive outputs in the zone?  
**A:** De-energizes them (don’t treat as perfect hard power kill for everything).

## Q14
**Q:** AFI left on a rung does what?  
**A:** Forces rung false always — classic leftover debug.

## Q15
**Q:** MOV does what?  
**A:** Copies source to destination.

## Q16
**Q:** EQU on REAL exact equality risk?  
**A:** Fragile — prefer bands / tolerances.

## Q17
**Q:** Green rung animation guarantees voltage at starter coil?  
**A:** **No.**

## Q18
**Q:** XIC of `Run_Cmd` in the seal-in branch is the software form of what hardwired part?  
**A:** Holding / sealing contact around Start.

---

## Miss log
| Date | Card # | Why missed |
|------|--------|------------|
| | | |
