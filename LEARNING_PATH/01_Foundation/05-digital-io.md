# Module 1.5 — Digital I/O configuration

| | |
|--|--|
| **Time** | 5–6 hours |
| **Prerequisites** | 1.4 |
| **Lab** | [`../../LABS/01-foundation/LAB-1.5-digital-io-aliases.md`](../../../../LABS/01-foundation/LAB-1.5-digital-io-aliases.md) |
| **Quiz** | [`../../RESOURCES/quizzes/01-foundation/Q05-digital-io.md`](../../../../RESOURCES/quizzes/01-foundation/Q05-digital-io.md) |
| **Tree** | [`../../ON_THE_JOB/Symptom_Decision_Trees/DT-02-io-not-updating.md`](../../../../ON_THE_JOB/Symptom_Decision_Trees/DT-02-io-not-updating.md) |
| **Faults** | [`FC-02-io-module-faults.md`](../../../../ON_THE_JOB/Fault_Codes/FC-02-io-module-faults.md) |

---

## Learning objectives

- Add digital input/output modules in **I/O Configuration**  
- Read module paths like `Local:1:I.Data.0`  
- Create **aliases** from meaningful tags to real bits  
- Diagnose LED vs tag mismatches  
- Stay aware of sinking/sourcing and field power  

---

## 1. Concept — electrician language

Configuring I/O in Studio is the software side of **landing cards and wires**:

| Field job | Studio job |
|-----------|------------|
| Install DI card in slot 1 | New Module → digital input catalog → slot 1 |
| Land Start PB on terminal 0 | Alias `INF01_Start_PB` → `Local:1:I.Data.0` |
| Land starter coil on DO terminal 0 | Alias `INF01_MTR01_Run_Cmd` → `Local:2:O.Data.0` |
| Fill out I/O list on prints | I/O map table in project docs |

### The input/output image

- **DI module LED ON** ≈ module senses voltage/current per design  
- **Tag TRUE** ≈ controller image for that bit is 1  
- They **can disagree**: wrong alias, forces, inhibited connection, wrong slot in project, no download after change  

### Sinking / sourcing (practical)

- Match module type to sensors (PNP/NPN) and power scheme  
- Wrong match → “sensor LED on at device, nothing at PLC” or reverse  
- Commission with a **meter**, not hope  

### RPI (preview)

Requested Packet Interval — how often I/O connection updates. Foundation: leave defaults unless told otherwise. Wrong ultra-fast RPIs everywhere is a Phase 4 performance topic.

---

## 2. Studio 5000 walkthrough — packaging infeed map

Paths below are **examples**. Your slot numbers depend on chassis/controller. Record **your** paths in the I/O map.

### A. Add modules (hardware or emulate)

1. Open **I/O Configuration**.  
2. Right-click chassis/backplane → **New Module**.  
3. Add a **digital input** module (16 or 32 point — whatever you use).  
   - Slot: e.g. **1**  
   - Name: `DI_Local_01`  
   - Electronic keying: know your site policy (**Compatible** vs **Exact**). For lab, Compatible is common.  
4. Add a **digital output** module.  
   - Slot: e.g. **2**  
   - Name: `DO_Local_02`  
5. OK / Apply → Save.  

### Emulate 5000

Add the emulate digital modules your version supports, or use the controller’s emulate I/O points if documented for your install. Goal: **bits you can toggle and alias**.

### B. Discover the exact data path

1. Expand module → **Input** or **Output** data.  
2. Open module tags (or Controller Tags filter).  
3. Find structure like:  
   - `Local:1:I.Data` (DINT) with bits `.0`, `.1`, …  
   - or `Local:1:I.Data.0` as BOOL depending on view  
4. Write the full path for bit 0 of DI and DO.

### C. Alias controller tags

1. Controller Tags → Edit Tags.  
2. For `INF01_Start_PB`:  
   - **Alias For** = `Local:1:I.Data.0` (your path)  
3. Map a full packaging set:

| Tag | Direction | Example path |
|-----|-----------|--------------|
| `INF01_Start_PB` | In | `Local:1:I.Data.0` |
| `INF01_Stop_OK` | In | `Local:1:I.Data.1` |
| `INF01_OL_OK` | In | `Local:1:I.Data.2` |
| `INF01_Guard_OK` | In | `Local:1:I.Data.3` |
| `INF01_Dsch_Clear` | In | `Local:1:I.Data.4` |
| `INF01_EStop_OK` | In | `Local:1:I.Data.5` |
| `INF01_Fault_Reset` | In | `Local:1:I.Data.6` |
| `INF01_MTR01_Run_Cmd` | Out | `Local:2:O.Data.0` |
| `INF01_Run_Light` | Out | `Local:2:O.Data.1` |
| `INF01_Fault_Light` | Out | `Local:2:O.Data.2` |

4. Save. Download is covered in 1.7 — offline aliases still valid for logic entry.

### D. Build the I/O map artifact

Create `../../LABS/01-foundation/output/INF01_IO_MAP.md`:

| Wire # | Device | TB | Module path | Alias | Notes |
|--------|--------|-----|-------------|-------|-------|
| 401 | Start PB NO | TB1-1 | Local:1:I.Data.0 | INF01_Start_PB | 24VDC |

---

## 3. Side-by-side — landing a starter vs aliasing a DO

### Hardwired

```
PLC DO terminal 0 ──→ wire 510 ──→ starter coil A1
                                 A2 ──→ 0 VDC
```

### Logix

```
Logic OTE  INF01_MTR01_Run_Cmd
       └─ alias → Local:2:O.Data.0  → physical terminal → wire 510 → coil
```

| Hardwired check | Online check |
|-----------------|--------------|
| 24 V at coil when “run” | Tag TRUE + DO LED ON + voltage at terminal |
| Fuse in DO common | Module status + field supply |

---

## 4. Common mistakes

| Mistake | Online / field look | Fix |
|---------|---------------------|-----|
| Alias off-by-one bit | Neighbor device operates | Recount terminals; verify map |
| Never downloaded after I/O change | Module fault / no connection | Download config (1.7) |
| Wrong catalog / keying | Module fault LED, yellow triangle | Match hardware; keying policy |
| Field 24 V dead | All inputs false, CPU fine | Meter supply |
| Sinking module with sourcing sensors | Dead or inverted behavior | Match types |
| Force left on input | Tag ignores field | Force table (1.7) |
| Using raw `Local:1:I.Data.0` in every rung | Unreadable logic | Always alias |

---

## 5. Mini-lab

[`LAB-1.5-digital-io-aliases.md`](../../../../LABS/01-foundation/LAB-1.5-digital-io-aliases.md) — include intentional wrong-alias fault.

---

## 6. Troubleshooting tree

Full tree: [`DT-02-io-not-updating.md`](../../../../ON_THE_JOB/Symptom_Decision_Trees/DT-02-io-not-updating.md)

```
Field ≠ tag  OR  LED ≠ tag
  → Forces?
  → Module connection / inhibit / fault?
  → Alias correct slot/bit?
  → Field power & wiring (meter)?
  → Project match hardware (catalog/slot)?
```

---

## 7. Quiz

[`Q05-digital-io.md`](../../../../RESOURCES/quizzes/01-foundation/Q05-digital-io.md)

---

## 8. Spaced repetition

| When | Re-visit |
|------|----------|
| **+1 day** | Recite full alias table for INF01 from memory. Draw DI vs DO path pattern. |
| **+1 week** | Practice DT-02 on a deliberate wrong alias. Explain LED ON / tag FALSE. |
| **+1 month** | Ring out a real trainer point-to-point with I/O checkout sheet. |

### Teach-back

> Walk through proving an input is a field problem vs a PLC configuration problem.

### Exit checklist

- [ ] Modules added  
- [ ] All INF01 aliases verified (or emulate toggles)  
- [ ] I/O map file complete  
- [ ] Quiz ≥ 80%  

## Next

→ [1.6 Ladder fundamentals](06-ladder-fundamentals.md)
