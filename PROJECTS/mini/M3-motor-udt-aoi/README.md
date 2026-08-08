# Mini-M3 — Motor UDT + AOI retrofit

**Time:** 4–6 h | **Phase:** 3 | **Builds on:** P1 motor logic  
**Reuse later:** P3, Capstone all motors  

---

## Machine story
Standardize the infeed motor as a reusable object before the multi-station line.

## Requirements
- [ ] `UDT_Motor` with Cmd/Sts/Alm/Cfg groups (`../RESOURCES/templates/udt-motor.md`)  
- [ ] AOI: permissives, start/stop or cmd, fault, reset, running  
- [ ] At least **two** instances (Infeed + spare/outfeed dummy)  
- [ ] Map aliases into UDT members cleanly  
- [ ] Test checklist for AOI (start, stop, fault, reset, permissive drop)  

## Reuse
- Same electrical behavior as P1 seal-in  

## Deliverables
- [ ] UDT/AOI export or screenshots  
- [ ] Instance table  
- [ ] Teach-back: instance vs definition  

## Pass
Both motors behave identically for the same tests.
