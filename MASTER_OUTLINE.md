# MASTER OUTLINE — Studio 5000 Mastery

**Two purposes, one repo.**

| Purpose | When you open it | Door |
|---------|------------------|------|
| **1. Learning guide** | Study time, building skill from novice → expert | [`LEARNING_PATH/`](LEARNING_PATH/README.md) |
| **2. On-the-job reference** | Machine down, panel open, need the problem area fast | [`ON_THE_JOB/`](ON_THE_JOB/README.md) |

**Always start:** [`00_START_HERE.md`](00_START_HERE.md)

---

## Repo map (navigate in 10 seconds)

```
studio5000-mastery/
├── 00_START_HERE.md          ← pick LEARNING vs JOB AID
├── MASTER_OUTLINE.md         ← this file
├── README.md
│
├── ON_THE_JOB/               ★ OPEN AT WORK
│   ├── README.md             ← symptom index
│   ├── Finding_the_Problem_Area.md
│   ├── What_to_Check_First.md
│   ├── Cross_Reference_and_Tools.md
│   ├── Common_Faults_&_Codes.md
│   ├── Symptom_Decision_Trees/
│   ├── Quick_Cheatsheets/
│   ├── Fault_Codes/
│   └── Scenarios/
│
├── LEARNING_PATH/            ★ OPEN TO STUDY
│   ├── 01_Foundation/
│   ├── 02_Intermediate/
│   ├── 03_Advanced/
│   ├── 04_Expert_Field_Mastery/
│   └── Retention/            ← flashcards, teach-backs, expert checklist
│
├── LABS/                     ← hands-on procedures
├── PROJECTS/                 ← minis → P1–P4 → CAPSTONE → P5
└── RESOURCES/                ← quizzes, templates, detailed curriculum notes
    └── MASTER_OUTLINE.md     ← module-level objectives (expanded)
```

---

# PURPOSE 2 — ON THE JOB (read this first if the line is down)

## Goal
Locate the **problem area** (power, safety, network, controller, I/O, logic, field load) and fix it with a repeatable process — not random rungs.

## Job-aid open order

| # | File | Seconds to use |
|---|------|----------------|
| 1 | [`ON_THE_JOB/Finding_the_Problem_Area.md`](ON_THE_JOB/Finding_the_Problem_Area.md) | Systematic workflow + Studio tools |
| 2 | [`ON_THE_JOB/What_to_Check_First.md`](ON_THE_JOB/What_to_Check_First.md) | Electrician “check first” by symptom |
| 3 | Matching tree in [`Symptom_Decision_Trees/`](ON_THE_JOB/Symptom_Decision_Trees/) | Branching diagnosis |
| 4 | [`Cross_Reference_and_Tools.md`](ON_THE_JOB/Cross_Reference_and_Tools.md) | Cross Ref, Monitor, Trends, Search, Forces |
| 5 | [`Common_Faults_&_Codes.md`](ON_THE_JOB/Common_Faults_&_Codes.md) | LEDs, major/minor, connections |
| 6 | [`Quick_Cheatsheets/`](ON_THE_JOB/Quick_Cheatsheets/) | Instructions & status bits |

## Symptom → tree (print this mental map)

| Ops says… | Open tree |
|-----------|-----------|
| Won’t start / motor dead | [DT-01](ON_THE_JOB/Symptom_Decision_Trees/DT-01-wont-start.md) → [DT-OUT](ON_THE_JOB/Symptom_Decision_Trees/DT-OUT-outputs-not-on.md) |
| Output / light / valve not on | [DT-OUT](ON_THE_JOB/Symptom_Decision_Trees/DT-OUT-outputs-not-on.md) |
| PB / sensor / PE not reading | [DT-IN](ON_THE_JOB/Symptom_Decision_Trees/DT-IN-inputs-not-reading.md) |
| Sequence hangs / Auto stuck | [DT-SCAN](ON_THE_JOB/Symptom_Decision_Trees/DT-SCAN-logic-not-running.md) |
| Intermittent / random stops | [DT-INT](ON_THE_JOB/Symptom_Decision_Trees/DT-INT-intermittent.md) |
| After power cycle / weekend | [DT-PWR](ON_THE_JOB/Symptom_Decision_Trees/DT-PWR-after-power-cycle.md) |
| Major fault / FAULT LED | [DT-MAJ](ON_THE_JOB/Symptom_Decision_Trees/DT-MAJ-major-fault-recovery.md) |
| Can’t go online / HMI red | [DT-COM](ON_THE_JOB/Symptom_Decision_Trees/DT-COM-communication-loss.md) |
| Safety won’t reset | [DT-06](ON_THE_JOB/Symptom_Decision_Trees/DT-06-safety-trip.md) |
| Analog wrong | [DT-04](ON_THE_JOB/Symptom_Decision_Trees/DT-04-analog-wrong-reading.md) |
| Stop ignores / inverted | [DT-1.6](ON_THE_JOB/Symptom_Decision_Trees/DT-1.6-stop-logic.md) |

## Diagnosis tools you will use every call

| Tool | Job |
|------|-----|
| **Force tables** | Find jumpers left in software — open first when “haunted” |
| **Data Monitor** | Multi-point logic probe on named tags |
| **Cross Reference** | Who writes this coil? Every examine? |
| **Trend** | Prove intermittents |
| **Search / Find** | Locate tags and text fast |
| **Module properties** | Connection / inhibit / fault |
| **Meter** | Still king for field voltage |

Full workflow: **Finding_the_Problem_Area.md**

---

# PURPOSE 1 — LEARNING PATH (novice → expert)

## Audience
Industrial electrician who knows schematics, motors, sensors, relays, VFDs, basic controls — little/no PLC experience.

## Platforms
ControlLogix and CompactLogix (tag-based Logix / Studio 5000 / RSLogix 5000 lineage).

## Design rules
1. Practical first; theory only to prevent field mistakes.  
2. Every major instruction mapped to an electrical equivalent.  
3. Phase gate = project + quiz + teach-back.  
4. Labs on Emulate or real hardware.  
5. Spaced review mandatory (see `LEARNING_PATH/Retention/`).  

## Phase summary

| Phase | Folder | Focus | Hours | Gate project |
|-------|--------|--------|-------|--------------|
| **1 Foundation** | `LEARNING_PATH/01_Foundation/` | Scan, hardware, tags, I/O, ladder, online/force | 40–55 | P1 Conveyor |
| **2 Intermediate** | `LEARNING_PATH/02_Intermediate/` | Timers, counters, analog, trends, online edit, HMI tags | 50–65 | P2 Tank |
| **3 Advanced** | `LEARNING_PATH/03_Advanced/` | FBD/ST/SFC, UDT, AOI, MSG, motion intro, faults | 55–70 | P3 Packaging line |
| **4 Expert** | `LEARNING_PATH/04_Expert_Field_Mastery/` | Safety, tasks, multi-CPU, recovery, commissioning, triage | 45–60 | CAPSTONE + P5 |

**Total:** ~190–250 h deliberate practice (+ monthly flashcards after).

## High-retention loop (every module)

```
Lesson → LAB → Quiz → Teach-back (module)
       → Flashcards (1d / 1w / 1m)
       → Mini-project or phase project reuses prior skills
       → Phase teach-back gate
```

| Retention piece | Path |
|-----------------|------|
| Schedule | `LEARNING_PATH/Retention/SCHEDULE.md` |
| Flashcards | `LEARNING_PATH/Retention/flashcards/` |
| Phase teach-backs | `LEARNING_PATH/Retention/teach-back/` |
| Expert floor checklist | `LEARNING_PATH/Retention/expert-checklist.md` |

## Progressive projects

```
M1 Jog/Run → P1 → M2 Debounce/Hours → P2 → M3 UDT/AOI → P3
  → M4 Heartbeat → P4 → CAPSTONE (build) → P5 (break/fix recovery)
```

Details: [`PROJECTS/README.md`](PROJECTS/README.md)

## Module index (compact)

### Foundation (1.1–1.8)
PLC vs hardwired · Hardware · Project structure · Tags · Digital I/O · Ladder · Online/force · First TS  
→ Lessons in `LEARNING_PATH/01_Foundation/` · Labs `LABS/01-foundation/` · Quizzes `RESOURCES/quizzes/01-foundation/`

### Intermediate (2.1–2.9)
Timers · Counters · Compare/math · JSR · Analog · Trends · Online edit · HMI tags · Intermediate TS  
→ `LEARNING_PATH/02_Intermediate/` · `LABS/02-intermediate/`

### Advanced (3.1–3.9)
FBD · ST · SFC · Language choice · UDT · AOI · MSG/P-C · Motion · Advanced faults  
→ `LEARNING_PATH/03_Advanced/` · `LABS/03-advanced/`

### Expert (4.1–4.7)
Safety · Tasks/performance · Multi-controller · Recovery · Commissioning · Field triage · Capstone prep  
→ `LEARNING_PATH/04_Expert_Field_Mastery/` · `LABS/04-expert/`

**Expanded objectives, times, success criteria:** [`RESOURCES/MASTER_OUTLINE.md`](RESOURCES/MASTER_OUTLINE.md)

---

## How the two purposes reinforce each other

| Learning | Job aid |
|----------|---------|
| You practice DT-01 in Lab 1.8 | You open DT-01 on a real call |
| You learn Cross Ref in Module 1.8 / 2.x | You use Cross_Reference_and_Tools.md under pressure |
| Capstone fault injection | Same trees, real machine |
| Expert checklist | Unsupervised standard for nights |

If you only study and never use ON_THE_JOB on real calls, retention dies.  
If you only open job aids and never do labs, you guess under stress.

---

## Quick links

| I need… | Go to |
|---------|--------|
| Machine down **now** | [ON_THE_JOB/README.md](ON_THE_JOB/README.md) |
| Systematic diagnosis | [Finding_the_Problem_Area.md](ON_THE_JOB/Finding_the_Problem_Area.md) |
| Start learning path | [LEARNING_PATH/README.md](LEARNING_PATH/README.md) |
| Full module detail | [RESOURCES/MASTER_OUTLINE.md](RESOURCES/MASTER_OUTLINE.md) |
| Capstone | [PROJECTS/CAPSTONE-inspect-station/](PROJECTS/CAPSTONE-inspect-station/) |
