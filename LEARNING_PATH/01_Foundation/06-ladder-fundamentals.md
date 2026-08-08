# Module 1.6 — Ladder Diagram fundamentals

| | |
|--|--|
| **Time** | 6–8 hours |
| **Prerequisites** | 1.5 |
| **Labs** | [1.6A](../../../../LABS/01-foundation/LAB-1.6A-start-stop.md) · [1.6B](../../../../LABS/01-foundation/LAB-1.6B-permissives.md) · [1.6C](../../../../LABS/01-foundation/LAB-1.6C-latch-vs-sealin.md) |
| **Quiz** | [`../../RESOURCES/quizzes/01-foundation/Q06-ladder.md`](../../../../RESOURCES/quizzes/01-foundation/Q06-ladder.md) |
| **Tree** | [`DT-01-wont-start.md`](../../../../ON_THE_JOB/Symptom_Decision_Trees/DT-01-wont-start.md) · [`DT-1.6-stop-logic.md`](../../../../ON_THE_JOB/Symptom_Decision_Trees/DT-1.6-stop-logic.md) |
| **Cheatsheet** | [`../../ON_THE_JOB/Quick_Cheatsheets/ladder-instructions.md`](../../../../ON_THE_JOB/Quick_Cheatsheets/ladder-instructions.md) |

---

## Learning objectives

- Use **XIC, XIO, OTE, OTL, OTU** correctly  
- Build packaging infeed **3-wire start/stop** with seal-in  
- Add **series permissives** (guard, discharge clear, e-stop OK, OL)  
- Compare **seal-in** vs **latch** patterns  
- Introduce **ONS** (one-shot) concept for later counting  

---

## 1. Concept — electrician language

Ladder in Logix is drawn to look like relay logic **on purpose**. Instructions map to what you already know:

| Instruction | Name | Electrician parallel |
|-------------|------|----------------------|
| **XIC** | Examine If Closed | NO contact — true when bit = **1** |
| **XIO** | Examine If Open | NC contact *relative to the tag* — true when bit = **0** |
| **OTE** | Output Energize | Standard coil — follows rung condition each scan |
| **OTL** | Output Latch | Latching relay **set** |
| **OTU** | Output Unlatch | Latching relay **reset** |
| **ONS** | One Shot | Momentary contact that closes for one scan on rising edge |

### Rung evaluation

- Left to right, series = AND  
- Branches = OR (parallel contacts)  
- Coil(s) on the right  

### Seal-in (holding contact)

Exactly like a motor starter holding contact across the Start PB — but the holding bit is usually the **same Run command** or a run status bit.

### NC Stop convention (again — this is the module that burns it in)

| Field | Tag when healthy (not pressed) | Typical instruction |
|-------|--------------------------------|---------------------|
| Stop PB wired **NC** to input | Input **1** | `XIC INF01_Stop_OK` |
| If you invent `Stop_Pressed` as 1 when pressed | — | Then `XIO` might fit — **pick one convention** |

**Never** wire NC and also “double NC” in logic without meaning to.

---

## 2. Studio 5000 walkthrough — build infeed run logic

### A. Open MainRoutine (or `rtn_Motors`)

1. Open ladder routine.  
2. Instruction toolbar: find XIC, XIO, OTE, branch tools.  

### B. Rung 0 — main seal-in with permissives

Build this structure (tag names from 1.4/1.5):

**Series permissives (all must be true to allow run):**

- `INF01_EStop_OK`  
- `INF01_Stop_OK`  
- `INF01_OL_OK`  
- `INF01_Guard_OK`  
- `INF01_Dsch_Clear`  

**Start / seal-in OR branch:**

- `INF01_Start_PB` **OR** `INF01_MTR01_Run_Cmd`  

**Coil:**

- `OTE INF01_MTR01_Run_Cmd`  

### ASCII picture

```
   EStop_OK  Stop_OK  OL_OK  Guard_OK  Dsch_Clear   Start_PB        Run_Cmd
----] [-------] [-----] [-----] [--------] [----+----] [----+-----( )----
                                                |           |
                                                |  Run_Cmd  |
                                                +----] [----+
```

### C. Rung 1 — run light

```
   Run_Cmd
----] [-----( )  Run_Light
```

### D. Rung 2 — simple fault light (permissive missing while start requested)

Example approach (refine in lab):

- If `Start_PB` true AND any critical permissive false → `Fault_Light`  
- Or latch `INF01_Fault` on invalid start attempt; reset with `Fault_Reset`  

Lab 1.6B specifies the required behavior.

### E. Verify edit

1. Verify routine (project verify).  
2. Fix errors (undefined tags = create tags).  
3. Save `M16_Infeed_Ladder.ACD`.  

### F. OTL/OTU experiment (Lab 1.6C only)

Separate tags:

- Start → `OTL Run_Latched`  
- Stop → `OTU Run_Latched`  

Compare retention vs OTE seal-in when conditions drop.

### G. ONS intro (optional 5-minute)

Place `ONS` storage bit with a PB to see single-scan pulse — full use in counters Phase 2.

---

## 3. Side-by-side — full comparison sheet

### Hardwired packaging conveyor

```
L+ ─[E-stop OK]─[Stop NC]─[OL]─[Guard]─[PE Clear]─[Start NO]─┬─(M)─ L-
                                                             │
                                                          [M hold]
```

### Logix ladder (same intent)

```
EStop_OK * Stop_OK * OL_OK * Guard_OK * Dsch_Clear * (Start_PB + Run_Cmd) → Run_Cmd
```

| Hardwired | Ladder |
|-----------|--------|
| Series contacts | Series XICs |
| Parallel hold around Start | Branch with `Run_Cmd` XIC |
| Coil M | OTE `Run_Cmd` (aliased to DO) |
| Device NC physically | Tag true when healthy + XIC (if using OK naming) |

### Seal-in vs latching relay

| Pattern | Hardwired | Logix | Use on conveyor |
|---------|-----------|-------|-----------------|
| Seal-in | M aux around Start | OTE + branch | **Default** for 3-wire |
| Latch | Mechanical latch / seal-in relay | OTL/OTU | Memory, alarms; careful on motors |

---

## 4. Common mistakes

| Mistake | Online look | Fix |
|---------|-------------|-----|
| XIO on `Stop_OK` when stop is NC healthy=1 | Won’t run, or runs only while holding stop | Use XIC on OK tags |
| Forgot seal-in branch | Runs only while Start held | Add Run branch |
| Permissive only on Start, not in seal-in path | Runs after guard opens | Permissives in series **ahead of** seal-in OR structure so drop-out works |
| OTL motor without solid OTU | Runs through stop attempts | Prefer OTE seal-in for motors |
| OTE on an alias that’s actually an input | Verify errors / weirdness | Outputs on DO aliases only |
| Writing to the same OTE in two rungs | Last wins / flicker | One coil owner |

---

## 5. Mini-labs

1. **1.6A** — Basic start/stop + OL  
2. **1.6B** — Full permissives + fault light  
3. **1.6C** — Latch vs seal-in comparison write-up  

---

## 6. Troubleshooting trees

- Won’t start / won’t stay running: [`DT-01`](../../../../ON_THE_JOB/Symptom_Decision_Trees/DT-01-wont-start.md)  
- Stop inverted / won’t stop: [`DT-1.6-stop-logic.md`](../../../../ON_THE_JOB/Symptom_Decision_Trees/DT-1.6-stop-logic.md)

```
Won't stop when Stop pressed
  → Does Stop_OK go FALSE when pressed? (field NC opens → input should drop)
  → Is Stop_OK actually in the rung?
  → XIO/XIC inverted?
  → OTL without OTU on stop?
  → Force on Run_Cmd or Stop_OK?
```

---

## 7. Quiz

[`Q06-ladder.md`](../../../../RESOURCES/quizzes/01-foundation/Q06-ladder.md) — 12 questions.

---

## 8. Spaced repetition

| When | Re-visit |
|------|----------|
| **+1 day** | Draw seal-in rung from memory with all INF01 permissives. Recite XIC/XIO truth. |
| **+1 week** | Build start/stop timed: under 15 minutes blank project. Explain NC stop trap to someone. |
| **+1 month** | Compare your plant’s standard motor AOI later; still explain raw ladder form. |

### Teach-back

> Using only electrician language, explain XIC vs XIO — then why Stop is the instruction everyone gets wrong.

### Exit checklist

- [ ] 1.6A/B pass tests  
- [ ] 1.6C hazards list written  
- [ ] Quiz ≥ 85% (core skill)  

## Next

→ [1.7 Online / force](07-online-monitor-force.md)
