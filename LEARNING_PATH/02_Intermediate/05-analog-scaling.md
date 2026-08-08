# 2.5 — Analog I/O and scaling

## Learning objectives

- Configure analog input concepts (4–20 mA, 0–10 V)
- Scale raw counts to engineering units (SCP or CPT)
- Detect out-of-range / wire-break style symptoms
- Alarm on high/low process values

**Time:** 6–8 h | **Prereq:** 2.3  
**Lab:** `../../LABS/02-intermediate/LAB-2.5-tank-scale.md`  
**Tree:** `../../ON_THE_JOB/Symptom_Decision_Trees/DT-04-analog-wrong-reading.md`  
**Faults:** `../../ON_THE_JOB/Fault_Codes/FC-03-analog-symptoms.md`

---

## Electrician map

| Field | PLC |
|-------|-----|
| Transmitter 4–20 mA | Analog input channel |
| Meter face 0–100% | Scaled REAL tag (eng units) |
| Open loop / <4 mA | Fault / maintenance signal |
| Span calibration | Scaling min/max raw ↔ eng |

---

## Scaling concept

```
Eng = EngMin + (Raw - RawMin) * (EngMax - EngMin) / (RawMax - RawMin)
```

Use **SCP** when available in your instruction set context, or **CPT** with clear parentheses.

Always document:

- RawMin / RawMax (from module)  
- EngMin / EngMax (process)  
- Units (gal, psi, °F, %)  

---

## Failure symptoms

| Symptom | Suspect |
|---------|---------|
| Stuck at 0 / low raw | Loop power, open wire, wrong channel |
| Pegged high | Short, wrong range, config |
| Noisy | grounding, shielding, sample |
| Right raw, wrong eng | Scale math / wrong min-max |

---

## Teach-back

> “Commission a brand-new level transmitter to the PLC in 8 steps.”

## Next

→ [2.6 Trending](06-trending.md)
