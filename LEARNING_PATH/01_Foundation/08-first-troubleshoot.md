# Module 1.8 — First real troubleshooting habits

| | |
|--|--|
| **Time** | 4–5 hours |
| **Prerequisites** | 1.7 |
| **Lab** | [`../../LABS/01-foundation/LAB-1.8-fault-injection.md`](../../../../LABS/01-foundation/LAB-1.8-fault-injection.md) |
| **Quiz** | [`../../RESOURCES/quizzes/01-foundation/Q08-troubleshoot.md`](../../../../RESOURCES/quizzes/01-foundation/Q08-troubleshoot.md) |
| **Scenarios** | [`../../ON_THE_JOB/Scenarios/phase-01/`](../../../../ON_THE_JOB/Scenarios/phase-01/) |
| **Trees** | DT-01, DT-02, DT-03, DT-1.6 |

---

## Learning objectives

- Separate **field** vs **I/O config** vs **alias** vs **logic** vs **overrides**  
- Use **Monitor Tags**, **cross-reference**, and **module properties**  
- Follow a written tree under mild time pressure  
- Write a one-paragraph RCA another electrician can act on  

---

## 1. Concept — electrician language

You already troubleshoot:

```
device → wire → terminal → coil
```

Logix extends the chain:

```
device → wire → module terminal → input image → alias/tag → rung → output image → DO terminal → wire → coil
         + forces + mode + connection health
```

Same discipline: **one hypothesis at a time**, evidence before parts-cannon.

### The 6 buckets (use every call)

| # | Bucket | Examples |
|---|--------|----------|
| 1 | **Energy & mode** | Power, RUN, major fault, keyswitch |
| 2 | **Field device & wiring** | PB, prox, coil, fuse, 24 V |
| 3 | **I/O module & config** | Slot, catalog, inhibit, connection |
| 4 | **Tag / alias** | Wrong bit, wrong scope |
| 5 | **Logic** | Inverted stop, missing seal-in, permissive |
| 6 | **Overrides** | Forces, HMI maint mode, taped sensors |

### Tool order (foundation)

1. Eyes / ears / stack lights / module LEDs  
2. Meter (when safe / LOTO rules allow)  
3. Online Controller Tags  
4. Module properties / connection  
5. Cross-reference (right-click tag → Cross Reference)  
6. Trend (Phase 2) for intermittents  

### Packaging call example

Ops: “Infeed won’t start.”

| Check | Result | Bucket |
|-------|--------|--------|
| Guard light red on HMI | Guard_OK false | 2 or 5 |
| Guard prox LED on, tag false | — | 3/4 |
| Tag false, LED on at module | alias/force | 4/6 |
| Run_Cmd true, starter silent | output/field | 2/3/4 |

---

## 2. Studio 5000 walkthrough — diagnostic toolkit

### A. Cross-reference

1. Online or offline, right-click `INF01_MTR01_Run_Cmd`.  
2. **Cross Reference**.  
3. List every rung that examines or energizes it.  
4. Confirm **single OTE owner**.  

### B. Module properties

1. I/O Configuration → module → **Properties**.  
2. Connection tab / status when online.  
3. Note faults, inhibit, RPI.  

### C. Find forces

1. Open **I/O Forces** / tag forces index (location varies slightly by version).  
2. Clear any leftover from previous lab.  

### D. Fault injection practice (self)

Use Lab 1.8 sequence — one fault at a time, full RCA each.

### E. RCA template (always)

```
Symptom:
Evidence (LEDs, tags, meter):
Bucket:
Root cause:
Fix:
Prevention:
```

---

## 3. Side-by-side — relay panel troubleshoot vs Logix

| Relay panel question | Logix question |
|----------------------|----------------|
| Is control power up? | Chassis + field 24 V + controller mode |
| Is the stop string closed? | Is `Stop_OK` tag 1? |
| Is the coil getting voltage? | Is DO LED on + voltage at terminal? |
| Is the holding contact welded? | Is logic sealing? Force? OTL stuck? |
| Did someone jumper a limit? | Forces / maint bypass tags |

---

## 4. Common mistakes

| Mistake | Result |
|---------|--------|
| Shotgun online changes | New bugs; no learning |
| Only watching HMI | HMI can lie or lag |
| Ignoring forces | Ghost machine |
| Fixing symptoms (force Run) | Unsafe pseudo-fix |
| No written RCA | Next shift repeats the outage |
| Skipping field meter when safe | Chasing software for a blown fuse |

---

## 5. Mini-lab

[`LAB-1.8-fault-injection.md`](../../../../LABS/01-foundation/LAB-1.8-fault-injection.md) — five faults, five RCAs.

---

## 6. Troubleshooting trees (master set for Phase 1)

| Symptom | Tree |
|---------|------|
| Won’t start | DT-01 |
| LED ≠ tag | DT-02 |
| Can’t online | DT-03 |
| Won’t stop / inverted stop | DT-1.6 |
| Dead panel power | DT-1.2 |

Combined pocket flow:

```
Make safe → Mode/fault → Field power →
Run_Cmd true? → DO path? → Field starter?
Run_Cmd false? → Permissives/stop/alias/logic/forces
```

---

## 7. Quiz

[`Q08-troubleshoot.md`](../../../../RESOURCES/quizzes/01-foundation/Q08-troubleshoot.md)

Also complete **Phase 1 cumulative** quiz: [`Q-phase1-cumulative.md`](../../../../RESOURCES/quizzes/01-foundation/Q-phase1-cumulative.md)

---

## 8. Spaced repetition

| When | Re-visit |
|------|----------|
| **+1 day** | Recite 6 buckets. Clear one injected fault timed (10 min). |
| **+1 week** | Full Lab 1.8 reshuffle order. Teach DT-01 to someone. |
| **+1 month** | SR-1 deck + real call notes if available. Start P1 if not done. |

### Teach-back

> Teach your decision order for: output tag is true but motor starter doesn’t pull in.

### Exit checklist — Phase 1 ready for P1

- [ ] 5/5 fault RCAs  
- [ ] Module quizzes average ≥ 80%; cumulative ≥ 85% after study  
- [ ] Can teach 6 buckets  
- [ ] Proceed to [`../../PROJECTS/P1-conveyor-start-stop`](../../../../PROJECTS/P1-conveyor-start-stop/README.md)  

## Next

→ **P1 Gate Project** → then Phase 2
