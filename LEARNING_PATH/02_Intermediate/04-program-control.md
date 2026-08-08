# 2.4 — Program control (JSR, JMP, LBL, MCR)

## Learning objectives

- Split logic into routines with JSR/RET
- Use JMP/LBL sparingly
- Explain MCR zones and why they surprise people
- Reorganize P1-style logic into Mode / Sequence / Faults

**Time:** 4–5 h | **Prereq:** 2.3  
**Lab:** `../../LABS/02-intermediate/LAB-2.4-multi-routine.md`

---

## Electrician map

| Paper system | Instruction |
|--------------|-------------|
| “See sheet 12” | **JSR** to routine |
| Skip a section of rungs | **JMP/LBL** (use carefully) |
| MCR de-energize zone | **MCR** pair |

---

## Recommended program layout

```
MainRoutine
  JSR Mode
  JSR Permissives
  JSR Sequence
  JSR Outputs
  JSR Faults
  JSR HMI_Map
```

---

## MCR caution

MCR false can de-energize non-retentive outputs in the zone — but retentive behaviors and some instructions don’t match “all power gone” intuition. Prefer clear mode bits and structured design over heavy MCR use.

---

## Teach-back

> “Why is a 800-rung MainRoutine a maintenance hazard?”

## Next

→ [2.5 Analog](05-analog-scaling.md)
