# 2.3 — Compare, math, move

## Learning objectives

- Use EQU, NEQ, LES, GRT, LEQ, GEQ
- Use ADD, SUB, MUL, DIV safely (types, divide-by-zero thinking)
- MOV / CLR for setpoints and clears
- Build high/low alarm bands

**Time:** 5–6 h | **Prereq:** 2.2  
**Lab:** `../../LABS/02-intermediate/LAB-2.3-alarm-bands.md`

---

## Electrician map

| Field idea | Instruction family |
|------------|-------------------|
| Comparator / window alarm | Compare (GRT/LES…) |
| Scaling arithmetic | MUL/DIV/ADD/SUB or SCP later |
| Copy setpoint | MOV |
| Zero a totalizer | CLR / MOV 0 |

---

## Alarm band pattern

```
Level > HighSP → HighAlarm
Level < LowSP  → LowAlarm
```

Add hysteresis later if chatter appears (advanced polish).

---

## Type pitfalls

- Mixing INT/DINT/REAL carelessly  
- Integer division truncates  
- Comparing REAL for exact EQU is fragile — prefer bands  

---

## Teach-back

> “How is a high-level alarm like a pressure switch with an adjustable setpoint?”

## Next

→ [2.4 Program control](04-program-control.md)
