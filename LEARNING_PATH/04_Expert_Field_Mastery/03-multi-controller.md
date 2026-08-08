# 4.3 — Multi-controller architectures

## Learning objectives

- Draw a cell vs line vs supervisory controller boundary
- Design an interface contract (heartbeats, commands, statuses)
- Avoid dual-ownership of the same actuator
- Plan produce/consume at scale

**Time:** 5–6 h | **Prereq:** 3.7  
**Lab:** `../../LABS/04-expert/LAB-4.3-interface-contract.md`

---

## Electrician map

Two MCCs with an interlock cable need a **defined terminal list**.  
Two controllers need the same: written interface, defaults on comms loss, and one owner per motor.

---

## Interface contract template

For each signal: name, type, direction, rate, default on fault, meaning.

---

## Teach-back

> “Who is allowed to start Conveyor 4 if two PLCs can see it?”

## Next

→ [4.4 Firmware & recovery](04-firmware-recovery.md)
