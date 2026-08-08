# Module 1.1 — PLC vs hardwired control

| | |
|--|--|
| **Time** | 3–4 hours |
| **Prerequisites** | Phase 0 / Studio access |
| **Lab** | [`../../LABS/01-foundation/LAB-1.1-hardwire-to-ladder.md`](../../../../LABS/01-foundation/LAB-1.1-hardwire-to-ladder.md) |
| **Quiz** | [`../../RESOURCES/quizzes/01-foundation/Q01-plc-vs-hardwired.md`](../../../../RESOURCES/quizzes/01-foundation/Q01-plc-vs-hardwired.md) |
| **Tree** | [`../../ON_THE_JOB/Symptom_Decision_Trees/DT-01-wont-start.md`](../../../../ON_THE_JOB/Symptom_Decision_Trees/DT-01-wont-start.md) |
| **Spaced review** | End of this file |

---

## Learning objectives

- Explain the PLC **scan** in electrician language  
- Map input → logic → output to field device → control circuit → coil  
- State when PLC, hardwired, or hybrid is appropriate  
- Avoid treating the laptop as a substitute for a meter  

**Success:** Recall scan; map 3 circuits; teach scan vs wiring to an apprentice.

---

## 1. Concept — electrician language

You already understand a control panel: **control power**, **contacts in series/parallel**, **coils**, **seal-ins**, **overloads**. A Logix PLC does the same job with three differences:

1. **The “contacts and coils” are tags** (named bits in memory), not only physical relays.  
2. **The panel re-evaluates on a scan** — repeatedly, in software order — instead of pure parallel electrical physics.  
3. **You can change the “wiring” in software** (with discipline) instead of landing new wires for every sequence change.

### The scan (memorize this)

Every continuous-task cycle, roughly:

| Step | What happens | Electrician parallel |
|------|----------------|----------------------|
| 1 | **Read inputs** into an input image | Snapshot of what the PLC *thinks* the field is |
| 2 | **Solve logic** (ladder top→bottom, left→right) | Re-checking every relay circuit in a fixed order |
| 3 | **Write outputs** from the output image | Energizing coils / DO points |

**Critical insight:** The PLC does not continuously “feel” a stuck contact the way your voltmeter does on a terminal. It samples, solves, then updates. If the **image** is wrong (bad alias, force, dead module, wrong slot), logic will lie even when the field is honest.

### What the PLC is good at

- Hundreds of timers/counters without a timer-relay wall  
- Complex interlocks and modes  
- Counting, recipes, communications, analogs (later phases)  
- Diagnostics *if you program them*  

### What it does **not** replace

- LOTO and tryout  
- Proper safety systems (dual-channel e-stop, light curtains — safety-rated design)  
- Field wiring integrity  
- Your meter  

### Hybrid is normal (packaging cell)

Hardwired **safety** (e-stop string / safety relay) drops power or opens a safety contactor.  
The PLC receives a **Safety_OK** (or similar) permissive and runs sequence: conveyors, fillers, rejects.

---

## 2. Studio 5000 walkthrough (orientation only)

You will not write production logic yet. Goal: open the world and see where logic will live.

### Emulate 5000 or real controller

| Path | Notes |
|------|--------|
| **Emulate 5000** | Fastest for learning; no field LEDs — use tag monitor |
| **Trainer CompactLogix** | Real DI/DO; match project catalog to hardware |

### Steps

1. Start **Studio 5000 Logix Designer**.  
2. **File → New → Project** (or New Controller).  
3. Pick a controller type you actually have (example names vary by install):  
   - Emulate: a **ControlLogix Emulate** or supported emulate catalog  
   - Hardware: your CompactLogix catalog + revision family  
4. Name controller: `PKG_CELL01` (packaging cell 01).  
5. Leave default **MainTask → MainProgram → MainRoutine** for now.  
6. Open **Controller Organizer** (left tree). Expand until you see:  
   - Controller Tags  
   - Tasks  
   - I/O Configuration  
7. **Save** as `M11_ScanMentalModel.ACD` under your labs output folder.  
8. Do **not** download yet unless you already know the path — Module 1.7 covers that.

**If New Project options differ on your version:** the ideas are the same — controller type, name, revision, then Organizer tree.

---

## 3. Side-by-side — hardwired 3-wire vs ladder idea

### Hardwired schematic (what you already draw)

```
 L+ ──[Stop NC]──[Start NO]──┬──[OL NC]──( M )── L-
                             │
                          [M aux NO]
```

- Stop in series (NC)  
- Start parallel with holding contact  
- OL in series with coil  
- Coil M pulls starter  

### Ladder equivalent (conceptual — Module 1.6 builds it for real)

```
     Stop_OK   Start_PB              Run_Cmd
---|---|---|---|---+-----( )----
                   |
                 Run_Cmd
---|---|-----------+
     OL_OK
---|---|  (in series on the power rail of the same rung idea)
```

| Hardwired element | Tag / instruction idea |
|-------------------|-------------------------|
| Stop NC (healthy = closed) | `Stop_OK` usually **1** when healthy → **XIC** |
| Start NO | `Start_PB` → **XIC** |
| Holding contact M | `Run_Cmd` branch → **XIC** seal-in |
| OL NC | `OL_OK` → **XIC** |
| Coil M | `Run_Cmd` → **OTE** (then alias to real DO) |

### The #1 convention trap

Field Stop is **wired NC**. When the button is **not** pressed, the input is **ON**.

| Wrong thinking | What happens |
|----------------|--------------|
| “Stop is NC, so I use XIO” **and** the input is already 1 when healthy | Logic inverted — won’t run or won’t stop correctly |
| Correct mental model | Name the tag what it **means** (`Stop_OK`) and use **XIC** when true means OK |

---

## 4. Common electrician mistakes (and how they look online)

| Mistake | How it appears online | Fix direction |
|---------|----------------------|---------------|
| Expect PLC to “see” voltage like a meter | Tag false while meter shows 24 V at device | Follow wire to module; check alias and input image |
| Blame “bad PLC” when starter coil has no voltage | `Run_Cmd` true, DO LED off or field dead | Output path / fuse / common / wrong bit |
| Think scan is instant physics | Fast sensors “missed” (later) | Scan + RPI + one-shots (Phase 2) |
| Replace safety with a BOOL named `Estop` | Single channel soft e-stop only | Safety design separate; PLC gets permissive |
| Skip LOTO because “I can force it off” | Forces left on; machine moves | Force discipline (1.7) |

---

## 5. Mini-lab

Full procedure: [`LAB-1.1-hardwire-to-ladder.md`](../../../../LABS/01-foundation/LAB-1.1-hardwire-to-ladder.md)

**Summary:** Draw packaging infeed conveyor start/stop hardwired → table map → ladder sketch → open Studio and create empty project only.

---

## 6. Troubleshooting tree (this module)

Primary tree: [`DT-01-wont-start.md`](../../../../ON_THE_JOB/Symptom_Decision_Trees/DT-01-wont-start.md)

**One-screen version:**

```
Won't start
  → Safe to work?
  → Controller RUN / not faulted?
  → Does Run_Cmd go TRUE?
       NO → permissives / stop convention / mode / logic
       YES → Does DO LED / terminal energize?
            NO → alias, module, force, field supply
            YES → starter / VFD / power / mechanics
```

---

## 7. Quiz

[`../../RESOURCES/quizzes/01-foundation/Q01-plc-vs-hardwired.md`](../../../../RESOURCES/quizzes/01-foundation/Q01-plc-vs-hardwired.md) — 10 questions, answers at bottom.

---

## 8. Spaced-repetition review notes

| When | Re-visit |
|------|----------|
| **+1 day** | Recite scan steps aloud. Redraw 3-wire seal-in from memory. Explain NC stop → input usually ON. |
| **+1 week** | Without notes: “Why can LED and tag disagree?” Teach apprentice the teach-back below. |
| **+1 month** | Apply DT-01 to a real or simulated “won’t start” on your trainer. Re-map one plant schematic to tags. |

### Teach-back prompt

> Explain to an apprentice why the PLC doesn’t “see” a stuck contact the way a voltmeter does.

### Exit checklist

- [ ] Scan steps from memory  
- [ ] Three hardwired→ladder maps on paper  
- [ ] Quiz ≥ 80%  
- [ ] Teach-back written or spoken  

## Next

→ [1.2 Hardware tour](02-hardware-tour.md)
