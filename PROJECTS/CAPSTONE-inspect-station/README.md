# CAPSTONE — Inspect & divert station (end-to-end)

## Objective
Design, program, simulate (Emulate or trainer), document, and **intentionally break/fix** a small but realistic machine cell:

**Infeed conveyor → Inspect station → Divert/reject → Outfeed**

This is the primary **build** capstone. Pair with [P5](../P5-field-mastery-capstone/) for pure recovery under pressure.

| | |
|--|--|
| **Time** | 16–24 hours (design through verify) |
| **Prerequisites** | P1–P3 recommended; Phase 2 timers/analog minimum; AOI/UDT strongly preferred |
| **Platform** | Studio 5000 + Emulate 5000 **or** Compact/ControlLogix trainer |
| **Pass** | Rubric ≥ **90** + teach-back TB4 started |

---

## 1. Machine description (realistic packaging / light assembly)

### Process
1. **Infeed conveyor** moves product to inspect position.  
2. **Photoeye / prox** detects product in station.  
3. **Inspect** (simulate with PB “Pass/Fail” or discrete “vision OK/NG” inputs — or random/manual inject).  
4. If **Pass** → outfeed conveyor runs to clear.  
5. If **Fail** → divert/reject actuator (DO) + optional reject confirm PE.  
6. Cycle returns to wait for next product.  
7. **E-stop / guard / discharge clear** style permissives as process interlocks.  
8. Operator modes: **Off / Manual / Auto**, faults with reset.

*You may rename equipment to match a machine-tool load/unload cell — keep the same functional blocks.*

### Why this machine
| Skill | Where exercised |
|-------|-----------------|
| Discrete I/O + aliases | All sensors/actuators |
| Sequencing | Auto cycle state machine |
| Fault handling | Jams, timeouts, reject confirm |
| Operator interface | Modes, commands, status, alarms |
| Troubleshooting | Seeded faults + recovery |
| Optional advanced | AOI motors, ST/SFC sequence, heartbeat to “upstream ready” |

---

## 2. Design deliverables (before heavy coding)

Complete these files in this folder:

| File | Content |
|------|---------|
| [DESIGN.md](DESIGN.md) | Sequence of operations, modes, fault list |
| [IO_MAP.md](IO_MAP.md) | Full digital map (+ analog optional) |
| [TAG_LIST.md](TAG_LIST.md) | CMD/STS/ALM/CFG (+ UDT instances if used) |
| [HMI_NOTES.md](HMI_NOTES.md) | Operator screen considerations (even without real HMI) |
| [TEST_PLAN.md](TEST_PLAN.md) | FAT-style tests |
| [FAULT_INJECTION.md](FAULT_INJECTION.md) | Bugs you will inject and fix |
| [RCA_LOG.md](RCA_LOG.md) | At least 4 RCAs |
| ACD (local) | Working project — gitignored |

**Gate:** Do not start complex sequence until DESIGN + IO_MAP are filled.

---

## 3. Functional requirements

### Modes
- [ ] **Off** — no motion commands  
- [ ] **Manual** — jog/run individual devices with permissives  
- [ ] **Auto** — full cycle  
- [ ] Mode changes only when safe (document rules)  

### Sequencing (Auto)
- [ ] Idle → product detect → inspect → pass path **or** reject path → clear → Idle  
- [ ] Timeouts on “product didn’t clear” / “reject not confirmed” → fault  
- [ ] Single-step friendly structure (state DINT or SFC)  

### Fault handling
- [ ] Latched faults with operator reset  
- [ ] Alarm bits suitable for HMI (`ALM_…`)  
- [ ] Safe state on fault: conveyors off, divert de-energized or spring-safe as designed  
- [ ] At least one **communication-style** fault if you include heartbeat (optional stretch)  

### I/O & program quality
- [ ] All field points aliased; I/O map complete  
- [ ] Multi-routine or multi-program structure  
- [ ] Motors prefer AOI+UDT if you completed Mini-M3  
- [ ] No forces at handoff  
- [ ] Descriptions on critical tags  

### Operator interface considerations (required even without PanelView)
Document in HMI_NOTES:
- Mode selector behavior  
- Start cycle / Reset fault / Manual device buttons  
- Status: state name, product present, last result Pass/Fail  
- Alarms: text an operator understands  
- What **not** to put on the screen (safety reset lies, etc.)  

---

## 4. Suggested state machine (ST or SFC or ladder steps)

| State | Name | Exit when |
|-------|------|-----------|
| 0 | Idle | Product present + Auto + Start/enable |
| 1 | ClampInspect | Inspect complete (Pass/Fail inputs or timer sim) |
| 2 | PassOutfeed | Outfeed clear PE / timer |
| 3 | RejectDivert | Divert + reject confirm or timer |
| 4 | Fault | Reset + conditions clear → Idle |

Adapt freely; keep **one clear state tag**.

---

## 5. Minimum I/O set (example)

### Inputs
| Device | Example tag |
|--------|-------------|
| EStop_OK / Safety OK permissive | `CAP_EStop_OK` |
| Guard_OK | `CAP_Guard_OK` |
| Infeed PE / product enter | `CAP_PE_In` |
| Station product present | `CAP_PE_Station` |
| Outfeed clear | `CAP_PE_OutClear` |
| Reject confirm | `CAP_PE_Reject` |
| Inspect Pass | `CAP_Inspect_Pass` |
| Inspect Fail | `CAP_Inspect_Fail` |
| Start / Stop / Reset / Mode bits | `CMD_…` |

### Outputs
| Device | Example tag |
|--------|-------------|
| Infeed run | `CAP_MTR_Infeed_Run` |
| Outfeed run | `CAP_MTR_Outfeed_Run` |
| Divert/reject | `CAP_Divert` |
| Stack run/fault lights | `CAP_Light_…` |

Scale up/down for your trainer point count; **logic must still be complete** with emulate toggles if short on points.

---

## 6. Build phases (suggested order)

| Phase | Work | Hours |
|-------|------|-------|
| A | Design docs + I/O map | 2–3 |
| B | Tags, aliases, mode + permissives | 2–3 |
| C | Manual device control | 2 |
| D | Auto sequence | 4–6 |
| E | Faults, timeouts, alarms | 2–3 |
| F | HMI tag layer + notes | 1–2 |
| G | Full test plan | 2 |
| H | Fault injection + RCA | 2–3 |
| I | Polish + teach-back outline | 1 |

---

## 7. Simulation / test expectations

### Emulate
- Toggle inputs to walk every state  
- Inject fail path and pass path  
- Prove timeout faults  

### Real hardware
- Point-to-point I/O checkout first  
- Manual before Auto  
- Slow Auto with spotter  

### Required proofs
- [ ] Pass cycle  
- [ ] Fail/reject cycle  
- [ ] Guard open drops motion  
- [ ] Fault latch + reset  
- [ ] Mode Off removes commands  
- [ ] Force table empty  

---

## 8. Fault injection (mandatory)

Use [FAULT_INJECTION.md](FAULT_INJECTION.md). Minimum **four** from:

1. Inverted stop or permissive  
2. Wrong output alias  
3. State machine stuck (bad transition)  
4. Timeout too short/long causing nuisance or never fault  
5. Force left on  
6. JSR to empty / uncalled sequence routine  
7. Heartbeat stale (if implemented)  
8. Divert never confirmed  

Each gets RCA in [RCA_LOG.md](RCA_LOG.md).

---

## 9. Rubric (100 pts) — pass ≥ 90

| Category | Pts |
|----------|-----|
| Design completeness (SOO, modes, faults) | 15 |
| I/O map + aliases + structure | 15 |
| Manual mode solid | 10 |
| Auto sequence correct (pass + fail paths) | 20 |
| Fault handling / safe state | 15 |
| HMI considerations quality | 5 |
| Test plan evidence | 10 |
| Fault injection RCAs (≥4) | 10 |

## Stretch (+ optional distinction)
- Motor AOI for both conveyors  
- SFC for Auto + ladder permissives  
- Analog optional (e.g. “inspect score”)  
- Periodic task for fast PE  
- Peer “upstream ready” heartbeat  

---

## 10. Teach-back

Deliver 10-minute handoff using [retention/teach-back/TB-phase4.md](../../LEARNING_PATH/Retention/teach-back/TB-phase4.md) Part C, focused on **this** machine.

---

## 11. After pass

1. Schedule spaced review **SR-4** / full flashcard mix  
2. Complete [expert-checklist.md](../../LEARNING_PATH/Retention/expert-checklist.md) honestly  
3. Run **P5** on a broken copy of this project (or mentor-seeded bugs)  
4. Monthly: re-break one subsystem and time your recovery  

---

## Related curriculum

- Troubleshooting hub: `../ON_THE_JOB/README.md`  
- Mini projects: `projects/mini/`  
- Progressive P1–P4 READMEs  
