# 2.2 — Counters (CTU, CTD, RES)

## Learning objectives

- Count parts, cycles, and events with CTU/CTD
- Reset with RES
- Pair counters with one-shots so held signals don’t free-run the count
- Watch overflow / preset done behavior

**Time:** 3–4 h | **Prereq:** 2.1  
**Lab:** `../../LABS/02-intermediate/LAB-2.2-batch-count.md`

---

## Electrician map

| Device | Instruction |
|--------|-------------|
| Electromechanical counter coil | **CTU** (count up) |
| Down counter | **CTD** |
| Reset button / end of batch | **RES** |

---

## One-shot discipline

If the photoeye stays on while a box is present, raw CTU on XIC will not count once per box — scan behavior + rung truth matters. Use **ONS** (or rising-edge pattern) so you count **entries**, not **time in beam**.

---

## Pattern: batch complete

- CTU each good part  
- When `.ACC >= Target` (or `.DN` if PRE=target) → batch done bit  
- Operator Reset → RES counter → clear done  

---

## Teach-back

> “Why does a raw CTU on a photoeye often ‘miscount’?”

## Success criteria

- [ ] Batch count with auto/manual reset option  

## Next

→ [2.3 Compare / math / move](03-compare-math-move.md)
