# 3.1 — Function Block Diagram (FBD)

## Learning objectives

- Create an FBD routine and wire boolean logic
- Contrast FBD with ladder for interlocks vs continuous control
- Identify PIDE as the continuous-control pattern (intro level)

**Time:** 5–6 h | **Prereq:** Phase 2 gate  
**Lab:** `../../LABS/03-advanced/LAB-3.1-fbd-interlocks.md`

---

## Electrician map

FBD ≈ **function-block control drawings** (like instrument loop sheets with AND/OR/PID blocks), not relay ladder rungs.

---

## When FBD shines

- Continuous process / analog heavy logic  
- Clear data flow left-to-right  
- PID and analog function blocks  

## When ladder still wins

- Discrete motor starters and dense interlocks many electricians already read  
- Fast “who turned this coil on” cross-reference culture on some sites  

---

## Teach-back

> “Show an apprentice the same 3-input interlock in ladder and FBD.”

## Next

→ [3.2 Structured Text](02-structured-text.md)
