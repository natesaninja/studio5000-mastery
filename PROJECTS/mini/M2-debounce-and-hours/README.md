# Mini-M2 — Debounce + runtime hours

**Time:** 2–4 h | **Phase:** 2 | **Builds on:** P1  
**Reuse later:** P2 hours, Capstone sensors  

---

## Machine story
Discharge photoeye chatters; maintenance wants **runtime hours** on the conveyor.

## Requirements
- [ ] TON debounce (e.g. 50–200 ms) before `Part_Present` or `Dsch_Clear` used in interlocks  
- [ ] RTO while `Run_Cmd` true  
- [ ] `EU_Runtime_Hours` calculated and documented  
- [ ] Maintenance reset of hours (authorized bit)  
- [ ] Optional: CTU parts with ONS  

## Reuse
- P1 motor permissives and tags — **extend**, don’t rewrite from scratch  

## Tests
- Chatter shorter than debounce ignored  
- Hours only increase while running  
- Reset works  
- Trend optional for chatter proof  

## Teach-back
Explain TON vs RTO using this machine only.
