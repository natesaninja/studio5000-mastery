# P5 — Field mastery (broken system recovery)

## Objective
Prove unsupervised recovery skills on a **broken** package — preferably a sabotaged copy of your [CAPSTONE inspect station](../CAPSTONE-inspect-station/).

| | |
|--|--|
| **Time** | 10–12 hours |
| **Prerequisites** | CAPSTONE built & passing (or mentor-provided broken ACD) |
| **Pass** | Rubric ≥ **90** |

---

## Relationship to CAPSTONE

| CAPSTONE | P5 |
|----------|-----|
| You design and build | You inherit pain |
| Clean test plan | Ops symptom list only |
| You know the architecture | You must rediscover |

**Ideal flow:** Finish CAPSTONE → clone ACD → inject bugs from list below (or mentor injects) → run P5 timed sections.

---

## You receive

- [ ] ACD with **≥5 seeded bugs** (hidden from you if mentor-led)  
- [ ] Incomplete or slightly wrong I/O map  
- [ ] Ops symptom list (below template)  
- [ ] Optional: “last change” red herring note  

### Ops symptom list (template)

```
1. Auto pass cycle hangs in station.
2. Reject path never fires divert.
3. After e-stop reset, Manual infeed dead.
4. HMI/comm heartbeart alarm stuck (if used).
5. Intermittent stop when PE flickers (or forced flicker).
```

---

## Required performance

- [ ] Use decision trees; **no shotgun** multi-edits  
- [ ] Fix ≥5 distinct root causes (or 5 RCAs if some are field-sim)  
- [ ] At least one **I/O/alias** issue  
- [ ] At least one **logic/sequence** issue  
- [ ] At least one **override/force** or online discipline issue  
- [ ] One controlled **online edit** with change note (if platform allows)  
- [ ] Trend artifact for any intermittent  
- [ ] Full RCA package  
- [ ] 10-minute handoff presentation  

---

## Timed drills (optional scoring boost)

| Drill | Limit | Tree |
|-------|-------|------|
| Won’t start Manual | 15 min | DT-01 / DT-OUT |
| Inputs “dead” | 15 min | DT-IN |
| Sequence stuck | 15 min | DT-SCAN |
| Major fault (if safely induced offline) | 15 min | DT-MAJ |
| Comms/heartbeat | 15 min | DT-COM |

---

## Bug authoring list (mentor / self-sabotage)

1. Inverted stop  
2. Wrong alias on divert or motor  
3. Heartbeat timeout missing / too long  
4. Scale reversed (if analog used)  
5. JSR removed / wrong routine  
6. Force left on  
7. State transition impossible (Pass/Fail never set)  
8. Latched fault with no reset path  
9. Timeout PRE = 0 or absurd  
10. Dual OTE on run command  

---

## Rubric (100 pts)

| Item | Pts |
|------|-----|
| Correct root causes | 35 |
| Safe methods (forces, safety, identity) | 20 |
| Quality of fixes | 20 |
| Documentation / RCA | 15 |
| Presentation / handoff | 10 |

**Pass ≥ 90**

---

## Deliverables

| File | |
|------|--|
| [OPS_SYMPTOMS.md](OPS_SYMPTOMS.md) | What you were told |
| [RCA_PACKAGE.md](RCA_PACKAGE.md) | All RCAs |
| [CHANGE_LOG.md](CHANGE_LOG.md) | Fixes + online edits |
| [HANDOFF.md](HANDOFF.md) | 10-min outline |
| Restored ACD (local) | |

---

## After P5

- [ ] Update `../LEARNING_PATH/Retention/expert-checklist.md`  
- [ ] Complete TB-phase4  
- [ ] Schedule monthly mixed flashcards  
