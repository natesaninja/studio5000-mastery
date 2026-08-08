# Flashcards — Troubleshooting process

---

## Q1
**Q:** Six buckets?  
**A:** Energy/mode; field; I/O config; alias/tag; logic; overrides.

## Q2
**Q:** 15-minute triage outline?  
**A:** 0–2 safe/symptom; 2–5 power/LEDs; 5–10 online tags/forces; 10–13 one test; 13–15 stabilize/communicate.

## Q3
**Q:** Open what table first on confusing calls?  
**A:** **Force tables.**

## Q4
**Q:** Force lifecycle?  
**A:** Authorize → log → force → observe → **remove** → verify real devices → empty table.

## Q5
**Q:** Cmd tag FALSE when requesting start — means?  
**A:** Logic/permissive/mode/HMI path — not yet “bad starter coil.”

## Q6
**Q:** Cmd TRUE, DO LED OFF — means?  
**A:** Alias/module/output supply/connection.

## Q7
**Q:** DO LED ON, no voltage at load — means?  
**A:** Wiring/TB/HOA/safety contactor downstream.

## Q8
**Q:** Cross-reference used for?  
**A:** Every use of a tag; find OTE/OTL owners.

## Q9
**Q:** Trend used for?  
**A:** Intermittents — prove glitches with artifact.

## Q10
**Q:** DT-OUT / DT-IN / DT-SCAN / DT-COM / DT-MAJ?  
**A:** Outputs / inputs / logic not scanning / comms / major fault recovery.

## Q11
**Q:** Download direction?  
**A:** PC → controller.

## Q12
**Q:** Upload risk?  
**A:** Overwrite PC offline edits with controller content.

## Q13
**Q:** Identity check before download?  
**A:** Panel label + controller name + browser path match.

## Q14
**Q:** VFD runs in Hand, not Auto — first split?  
**A:** Does PLC Run_Cmd go true? If no → logic; if yes → command path to drive/remote config.

## Q15
**Q:** Green rung ≠ ?  
**A:** ≠ guaranteed field voltage at the load.
