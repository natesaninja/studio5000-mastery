# Module 1.3 — Studio 5000 project structure

| | |
|--|--|
| **Time** | 4–5 hours |
| **Prerequisites** | 1.2 |
| **Lab** | [`../../LABS/01-foundation/LAB-1.3-project-skeleton.md`](../../../../LABS/01-foundation/LAB-1.3-project-skeleton.md) |
| **Quiz** | [`../../RESOURCES/quizzes/01-foundation/Q03-project-structure.md`](../../../../RESOURCES/quizzes/01-foundation/Q03-project-structure.md) |
| **Tree** | [`../../ON_THE_JOB/Symptom_Decision_Trees/DT-1.3-project-navigation.md`](../../../../ON_THE_JOB/Symptom_Decision_Trees/DT-1.3-project-navigation.md) |

---

## Learning objectives

- Create a new project with intentional controller naming  
- Explain **Task → Program → Routine** using a packaging line  
- Navigate Controller Organizer without hunting  
- Distinguish **offline** vs **online**  

---

## 1. Concept — electrician language

Think of the ACD project as the **entire marked-up drawing package + the panel layout + the wire list**, in one file.

| Drawing package idea | Logix |
|----------------------|--------|
| How often the panel re-checks circuits | **Task** |
| Section of the machine (Infeed, Filler, Discharge) | **Program** |
| One sheet of ladder | **Routine** |
| Master index / cover sheet | **MainRoutine** (often calls other sheets) |
| Working on the bench vs live panel | **Offline** vs **Online** |

### Hierarchy (burn this in)

```
Controller  PKG_CELL01
├── Tasks
│   └── MainTask                    ← usually Continuous at foundation
│       └── MainProgram             ← or rename to INF_Conveyor later
│           ├── MainRoutine         ← ladder / FBD / ST / SFC
│           ├── Permissives         ← you create
│           ├── Motors              ← you create
│           └── Faults              ← you create
├── Controller Tags
├── I/O Configuration
├── Trends
└── ...
```

### Task types (foundation level)

| Task | Electrician sense | Foundation use |
|------|-------------------|----------------|
| **Continuous** | “As fast as leftover time allows” | Default — use this for P1 |
| **Periodic** | “Every X ms like a timed relay schedule” | Phase 4 performance |
| **Event** | “Only when something triggers” | Later |

**Rule for now:** One Continuous MainTask, clean programs/routines. Do not invent five tasks to look advanced.

### Offline vs online

| Offline | Online |
|---------|--------|
| Edit freely | Pending edits; restrictions |
| Tags show last offline values | Live values |
| Download pushes PC → controller | Upload pulls controller → PC |
| Safe sandbox | Requires authorization on real machines |

---

## 2. Studio 5000 walkthrough — create the skeleton

Use this exact path for the packaging infeed learning project.

### A. New project

1. **File → New → Project**.  
2. Select controller type (Emulate or your CompactLogix).  
3. **Name:** `PKG_CELL01`.  
4. Set revision/firmware family to match your target (write it in your lab report).  
5. Create project.

### B. Rename for clarity (optional but recommended)

1. Under Tasks, leave **MainTask** or rename to `Task_Continuous` if your site allows.  
2. Rename **MainProgram** to `prg_Infeed` (Program names often identify the machine section).  
3. Keep **MainRoutine** as the entry routine (JSR hub later).

### C. Add routines (empty sheets)

1. Right-click the program → **Add → New Routine**.  
2. Create:  
   - `rtn_Permissives` (Ladder Diagram)  
   - `rtn_Motors` (Ladder Diagram)  
   - `rtn_Faults` (Ladder Diagram)  
3. Open **MainRoutine**.  
4. You will add `JSR` calls in Module 2.4; for now either:  
   - Leave MainRoutine empty, **or**  
   - Put a temporary note rung / simple JSR if you already know JSR  

**Foundation acceptable:** All starter logic in MainRoutine until Module 2.4. Still **create** the empty routines so the organizer looks like a real package.

### D. Find these in under 30 seconds each

- Controller Tags  
- Program Tags (under the program)  
- I/O Configuration  
- MainRoutine  
- Controller Properties  

### E. Save

`../../LABS/01-foundation/output/M13_PKG_CELL01_Skeleton.ACD`

---

## 3. Side-by-side — multi-sheet drawings vs routines

### Hardwired / relay panel documentation

```
Sheet 1: Power distribution
Sheet 2: Control power & e-stop
Sheet 3: Conveyor 1 starter
Sheet 4: Conveyor 2 starter
Sheet 5: Lights & horns
```

### Logix equivalent organization

```
Program prg_Infeed
  MainRoutine     → calls others (index)
  rtn_Permissives → e-stop OK, guards, photoeyes combined
  rtn_Motors      → starter seal-ins
  rtn_Faults      → fault lights, latches
```

| Paper | Logix |
|-------|--------|
| Sheet number | Routine name |
| “See sheet 4” | `JSR rtn_Motors` |
| Entire binder for one cell | One ACD (or multi-controller later) |

---

## 4. Common mistakes

| Mistake | Appearance | Fix |
|---------|------------|-----|
| 500 rungs in one routine | Can’t find anything at 2 a.m. | Split early |
| Program named `Program1` forever | No machine context | Name by equipment |
| Editing wrong project file | “My changes vanished” | Path discipline; one working ACD |
| Confusing offline edits with controller | Online values don’t match your offline file | Download/upload awareness (1.7) |
| Creating Periodic tasks with no reason | Overlap / confusion later | Continuous until Phase 4 |

---

## 5. Mini-lab

[`LAB-1.3-project-skeleton.md`](../../../../LABS/01-foundation/LAB-1.3-project-skeleton.md)

---

## 6. Troubleshooting tree

[`DT-1.3-project-navigation.md`](../../../../ON_THE_JOB/Symptom_Decision_Trees/DT-1.3-project-navigation.md)

```
"I can't find my logic"
  → Correct ACD file open?
  → Correct Program under the Task that is scheduled?
  → Routine exists and is called (JSR) or is MainRoutine?
  → Looking at Program Tags vs Controller Tags?
```

---

## 7. Quiz

[`Q03-project-structure.md`](../../../../RESOURCES/quizzes/01-foundation/Q03-project-structure.md)

---

## 8. Spaced repetition

| When | Re-visit |
|------|----------|
| **+1 day** | From memory: Task vs Program vs Routine with packaging example. Create a new skeleton in <10 minutes. |
| **+1 week** | Open a stranger ACD (sample) and map its organizer on paper. |
| **+1 month** | Refactor P1 into multi-routine structure (aligns with 2.4). |

### Teach-back

> What is a Task, Program, and Routine — using a packaging line as the example?

### Exit checklist

- [ ] Skeleton ACD saved  
- [ ] Navigate 5 organizer locations <30 s each  
- [ ] Quiz ≥ 80%  

## Next

→ [1.4 Tags](04-tags.md)
