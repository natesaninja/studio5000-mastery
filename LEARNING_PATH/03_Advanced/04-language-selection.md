# 3.4 — Choosing the right language

## Learning objectives

- Apply a decision matrix for Ladder / FBD / ST / SFC
- Refactor one process into intentional mixed languages
- Defend choices to other trades

**Time:** 2–3 h | **Prereq:** 3.1–3.3  
**Lab:** `../../LABS/03-advanced/LAB-3.4-mixed-language.md`

---

## Decision matrix

| Situation | Prefer |
|-----------|--------|
| Motor starters, discrete interlocks | **Ladder** |
| Continuous loops, analog function chains | **FBD** |
| Complex state/data, parsing, calculations | **ST** |
| Multi-step machine modes with clear steps | **SFC** (+ actions) |
| Site standard says X | **Follow site standard** |

**Hybrid is professional.** Dogmatic single-language is not.

---

## Teach-back

Give 8 plant examples (in quiz) and justify language choice.

## Next

→ [3.5 UDTs](05-udts.md)
