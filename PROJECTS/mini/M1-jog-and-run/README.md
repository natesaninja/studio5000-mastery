# Mini-M1 — Jog and run selector

**Time:** 2–3 h | **Phase:** 1 | **Builds on:** Lab 1.6 seal-in  
**Reuse later:** P1, Capstone Manual mode  

---

## Machine story
Packaging infeed needs **Run** (seal-in) and **Jog** (momentary, no seal) via HOA-style selector in tags.

## Requirements
- [ ] Selector tags: `Mode_Run`, `Mode_Jog` (or DINT mode) — mutually exclusive  
- [ ] Run: existing seal-in with Stop/OL/EStop/Guard  
- [ ] Jog: motor runs only while Jog PB true **and** permissives OK — **no seal-in**  
- [ ] Cannot Run and Jog at once  
- [ ] Run light only in Run; optional jog indication  

## Reuse from prior
- Same `INF01_` I/O aliases as Lab 1.5/1.6  

## Test plan (minimum)
| # | Test | Expected |
|---|------|----------|
| 1 | Mode Run, Start | Seals |
| 2 | Mode Jog, hold Jog PB | Runs only while held |
| 3 | Mode Jog, release | Stops immediately |
| 4 | Open guard while Jog | Stops |
| 5 | Switch mode while running | Safe documented behavior |

## Deliverables
- [ ] Test results  
- [ ] 5-sentence teach-back: “Why jog must not seal-in”  

## Spaced review
Add cards: seal-in vs momentary; mode interlocking.
