# 4.1 — GuardLogix / safety basics for programmers

## Learning objectives

- Separate standard logic from safety logic responsibilities
- Explain dual-channel e-stop / light curtain concepts at electrician + programmer level
- State what must never be “bypassed in standard ladder”
- Read safety signature / change discipline concepts

**Time:** 6–8 h | **Prereq:** Phase 3 gate  
**Lab:** `../../LABS/04-expert/LAB-4.1-safety-vs-standard.md`  
**Tree:** `../../ON_THE_JOB/Symptom_Decision_Trees/DT-06-safety-trip.md`

---

## Electrician map

Hardwired safety relays and dual-channel devices exist because **single PLC BOOL is not automatically safety-rated**.  
GuardLogix / safety I/O provide a designed safety channel with diagnostics — not a yellow tag name.

---

## Non-negotiables

- Do not implement personnel safety only in standard task ladder  
- Do not force safety inputs as a normal ops method  
- Changes to safety logic require proper procedures, often re-validation  
- Know your site’s lockout and tryout rules  

---

## Programmer’s job at the boundary

- Read **safety OK / zone reset** permissives into standard logic correctly  
- Never “fake” safety OK with OTL  
- Coordinate safe stop vs process stop  

---

## Teach-back

> “Explain to an apprentice why jumpering a light curtain is not the same as a temporary force on a photoeye.”

## Next

→ [4.2 Tasks & performance](02-tasks-performance.md)
