# START HERE

This repo has **two jobs**. Pick one door.

```
                    ┌─────────────────────┐
                    │  00_START_HERE.md   │
                    └──────────┬──────────┘
               ┌───────────────┴───────────────┐
               ▼                               ▼
    ┌─────────────────────┐         ┌─────────────────────┐
    │  AT WORK           │         │  STUDYING            │
    │  Machine down?      │         │  Building skill?     │
    │  ON_THE_JOB/        │         │  LEARNING_PATH/      │
    └─────────────────────┘         └─────────────────────┘
```

| I am… | Open |
|-------|------|
| **Troubleshooting a real machine** | → [**ON_THE_JOB/README.md**](ON_THE_JOB/README.md) |
| **Learning Studio 5000 from novice → expert** | → [**LEARNING_PATH/README.md**](LEARNING_PATH/README.md) |
| Need the full map of both | → [**MASTER_OUTLINE.md**](MASTER_OUTLINE.md) |

---

# Door 1 — ON THE JOB (work)

**Goal:** Find the problem area fast. Fix it. Don’t study chapters on the floor.

### Open order (under 60 seconds)

| # | File |
|---|------|
| 1 | [Finding_the_Problem_Area.md](ON_THE_JOB/Finding_the_Problem_Area.md) |
| 2 | [What_to_Check_First.md](ON_THE_JOB/What_to_Check_First.md) |
| 3 | Matching [Symptom_Decision_Trees](ON_THE_JOB/Symptom_Decision_Trees/) |
| 4 | [Cross_Reference_and_Tools.md](ON_THE_JOB/Cross_Reference_and_Tools.md) if stuck on tools |
| 5 | [Common_Faults_&_Codes.md](ON_THE_JOB/Common_Faults_&_Codes.md) for FAULT LED / codes |

### Pocket rules
- Force tables early  
- Cmd false → logic; cmd true + no DO LED → output path  
- Green rung ≠ coil voltage  
- Clear ≠ fix  
- Don’t force safety  

---

# Door 2 — LEARNING PATH (study)

**Goal:** Durable skill with labs, quizzes, teach-backs, spaced review.

### Order

1. [LEARNING_PATH/00_how-to-use-this-path.md](LEARNING_PATH/00_how-to-use-this-path.md)  
2. Phases: Foundation → Intermediate → Advanced → Expert  
3. Each module: **lesson → lab → quiz → teach-back**  
4. [Retention](LEARNING_PATH/Retention/README.md) flashcards (1d / 1w / 1m)  
5. [PROJECTS](PROJECTS/README.md): minis → P1–P4 → CAPSTONE → P5  

### Rules
- Labs are not optional  
- Spaced review is not optional  
- Phase teach-backs are gates  
- Map PLC instructions to electrical things you know  

---

# Folder map

```
ON_THE_JOB/          ★ job aid
LEARNING_PATH/       ★ curriculum + Retention/
LABS/                hands-on
PROJECTS/            progressive + capstone
RESOURCES/           quizzes, templates, expanded outline
```

---

# Safety

LOTO and site rules win. Forces are jumpers — remove them. Personnel safety ≠ a standard BOOL named `Estop`.
