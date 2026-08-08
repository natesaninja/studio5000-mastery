# 3.3 — Sequential Function Chart (SFC)

## Learning objectives

- Build steps, transitions, and actions
- Model a machine cycle as SFC
- Call ladder/ST action logic from steps
- Know simultaneous sequences exist (and add complexity)

**Time:** 5–6 h | **Prereq:** 3.2  
**Lab:** `../../LABS/03-advanced/LAB-3.3-sfc-fill.md`

---

## Electrician map

SFC ≈ **sequence of operations** chart / drum-sequencer thinking with explicit steps and go-to conditions.

---

## Design tips

- Name steps after process language operators use  
- Keep transition conditions boolean-clear  
- Don’t hide critical safety in only SFC — permissives still apply  
- Fault step that is easy to enter and documented to exit  

---

## Teach-back

> “Explain SFC using a bottle fill line to someone who only knows ladder.”

## Next

→ [3.4 Language selection](04-language-selection.md)
