# 0.1 — How to use this path

## Learning objectives

- Confirm software/hardware access for Studio 5000 Logix Designer work
- Set a study + spaced-review calendar you will actually follow
- Understand the repo layout and the “electrician map” teaching style
- Complete Lab 0.1 (first project navigation)

**Estimated time:** 2–3 hours  
**Prerequisites:** Electrician baseline (schematics, motors, sensors, relays, VFDs, basic controls)

---

## The retention contract

You will forget what you only watch or skim. This path assumes:

| Habit | Why |
|-------|-----|
| **Lab every module** | Motor memory for Studio 5000 UI and logic patterns |
| **Quiz same day** | Active recall beats re-reading |
| **Teach-back** | Forces gaps into the open |
| **Spaced review** | Moves skills into long-term memory |
| **Projects reuse** | Interleaves old skills with new ones |

If you skip reviews to “go faster,” you will rework later under plant pressure. That is slower.

---

## Recommended weekly rhythm

### Full-time (~35–40 h/week) — ~8–10 weeks

| Day | Focus |
|-----|--------|
| Mon–Thu | 1 module: read → lab → quiz → teach-back |
| Fri | Troubleshooting scenarios + review weak quiz items |
| Sat | Project time or catch-up |
| Sun | Spaced review deck only (45–90 min) |

### Part-time (~10 h/week) — ~5–6 months

| Block | Focus |
|-------|--------|
| 2× 3 h evenings | Module work (lab mandatory) |
| 1× 2 h weekend | Quiz + scenarios + review |
| Monthly | Full SR-X mixed deck |

---

## Software setup checklist

- [ ] Studio 5000 Logix Designer (version known and written down)
- [ ] Emulate 5000 **or** CompactLogix/ControlLogix trainer with comms
- [ ] Compatible browser/path tools if using Ethernet (RSLinx / FactoryTalk Linx as applicable)
- [ ] Place to store ACD files + PDF exports of logic for notes
- [ ] This repo cloned/copied and readable offline

**Version note:** Match firmware and software families in real plants. For learning, pick one version and stay consistent until Phase 3.

---

## How each module is structured

1. **Objectives & success criteria** (what “done” means)
2. **Electrician map** (old knowledge → new instruction)
3. **Concept** (short, practical)
4. **Lab** (`../../LABS/...`) — do not skip
5. **Scenario / tree** (`troubleshooting/...`)
6. **Quiz** (`quizzes/...`) — closed notes first
7. **Teach-back prompt** — write or record aloud
8. **Spaced review tags** — add weak cards to your deck

---

## Electrician → Logix translation (always on)

| You already know | Logix idea |
|------------------|------------|
| Relay coil | `OTE` (or FBD coil equivalent) |
| NO contact | `XIC` |
| NC contact | `XIO` |
| Seal-in / holding contact | Branch around start with run bit |
| Latching relay | `OTL` / `OTU` |
| On-delay timer | `TON` |
| Off-delay timer | `TOF` |
| Counter | `CTU` / `CTD` |
| Terminal label | Tag name |
| Wire number | Often replaced by tag + alias to I/O |
| Drawing sheet | Routine |
| Section of machine | Program |
| How often panel “thinks” | Task rate / scan |
| Jumper on a contact | Force (treat as dangerous) |
| Chart recorder | Trend |
| Inter-panel cable | Produced/consumed or hard I/O |
| Calling the other MCC | MSG instruction |

---

## Lab report minimum (every lab)

Use `../../RESOURCES/templates/lab-report.md`:

1. Goal  
2. I/O or tag list  
3. Steps performed  
4. Result (pass/fail)  
5. What surprised you  
6. One sentence you would teach an apprentice  

---

## Safety mindset (non-negotiable)

- LOTO and site rules always beat a lab objective  
- Forces are temporary and logged  
- Online edits on production equipment require authorization  
- Personnel safety functions belong in appropriate safety systems — not “clever” standard ladder  

---

## Lab 0.1 — First navigation

**Goal:** Prove tool access and learn Controller Organizer.

1. Create a new project (any supported CompactLogix or ControlLogix Emulate type).  
2. Name controller `TRAINER_01` (or your site standard).  
3. Find: Controller Tags, Program Tags, MainTask, MainProgram, MainRoutine, I/O Configuration, Trends, Module Properties (when modules exist).  
4. Create controller-scoped BOOL `Test_Bit` and toggle it offline.  
5. Save ACD to `../../LABS/01-foundation/output/` (create folder if needed).  

**Success:** You can find tags and MainRoutine without hunting for more than 30 seconds.

---

## Quiz 0.1 — self check

1. What is the difference between a Task, a Program, and a Routine?  
2. Why do we care about software/firmware revision matching?  
3. What is a force equivalent to in the field, and why is it dangerous?  

*(Answers: see `../../RESOURCES/quizzes/01-foundation/Q00-orientation-answers.md`)*

---

## Teach-back

Explain in 3 minutes to a new apprentice:  
**“What is a PLC project made of, and where does the motor start logic live?”**

---

## Next

→ [Module 1.1 — PLC vs hardwired](01-foundation/01-plc-vs-hardwired.md)  
→ Full list: [`MASTER_OUTLINE.md`](../MASTER_OUTLINE.md)
