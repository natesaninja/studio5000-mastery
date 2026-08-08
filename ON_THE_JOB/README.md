# ON THE JOB — Open this at work

**Purpose:** Fast diagnosis on real machines.  
**Not a course.** If you want to study, use [LEARNING_PATH](../LEARNING_PATH/README.md).

```
MACHINE DOWN?
    │
    ▼
Finding_the_Problem_Area.md     ← systematic workflow + Studio tools
    │
    ▼
What_to_Check_First.md          ← electrician “check first” cards
    │
    ▼
Symptom_Decision_Trees/DT-*.md  ← branch until root cause
    │
    ▼
Cheatsheets / Fault codes       ← only if you need a bit name or code family
```

---

## Pin these (top of folder)

| Priority | File | Use for |
|----------|------|---------|
| ★ 1 | [**Finding_the_Problem_Area.md**](Finding_the_Problem_Area.md) | Layer cake, divide-and-conquer, Monitor / Cross-Ref / Trend / Search |
| ★ 2 | [**What_to_Check_First.md**](What_to_Check_First.md) | Symptom → first 5 checks in electrician language |
| ★ 3 | [**Symptom_Decision_Trees/**](Symptom_Decision_Trees/README.md) | Full branching trees |
| ★ 4 | [**Cross_Reference_and_Tools.md**](Cross_Reference_and_Tools.md) | How to use the laptop tools fast |
| ★ 5 | [**Common_Faults_&_Codes.md**](Common_Faults_&_Codes.md) | Major/minor, LEDs, connections |
| ★ 6 | [**Quick_Cheatsheets/**](Quick_Cheatsheets/README.md) | Instructions, TIMER/MSG bits |

Also: [Online_vs_Offline.md](Online_vs_Offline.md) · [Scenarios/](Scenarios/) for practice stories

---

## Symptom → tree (fast index)

| Symptom | Tree |
|---------|------|
| Won’t start | [DT-01](Symptom_Decision_Trees/DT-01-wont-start.md) |
| **Output not on** | [DT-OUT](Symptom_Decision_Trees/DT-OUT-outputs-not-on.md) |
| **Input not reading** | [DT-IN](Symptom_Decision_Trees/DT-IN-inputs-not-reading.md) |
| **Sequence hanging** | [DT-SCAN](Symptom_Decision_Trees/DT-SCAN-logic-not-running.md) |
| **Intermittent** | [DT-INT](Symptom_Decision_Trees/DT-INT-intermittent.md) |
| **After power cycle** | [DT-PWR](Symptom_Decision_Trees/DT-PWR-after-power-cycle.md) |
| **Major fault recovery** | [DT-MAJ](Symptom_Decision_Trees/DT-MAJ-major-fault-recovery.md) |
| Comms / can’t online | [DT-COM](Symptom_Decision_Trees/DT-COM-communication-loss.md) |
| Safety trip | [DT-06](Symptom_Decision_Trees/DT-06-safety-trip.md) |
| Analog wrong | [DT-04](Symptom_Decision_Trees/DT-04-analog-wrong-reading.md) |
| Ignores stop | [DT-1.6](Symptom_Decision_Trees/DT-1.6-stop-logic.md) |
| LED ≠ tag | [DT-02](Symptom_Decision_Trees/DT-02-io-not-updating.md) |

---

## 15-minute triage

| Min | Do |
|-----|-----|
| 0–2 | Safe? Exact symptom? What changed? |
| 2–5 | Power, RUN/FAULT, safety, field |
| 5–10 | Forces → tag chain → module status |
| 10–13 | One test |
| 13–15 | Stabilize + tell ops |

---

## Memorize these splitters

| Observation | Problem area |
|-------------|----------------|
| Cmd tag **FALSE** | Logic / mode / permissives |
| Cmd **TRUE**, DO LED off | Alias / module / output supply |
| DO LED on, no volts at load | Wire / HOA / safety contactor |
| Volts at load, no motion | Starter / VFD / mechanical |
| CPU OK, all sensors dead | **Field 24 V** |
| LED on, tag false | Force / alias / connection |

---

## Pocket rules

- Open **force tables** on confusing calls.  
- Green rung ≠ coil voltage.  
- Clear ≠ fix on major faults.  
- Record fault Type/Code **before** clear.  
- Do not force safety devices as a production fix.  
- Confirm controller **identity** before download.  

---

## Learning later

Missed the same tree twice? Drill it in [LEARNING_PATH](../LEARNING_PATH/README.md) and [Retention/flashcards](../LEARNING_PATH/Retention/flashcards/).

← [00_START_HERE.md](../00_START_HERE.md) · [MASTER_OUTLINE.md](../MASTER_OUTLINE.md)
