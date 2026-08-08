# 3.8 — Motion basics (relevant minimum)

## Learning objectives

- Explain motion group and axis tag concepts at overview level
- Recognize common motion instructions (MSO, MSF, MAJ, MAM) by purpose
- Apply safe power-up / enable mental model
- Know when to escalate to a motion specialist

**Time:** 4–5 h | **Prereq:** Phase 2  
**Lab:** `../../LABS/03-advanced/LAB-3.8-virtual-axis-overview.md`

---

## Electrician map

Servo axis ≈ **VFD + precise feedback + coordinated move engine**.  
Not just Run/Stop — position, velocity, homing, faults, and safe torque concepts (site-specific).

| Instruction (family) | Idea |
|----------------------|------|
| MSO / MSF | Motion servo on/off (enable concepts) |
| MAJ | Jog |
| MAM | Move absolute/relative style commanded moves |
| MAS / MAFR etc. | Stop / fault reset families (learn on your platform docs) |

---

## Safety note

Motion can store energy and move unexpectedly after enable. Follow OEM and site procedures. This module is literacy, not machine certification.

---

## Teach-back

> “What questions do you ask before enabling a servo after a fault?”

## Next

→ [3.9 Advanced faults](09-advanced-faults.md)
