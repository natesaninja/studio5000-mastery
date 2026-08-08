# 4.2 — Task prioritization and performance

## Learning objectives

- Configure Continuous vs Periodic tasks intentionally
- Detect task overlap
- Relate RPI, scan, and system overhead
- Move fast logic without wrecking maintainability

**Time:** 5–6 h | **Prereq:** 1.3, 3.9  
**Lab:** `../../LABS/04-expert/LAB-4.2-periodic-task.md`

---

## Electrician map

Task priority ≈ **what gets service first when the system is busy** — like which circuit you trust under load.

---

## Practical guidance

- Default continuous is fine for many machines  
- Use periodic for time-critical discrete or control loops that need deterministic rate  
- Faster is not always better — overload causes overlap  
- Log scan times during commissioning  

---

## Teach-back

> “What does task overlap mean for a machine that ‘sometimes misses a sensor’?”

## Next

→ [4.3 Multi-controller](03-multi-controller.md)
