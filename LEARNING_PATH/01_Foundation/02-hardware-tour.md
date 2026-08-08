# Module 1.2 — ControlLogix / CompactLogix hardware tour

| | |
|--|--|
| **Time** | 4–5 hours |
| **Prerequisites** | 1.1 |
| **Lab** | [`../../LABS/01-foundation/LAB-1.2-hardware-id.md`](../../../../LABS/01-foundation/LAB-1.2-hardware-id.md) |
| **Quiz** | [`../../RESOURCES/quizzes/01-foundation/Q02-hardware.md`](../../../../RESOURCES/quizzes/01-foundation/Q02-hardware.md) |
| **Fault ref** | [`../../ON_THE_JOB/Fault_Codes/FC-01-controller-leds.md`](../../../../ON_THE_JOB/Fault_Codes/FC-01-controller-leds.md) |
| **Tree** | [`../../ON_THE_JOB/Symptom_Decision_Trees/DT-1.2-hardware-power.md`](../../../../ON_THE_JOB/Symptom_Decision_Trees/DT-1.2-hardware-power.md) |

---

## Learning objectives

- Identify ControlLogix chassis parts vs CompactLogix integrated styles  
- Separate **chassis power**, **field device power**, and **network**  
- Read common LED families (power / run / fault / link)  
- Match catalog thinking to “what card is in what slot”  

---

## 1. Concept — electrician language

### ControlLogix ≈ rack panel with a brain card

| Panel language | Logix hardware |
|----------------|----------------|
| Backplane / rack | **Chassis** |
| Control power supply for the rack | **Chassis power supply** |
| Main “brain” | **Controller (CPU)** |
| Terminal groups with status LEDs | **I/O modules** |
| Network drop to other panels | **Ethernet module** (or embedded port) |
| Key for RUN / PROG behavior | **Keyswitch** (where present) |
| Spare “image” of the brain | **SD card** (controller-dependent) |

The CPU is **not** the motor starter. It decides when the **output point** should turn on the starter coil circuit (or send a network command to a drive).

### CompactLogix ≈ same language, different enclosure

- Often CPU + Ethernet + some I/O in one package, plus expanders  
- **Same tag-based Logix programming model** as ControlLogix  
- For learning: treat them as one family with different packaging  

### Power domains (do not mix in your head)

```
[Chassis / CPU power]     → brain alive
[Field 24 VDC]            → sensors, PB, many DI/DO commons
[Network infrastructure]  → switches, adapters
[480 V / motor power]     → starters, VFDs (still your world)
```

**Classic false alarm:** CPU RUN is healthy, all inputs dead → **field 24 V** is down, not “PLC failed.”

### Packaging cell example

- CompactLogix in the main panel  
- Local DI: Start, Stop, OL, guard, photoeyes  
- Local DO: conveyor starter coil, stack light  
- Ethernet to VFD on the case sealer (later phases)  
- Remote Point I/O at the discharge end (optional later)  

---

## 2. Studio 5000 walkthrough — see hardware in the project

Even offline, the project holds a **virtual panel layout**.

1. Open or create project `PKG_CELL01` (from 1.1).  
2. In Controller Organizer, open **I/O Configuration**.  
3. Note the controller under the backplane/bus (wording varies).  
4. **Right-click** the backplane / chassis → **New Module** (if hardware project).  
5. Browse categories: Digital, Analog, Communications.  
6. **Do not stress exact catalog yet** — Module 1.5 does full I/O.  
7. Open **Controller Properties** (right-click controller → Properties):  
   - Type / revision  
   - Name  
   - (Where shown) Ethernet identity concepts  
8. Find **SD card / nonvolatile** related properties if listed for your controller type — know they exist for recovery (Phase 4 deep dive).  
9. Save project.

### Emulate note

Emulate projects still have an I/O Configuration tree. You may add **Emulate I/O** or simulated modules depending on version. The skill is the same: **what the project thinks is installed must match what you use.**

---

## 3. Side-by-side — hardwired “control transformer + relays” vs Logix rack

| Hardwired panel | Logix panel |
|-----------------|-------------|
| Control transformer → fuse → coil bus | Chassis PSU → backplane power |
| Relay bank for logic | CPU memory + program |
| Terminal blocks for field | I/O module terminals |
| Wire numbers on prints | Tags + I/O map + sometimes wire numbers still on terminal strips |
| Indicating lights on doors | Module LEDs + HMI + stack lights driven by DO |

There is still a **schematic**. The PLC does not delete drawings — it changes what the control section looks like.

---

## 4. Common mistakes (online / field appearance)

| Mistake | Appearance | Fix direction |
|---------|------------|---------------|
| Assuming one power supply feeds everything | CPU OK, sensors dead | Meter field 24 V at module common |
| Wrong slot in mental model | Wrong devices “move” after module swap | Slot + catalog in project = physical |
| Ignoring network LEDs | Can’t go online | Link/activity, cable, IP (1.7) |
| Treating Compact and Control as different languages | Fear of new panel | Same Logix tags; different packaging |
| Replacing CPU without recording firmware | Download / keying failures | Log firmware + ACD revision |

---

## 5. Mini-lab

[`LAB-1.2-hardware-id.md`](../../../../LABS/01-foundation/LAB-1.2-hardware-id.md) — identify parts, power domains, LED first responses.

---

## 6. Troubleshooting tree

[`DT-1.2-hardware-power.md`](../../../../ON_THE_JOB/Symptom_Decision_Trees/DT-1.2-hardware-power.md) + [`FC-01`](../../../../ON_THE_JOB/Fault_Codes/FC-01-controller-leds.md)

```
No life / weird LEDs
  → Chassis power present?
  → Field 24 V present?
  → Controller fault LED? → connect / fault log later
  → I/O module fault? → module power, config, keying
  → Network dark? → cable, switch, IP
```

---

## 7. Quiz

[`Q02-hardware.md`](../../../../RESOURCES/quizzes/01-foundation/Q02-hardware.md)

---

## 8. Spaced repetition

| When | Re-visit |
|------|----------|
| **+1 day** | Sketch ControlLogix chassis from memory (CPU, PSU, DI, DO, ENET). List three power domains. |
| **+1 week** | Walk a real panel or photos: name every module out loud. Recite first checks for “CPU OK, no inputs.” |
| **+1 month** | On a plant print set, highlight chassis power vs field power vs motor power in different colors. |

### Teach-back

> If RUN is good but no outputs work, list the first five checks — in order.

### Exit checklist

- [ ] Name Compact vs Control packaging difference  
- [ ] Power domain sketch  
- [ ] LED first-pass with FC-01  
- [ ] Quiz ≥ 80%  

## Next

→ [1.3 Project structure](03-project-structure.md)
