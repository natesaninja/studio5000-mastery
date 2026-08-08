# Flashcards — Timers & counters

---

## Q1
**Q:** TON vs TOF vs RTO one line each?  
**A:** **TON** on-delay (ACC clears when false). **TOF** off-delay. **RTO** retentive accumulate until RES.

## Q2
**Q:** TIMER members PRE, ACC, EN, TT, DN?  
**A:** Preset, accumulated, enable, timing, done.

## Q3
**Q:** TIMER PRE units typically?  
**A:** **Milliseconds**

## Q4
**Q:** Which timer for totalizing motor runtime hours?  
**A:** **RTO** (+ math to hours) — not TON.

## Q5
**Q:** Debounce a chattering sensor — which timer pattern?  
**A:** Short **TON** before accepting true.

## Q6
**Q:** Keep a fan running 30 s after heat off?  
**A:** **TOF**

## Q7
**Q:** RTO ACC when rung goes false?  
**A:** **Holds** until RES (or overflow design).

## Q8
**Q:** TON ACC when rung goes false?  
**A:** **Resets** (non-retentive).

## Q9
**Q:** CTU needs what with a field photoeye that stays on?  
**A:** **ONS** (or edge) so you count entries, not time-in-beam.

## Q10
**Q:** RES does what to a counter?  
**A:** Resets ACC (and done behavior per type).

## Q11
**Q:** Batch complete when?  
**A:** ACC reaches target/PRE or compare ACC >= Target.

## Q12
**Q:** `.DN` never true on TON — first checks?  
**A:** Rung not true long enough; PRE=0; wrong tag; logic not scanning.
