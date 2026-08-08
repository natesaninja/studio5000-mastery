# 3.2 — Structured Text (ST)

## Learning objectives

- Write IF/THEN/ELSIF/ELSE and CASE state logic
- Implement a 4-step state machine cleanly
- Avoid scan-killing loops
- Mix ST routines with ladder via JSR

**Time:** 6–8 h | **Prereq:** 3.1  
**Lab:** `../../LABS/03-advanced/LAB-3.2-st-state-machine.md`

---

## Electrician map

ST ≈ writing a **clear sequence procedure** (“when in step 2 and sensor true, go to step 3”) instead of drawing every contact.

---

## State machine skeleton

```
CASE State OF
  0: // Idle
     IF Start THEN State := 1; END_IF;
  1: // Fill
     IF LevelHigh THEN State := 2; END_IF;
  2: // ...
END_CASE;
```

Rules:

- One clear `State` DINT  
- Transitions explicit  
- Outputs driven from state (or separate mapping)  
- Manual/Fault states first-class  

---

## Loop caution

Unbounded or large FOR loops can inflate scan time and cause watchdogs. Prefer simple CASE for sequences.

---

## Teach-back

> “When is ST clearer than ladder for a maintenance tech at 2 a.m.?”

## Next

→ [3.3 SFC](03-sfc.md)
