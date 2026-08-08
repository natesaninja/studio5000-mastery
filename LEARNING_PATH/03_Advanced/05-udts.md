# 3.5 — User-Defined Types (UDTs)

## Learning objectives

- Design a motor UDT and a valve UDT
- Nest UDTs carefully
- Version and document UDT changes
- Instantiate multiple devices without copy-paste tag chaos

**Time:** 5–6 h | **Prereq:** 2.8  
**Lab:** `../../LABS/03-advanced/LAB-3.5-udt-motor.md`  
**Template:** `../../RESOURCES/templates/udt-motor.md`

---

## Electrician map

UDT ≈ **standard device faceplate / typical drawing terminal list** reused for every similar motor.

```
Motor.Cmd.Start
Motor.Sts.Running
Motor.Alm.Fault
Motor.Cfg.StartDelay_ms
```

---

## Design rules

- Group CMD / STS / ALM / CFG  
- Booleans packed thoughtfully (but readability > micro-packing early on)  
- Changing a UDT used everywhere is a **big deal** — plan it  

---

## Teach-back

> “Why do UDTs reduce 2 a.m. mistakes?”

## Next

→ [3.6 AOIs](06-aois.md)
