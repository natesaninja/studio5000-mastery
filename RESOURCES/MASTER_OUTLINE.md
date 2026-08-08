# Master Outline — Studio 5000 Logix Mastery

**Audience:** Industrial electrician (schematics, motors, sensors, relays, VFDs, basic controls) with little/no PLC experience.  
**Goal:** Expert-level Studio 5000 Logix Designer programmer and field troubleshooter in the shortest *effective* time with high long-term retention.  
**Platforms:** ControlLogix and CompactLogix (tag-based Logix; RSLogix 5000 lineage).

---

## Global rules

1. **Practical first.** Theory only when it prevents a field mistake.
2. **Electrician mapping.** Every major instruction has an electrical equivalent in the module.
3. **Phase gate.** Do not advance until project + quiz pass + teach-back is written.
4. **Hardware/emulate.** Labs list both Emulate 5000 and real I/O options.
5. **Spaced review is mandatory.** Skipping reviews is the #1 way to “finish fast and forget.”

### Success criteria language used below

| Level | Meaning |
|-------|---------|
| **Recall** | Explain from memory without notes |
| **Do** | Perform on software/hardware without step-by-step hand-holding |
| **Diagnose** | Isolate root cause from symptoms using a decision process |
| **Teach** | Explain to an apprentice + answer “what if” questions |

---

## Phase 0 — Orientation (before Module 1.1)

| | |
|--|--|
| **Modules** | 0.1 Path setup |
| **Time** | 2–3 hours |
| **Prerequisites** | None beyond electrician baseline |
| **Docs** | `LEARNING_PATH/00_how-to-use-this-path.md` |
| **Success** | Tools installed or access confirmed; study schedule set; first spaced-review calendar created |

### 0.1 How to use this path

| | |
|--|--|
| **Objectives** | Install/confirm Studio 5000 + Emulate (or trainer); set retention schedule; learn folder conventions |
| **Time** | 2–3 h |
| **Labs** | Lab 0.1 — Open empty project, navigate Controller Organizer |
| **Quiz** | Quiz 0.1 |
| **Success** | Can create project, name controller, save ACD, open Controller Tags |

---

# PHASE 1 — FOUNDATION  
**Theme:** The PLC is a fast, flexible relay panel with a computer attached.  
**Duration:** 40–55 hours  
**Gate project:** P1 Conveyor start/stop with E-stop and permissives  

---

## Module 1.1 — PLC vs hardwired control (mental model)

| | |
|--|--|
| **Objectives** | Map PLC scan to relay logic timing; explain input → logic → output; state when PLC helps vs hurts vs is required |
| **Electrician map** | PLC scan ≈ continuous re-evaluation of a panel of relays, timers, and seal-ins — but in software order |
| **Time** | 3–4 h |
| **Prerequisites** | Phase 0 |
| **Docs** | `LEARNING_PATH/01_Foundation/01-plc-vs-hardwired.md` |
| **Labs** | Lab 1.1 — Draw hardwired start/stop, then sketch same as ladder rungs |
| **Scenarios** | SC-1.1 Motor won’t start: coil vs PLC output vs field device |
| **Tree** | `ON_THE_JOB/decision-trees/DT-01-wont-start.md` |
| **Quiz** | Quiz 1.1 |
| **Teach-back** | “Explain to an apprentice why the PLC doesn’t ‘see’ a stuck contact the way a voltmeter does.” |
| **Success** | Recall scan concept; Do map 3 hardwired circuits to ladder; Teach scan vs wiring |

---

## Module 1.2 — ControlLogix / CompactLogix hardware tour

| | |
|--|--|
| **Objectives** | Identify chassis, power supply, CPU, I/O, EN2T/ENBT, SD card; know CompactLogix integrated vs chassis-based ControlLogix; read key status LEDs |
| **Electrician map** | Chassis ≈ rack/panel backplane; I/O modules ≈ terminal blocks with intelligence; CPU ≈ master control relay + logic engine |
| **Time** | 4–5 h |
| **Prerequisites** | 1.1 |
| **Docs** | `LEARNING_PATH/01_Foundation/02-hardware-tour.md` |
| **Labs** | Lab 1.2 — Identify modules from photos/datasheets; match catalog numbers to function |
| **Faults** | LED quick ref in `ON_THE_JOB/fault-codes/FC-01-controller-leds.md` |
| **Quiz** | Quiz 1.2 |
| **Success** | Diagnose basic power/run/fault LEDs; Do name major parts of both platforms |

---

## Module 1.3 — Studio 5000 project structure

| | |
|--|--|
| **Objectives** | Create project; set controller type/revision; navigate Controller Organizer; understand Tasks → Programs → Routines; offline vs online |
| **Electrician map** | Task ≈ how often the panel re-evaluates; Program ≈ a machine section; Routine ≈ a sheet of ladder/drawings |
| **Time** | 4–5 h |
| **Prerequisites** | 1.2 |
| **Docs** | `LEARNING_PATH/01_Foundation/03-project-structure.md` |
| **Labs** | Lab 1.3 — Create Continuous task, MainProgram, MainRoutine; add subroutine |
| **Quiz** | Quiz 1.3 |
| **Success** | Do create full empty skeleton; Recall difference task/program/routine |

---

## Module 1.4 — Tag-based architecture (the big shift)

| | |
|--|--|
| **Objectives** | Controller vs program tags; atomic types (BOOL, INT, DINT, REAL); alias tags; base tags; scope rules; why addresses like N7:0 went away |
| **Electrician map** | Tag ≈ labeled terminal or named wire number with a type; alias ≈ jumper name to a real I/O point |
| **Time** | 5–6 h |
| **Prerequisites** | 1.3 |
| **Docs** | `LEARNING_PATH/01_Foundation/04-tags.md` |
| **Labs** | Lab 1.4 — Create tag hierarchy for a motor starter circuit |
| **Cheatsheet** | `ON_THE_JOB/Quick_Cheatsheets/tags-and-data-types.md` |
| **Quiz** | Quiz 1.4 |
| **Success** | Do design tags without addresses; Teach why scope matters for reuse and HMI |

---

## Module 1.5 — Digital I/O configuration

| | |
|--|--|
| **Objectives** | Add modules to I/O Configuration; set slot/path; create aliases to Local:X:I.Data.Y; sinking/sourcing awareness; force overview (safety later) |
| **Electrician map** | I/O config ≈ filling the panel layout and landing wires on the right terminals — before energizing |
| **Time** | 5–6 h |
| **Prerequisites** | 1.4 |
| **Docs** | `LEARNING_PATH/01_Foundation/05-digital-io.md` |
| **Labs** | Lab 1.5 — Configure DI/DO modules (or emulate); alias Start PB, Stop PB, Motor Run |
| **Tree** | `ON_THE_JOB/decision-trees/DT-02-io-not-updating.md` |
| **Faults** | `ON_THE_JOB/fault-codes/FC-02-io-module-faults.md` |
| **Quiz** | Quiz 1.5 |
| **Success** | Diagnose “input light on, tag false”; Do full digital alias map |

---

## Module 1.6 — Ladder Diagram fundamentals

| | |
|--|--|
| **Objectives** | XIC, XIO, OTE, OTL, OTU; seal-in; branch; examine vs energize; one-shot intro (ONS); never leave floating logic |
| **Electrician map** | XIC ≈ NO contact; XIO ≈ NC contact; OTE ≈ coil; OTL/OTU ≈ latching relay set/reset; seal-in ≈ holding contact across start PB |
| **Time** | 6–8 h |
| **Prerequisites** | 1.5 |
| **Docs** | `LEARNING_PATH/01_Foundation/06-ladder-fundamentals.md` |
| **Labs** | Lab 1.6A — 3-wire start/stop; Lab 1.6B — Multiple permissives; Lab 1.6C — Latch vs seal-in comparison |
| **Scenarios** | SC-1.6 Stop wired NC in field but programmed as XIC by mistake |
| **Quiz** | Quiz 1.6 |
| **Success** | Do write start/stop + interlocks from a schematic; Teach NC field device vs XIO |

---

## Module 1.7 — Download, go online, monitor, force (safely)

| | |
|--|--|
| **Objectives** | Communications path; download vs upload; go online; watch tags; force bits with LOTO mindset; who owns the machine |
| **Electrician map** | Download ≈ installing new prints and rewiring the panel in one shot; force ≈ jumper/tape on a contact — dangerous if left |
| **Time** | 4–5 h |
| **Prerequisites** | 1.6 |
| **Docs** | `LEARNING_PATH/01_Foundation/07-online-monitor-force.md` |
| **Labs** | Lab 1.7 — Download (or emulate run); force input; remove all forces; verify |
| **Tree** | `ON_THE_JOB/decision-trees/DT-03-wont-download.md` |
| **Quiz** | Quiz 1.7 |
| **Success** | Do online session safely; Diagnose comms path issues at basic level |

---

## Module 1.8 — First real troubleshooting habits

| | |
|--|--|
| **Objectives** | Separate field vs PLC vs program; use Controller Tags, module properties, cross-reference; document findings |
| **Electrician map** | Same as “is it the field device, the wire, or the coil?” — now with a laptop as a scope |
| **Time** | 4–5 h |
| **Prerequisites** | 1.7 |
| **Docs** | `LEARNING_PATH/01_Foundation/08-first-troubleshoot.md` |
| **Labs** | Lab 1.8 — Injected faults (wrong alias, inverted stop, force left on) |
| **Scenarios** | Full set in `ON_THE_JOB/scenarios/phase-01/` |
| **Quiz** | Quiz 1.8 |
| **Success** | Diagnose 5 injected faults using a written tree; Teach process to apprentice |

---

## Phase 1 Gate — Project P1

| | |
|--|--|
| **Project** | `PROJECTS/P1-conveyor-start-stop/` |
| **Time** | 6–8 h |
| **Requirements** | Start/stop, E-stop permissive, two interlocks, run light, fault light, clean tags, documented I/O map |
| **Success** | Pass rubric; Quiz Phase-1 cumulative ≥ 85%; teach-back essay 1 page |
| **Spaced review** | SR-1 starts (see `RESOURCES/quizzes/spaced-review/SR-schedule.md`) |

---

# PHASE 2 — INTERMEDIATE  
**Theme:** Industrial sequences, analogs, and live machines.  
**Duration:** 50–65 hours  
**Gate project:** P2 Tank level control  

---

## Module 2.1 — Timers (TON, TOF, RTO)

| | |
|--|--|
| **Objectives** | All three timer types; .PRE .ACC .EN .TT .DN; reset RTO; cascading; debounce; watchdog-style uses |
| **Electrician map** | TON ≈ on-delay timer relay; TOF ≈ off-delay; RTO ≈ retentive timer (keeps time through power/cycle depending on design) |
| **Time** | 5–6 h |
| **Prerequisites** | Phase 1 gate |
| **Docs** | `LEARNING_PATH/02_Intermediate/01-timers.md` |
| **Labs** | Lab 2.1A — Anti-tie-down / dwell; Lab 2.1B — RTO runtime hour meter pattern |
| **Quiz** | Quiz 2.1 |
| **Success** | Do select correct timer for 5 scenarios without hints |

---

## Module 2.2 — Counters (CTU, CTD, RES)

| | |
|--|--|
| **Objectives** | Count parts, cycles, faults; overflow awareness; pair with one-shots |
| **Electrician map** | CTU ≈ electromechanical counter coil; RES ≈ counter reset |
| **Time** | 3–4 h |
| **Prerequisites** | 2.1 |
| **Docs** | `LEARNING_PATH/02_Intermediate/02-counters.md` |
| **Labs** | Lab 2.2 — Batch count + reject counter |
| **Quiz** | Quiz 2.2 |
| **Success** | Do implement count-to-target with auto-reset option |

---

## Module 2.3 — Compare, math, move, and data handling

| | |
|--|--|
| **Objectives** | EQU NEQ LES GRT LEQ GEQ; ADD SUB MUL DIV; MOV MVM; CLR; limit checks; scale intro |
| **Electrician map** | Compare ≈ comparator relays / setpoints on a meter; MOV ≈ copying a setpoint pot value to a register |
| **Time** | 5–6 h |
| **Prerequisites** | 2.2 |
| **Docs** | `LEARNING_PATH/02_Intermediate/03-compare-math-move.md` |
| **Labs** | Lab 2.3 — High/low alarms from simulated level |
| **Quiz** | Quiz 2.3 |
| **Success** | Do build alarm band logic; Recall integer vs REAL pitfalls |

---

## Module 2.4 — Program control (JMP, LBL, JSR, RET, MCR)

| | |
|--|--|
| **Objectives** | Subroutines; when to JSR; MCR zones (and dangers); avoid spaghetti JMP |
| **Electrician map** | JSR ≈ “see drawing package B”; MCR ≈ master control relay zone de-energizing a section of coils |
| **Time** | 4–5 h |
| **Prerequisites** | 2.3 |
| **Docs** | `LEARNING_PATH/02_Intermediate/04-program-control.md` |
| **Labs** | Lab 2.4 — Split conveyor logic into Mode / Sequence / Faults routines |
| **Quiz** | Quiz 2.4 |
| **Success** | Do reorganize P1 into multi-routine program; Teach MCR caveats |

---

## Module 2.5 — Analog I/O and scaling

| | |
|--|--|
| **Objectives** | 4–20 mA / 0–10 V; module config; raw counts; SCP / CPT scaling; engineering units; clamp and fail detection |
| **Electrician map** | Analog module ≈ transducer input card; scaling ≈ calibrating a meter face to process units |
| **Time** | 6–8 h |
| **Prerequisites** | 2.3 |
| **Docs** | `LEARNING_PATH/02_Intermediate/05-analog-scaling.md` |
| **Labs** | Lab 2.5 — Scale tank level; high/low/rate alarms |
| **Tree** | `ON_THE_JOB/decision-trees/DT-04-analog-wrong-reading.md` |
| **Faults** | `ON_THE_JOB/fault-codes/FC-03-analog-symptoms.md` |
| **Quiz** | Quiz 2.5 |
| **Success** | Diagnose open 4–20 loop symptoms; Do scale and alarm correctly |

---

## Module 2.6 — Trending and data collection basics

| | |
|--|--|
| **Objectives** | Trend tags online; sample rates; capture intermittents; export/screenshot discipline for reports |
| **Electrician map** | Trend ≈ chart recorder / scope on a process signal |
| **Time** | 3–4 h |
| **Prerequisites** | 2.5 |
| **Docs** | `LEARNING_PATH/02_Intermediate/06-trending.md` |
| **Labs** | Lab 2.6 — Catch a simulated intermittent low-level spike |
| **Quiz** | Quiz 2.6 |
| **Success** | Do prove a fault with a trend artifact |

---

## Module 2.7 — Online editing and safe change discipline

| | |
|--|--|
| **Objectives** | Pending edits; finalize/accept; what you can/can’t change online; test edits; revision control habits |
| **Electrician map** | Online edit ≈ hot work on a live panel — possible, but procedure-driven |
| **Time** | 4–5 h |
| **Prerequisites** | 2.6, 1.7 |
| **Docs** | `LEARNING_PATH/02_Intermediate/07-online-editing.md` |
| **Labs** | Lab 2.7 — Add a permissive online; verify; document change |
| **Quiz** | Quiz 2.7 |
| **Success** | Do online edit without losing edits; Teach when to refuse online edit |

---

## Module 2.8 — Arrays, strings intro, and HMI-ready tag design

| | |
|--|--|
| **Objectives** | DINT/REAL arrays; basic string tags; aliasing for SCADA/HMI; naming standards; avoid program-scoped HMI tags |
| **Electrician map** | Array ≈ numbered terminal strip of like signals; HMI tags ≈ points you land on the SCADA “terminal block” |
| **Time** | 4–5 h |
| **Prerequisites** | 2.4 |
| **Docs** | `LEARNING_PATH/02_Intermediate/08-arrays-hmi-tags.md` |
| **Labs** | Lab 2.8 — Build `HMI_` / `CMD_` / `STS_` / `ALM_` tag sets for P1 upgrade |
| **Template** | `RESOURCES/templates/tag-naming-standard.md` |
| **Quiz** | Quiz 2.8 |
| **Success** | Do apply naming standard consistently; Teach scope choice for HMI |

---

## Module 2.9 — Intermediate troubleshooting scenarios

| | |
|--|--|
| **Objectives** | Intermittents, race conditions, one-shot mistakes, timer not timing, wrong engineering units |
| **Time** | 5–6 h |
| **Prerequisites** | 2.1–2.8 |
| **Docs** | `LEARNING_PATH/02_Intermediate/09-intermediate-troubleshoot.md` |
| **Labs** | Lab 2.9 — Fault kit (6 scenarios) |
| **Scenarios** | `ON_THE_JOB/scenarios/phase-02/` |
| **Quiz** | Quiz 2.9 |
| **Success** | Diagnose all 6 with written root cause + fix |

---

## Phase 2 Gate — Project P2

| | |
|--|--|
| **Project** | `PROJECTS/P2-tank-level-control/` |
| **Time** | 8–10 h |
| **Requirements** | Analog level, pump start/stop with seals, high/low alarms, runtime hours (RTO), HMI tags, trends for commission, multi-routine structure |
| **Success** | Rubric pass; cumulative quiz ≥ 85%; teach-back: “commission this tank for ops” |
| **Spaced review** | SR-2 + continue SR-1 cards |

---

# PHASE 3 — ADVANCED  
**Theme:** Multiple languages, reusable objects, multi-device systems.  
**Duration:** 55–70 hours  
**Gate project:** P3 Packaging line (multi-station, multi-language)  

---

## Module 3.1 — Function Block Diagram (FBD)

| | |
|--|--|
| **Objectives** | FBD sheets; wires vs pins; PIDE intro (conceptual); boolean FBD vs ladder preference |
| **Electrician map** | FBD ≈ control schematic with function blocks (like PID drawing symbols) instead of relay ladder |
| **Time** | 5–6 h |
| **Prerequisites** | Phase 2 gate |
| **Docs** | `LEARNING_PATH/03_Advanced/01-fbd.md` |
| **Labs** | Lab 3.1 — Simple logic in FBD; optional PIDE demo on simulated loop |
| **Quiz** | Quiz 3.1 |
| **Success** | Do implement interlock train in FBD; Recall when FBD beats ladder |

---

## Module 3.2 — Structured Text (ST)

| | |
|--|--|
| **Objectives** | ST syntax; IF/THEN/CASE; loops carefully; mixing ST routines with ladder; readability rules |
| **Electrician map** | ST ≈ writing a clear sequence procedure instead of drawing every contact |
| **Time** | 6–8 h |
| **Prerequisites** | 3.1 |
| **Docs** | `LEARNING_PATH/03_Advanced/02-structured-text.md` |
| **Labs** | Lab 3.2 — State machine for a 4-step sequence in ST |
| **Quiz** | Quiz 3.2 |
| **Success** | Do write maintainable ST sequence; Teach why loops can kill scan |

---

## Module 3.3 — Sequential Function Chart (SFC)

| | |
|--|--|
| **Objectives** | Steps, transitions, actions; simultaneous sequences; SFC for batch/machine states |
| **Electrician map** | SFC ≈ sequence of operations / drum switch with clear steps and jump conditions |
| **Time** | 5–6 h |
| **Prerequisites** | 3.2 |
| **Docs** | `LEARNING_PATH/03_Advanced/03-sfc.md` |
| **Labs** | Lab 3.3 — Bottle fill sequence as SFC calling ladder/ST actions |
| **Quiz** | Quiz 3.3 |
| **Success** | Do design SFC for a 6-step machine cycle |

---

## Module 3.4 — Choosing the right language

| | |
|--|--|
| **Objectives** | Decision matrix: discrete interlocks → Ladder; continuous → FBD; complex data/state → ST; modes/steps → SFC |
| **Time** | 2–3 h |
| **Prerequisites** | 3.1–3.3 |
| **Docs** | `LEARNING_PATH/03_Advanced/04-language-selection.md` |
| **Labs** | Lab 3.4 — Refactor one process into mixed languages intentionally |
| **Quiz** | Quiz 3.4 |
| **Success** | Teach language choice for 8 real plant examples |

---

## Module 3.5 — UDTs (User-Defined Types)

| | |
|--|--|
| **Objectives** | Design motor UDT, valve UDT, alarm UDT; nesting; versioning discipline |
| **Electrician map** | UDT ≈ standard terminal layout / device “faceplate” that repeats for every similar device |
| **Time** | 5–6 h |
| **Prerequisites** | 2.8 |
| **Docs** | `LEARNING_PATH/03_Advanced/05-udts.md` |
| **Labs** | Lab 3.5 — `UDT_Motor` with CMD/STS/ALM members |
| **Template** | `RESOURCES/templates/udt-motor.md` |
| **Quiz** | Quiz 3.5 |
| **Success** | Do design UDT used by ≥3 motors without copy-paste chaos |

---

## Module 3.6 — AOIs (Add-On Instructions)

| | |
|--|--|
| **Objectives** | AOI parameters (In/Out/InOut); local tags; change history; testing AOIs; when not to AOI |
| **Electrician map** | AOI ≈ standard control module / typical drawing you drop in repeatedly |
| **Time** | 6–8 h |
| **Prerequisites** | 3.5 |
| **Docs** | `LEARNING_PATH/03_Advanced/06-aois.md` |
| **Labs** | Lab 3.6 — Motor starter AOI with perm/fault/reset |
| **Quiz** | Quiz 3.6 |
| **Success** | Do ship tested AOI; Diagnose AOI instance vs definition confusion |

---

## Module 3.7 — Produced/Consumed tags and messaging (MSG)

| | |
|--|--|
| **Objectives** | Produce/consume setup; MSG types (CIP data table R/W); path syntax; timeouts; handshake patterns |
| **Electrician map** | Produced/consumed ≈ hardwired multi-conductor between panels that always updates; MSG ≈ calling another panel on the radio when you need data |
| **Time** | 6–8 h |
| **Prerequisites** | 1.5, 2.8 |
| **Docs** | `LEARNING_PATH/03_Advanced/07-messaging-produce-consume.md` |
| **Labs** | Lab 3.7A — Produce/consume heartbeat; Lab 3.7B — MSG read with fault handling |
| **Tree** | `ON_THE_JOB/decision-trees/DT-05-comms-failure.md` |
| **Faults** | `ON_THE_JOB/fault-codes/FC-04-msg-and-cip.md` |
| **Quiz** | Quiz 3.7 |
| **Success** | Diagnose path/connection issues; Do implement heartbeat + fault |

---

## Module 3.8 — Motion basics (relevant minimum)

| | |
|--|--|
| **Objectives** | Motion group concept; axis tags overview; MSO/MSF/MAJ/MAM awareness; when to call a motion specialist |
| **Electrician map** | Servo axis ≈ VFD+encoder on steroids with coordinated moves; motion instructions ≈ commanded moves not just Run/Stop |
| **Time** | 4–5 h |
| **Prerequisites** | Phase 2 |
| **Docs** | `LEARNING_PATH/03_Advanced/08-motion-basics.md` |
| **Labs** | Lab 3.8 — Virtual axis jog/home concept in Emulate or demo ACD |
| **Quiz** | Quiz 3.8 |
| **Success** | Recall safe motion power-up concepts; Do identify motion faults at overview level |

---

## Module 3.9 — Advanced fault isolation

| | |
|--|--|
| **Objectives** | Major/minor faults; fault handlers; GSV/SSV intro; task overlap; watchdog; I/O connection recovery |
| **Time** | 5–6 h |
| **Prerequisites** | 3.1–3.8 |
| **Docs** | `LEARNING_PATH/03_Advanced/09-advanced-faults.md` |
| **Labs** | Lab 3.9 — Trigger and clear controlled faults; read fault log |
| **Faults** | `ON_THE_JOB/fault-codes/FC-05-major-minor-faults.md` |
| **Quiz** | Quiz 3.9 |
| **Success** | Diagnose major fault type from code family; Do implement basic fault routine strategy |

---

## Phase 3 Gate — Project P3

| | |
|--|--|
| **Project** | `PROJECTS/P3-packaging-line/` |
| **Time** | 12–15 h |
| **Requirements** | 3 stations; Ladder+ST or SFC; motor AOI+UDT; at least one MSG or produce/consume; alarms; modes (Auto/Manual/Fault) |
| **Success** | Rubric; quiz ≥ 85%; teach-back architecture walkthrough |
| **Spaced review** | SR-3 |

---

# PHASE 4 — EXPERT / FIELD MASTERY  
**Theme:** Safety, multi-controller systems, commissioning, ownership under pressure.  
**Duration:** 45–60 hours  
**Gate projects:** P4 Multi-station cell + P5 Field mastery capstone  

---

## Module 4.1 — GuardLogix / safety basics for programmers

| | |
|--|--|
| **Objectives** | Safety vs standard tasks; safety I/O; safety tags rules; why “bypass in ladder” is not a safety system; SIL/PL awareness for electricians |
| **Electrician map** | Safety PLC ≈ Category-rated dual-channel e-stop/light curtain logic with diagnostics — not a yellow wire painted safe |
| **Time** | 6–8 h |
| **Prerequisites** | Phase 3 gate |
| **Docs** | `LEARNING_PATH/04_Expert_Field_Mastery/01-safety.md` |
| **Labs** | Lab 4.1 — Read safety signature concepts; dual-channel e-stop pattern (standard vs safety comparison) |
| **Tree** | `ON_THE_JOB/decision-trees/DT-06-safety-trip.md` |
| **Quiz** | Quiz 4.1 |
| **Success** | Teach what you must never do in standard logic for personnel safety |

---

## Module 4.2 — Task prioritization and performance

| | |
|--|--|
| **Objectives** | Continuous vs periodic vs event tasks; priorities; overlap; scan time; system overhead time; I/O RPI impact |
| **Electrician map** | Priority tasks ≈ what gets service first when the plant is “busy” — like which circuit you check first under load |
| **Time** | 5–6 h |
| **Prerequisites** | 1.3, 3.9 |
| **Docs** | `LEARNING_PATH/04_Expert_Field_Mastery/02-tasks-performance.md` |
| **Labs** | Lab 4.2 — Move fast logic to periodic task; measure scan; find overlap |
| **Quiz** | Quiz 4.2 |
| **Success** | Diagnose task overlap; Do set RPIs with intent |

---

## Module 4.3 — Multi-controller architectures

| | |
|--|--|
| **Objectives** | Cell controllers; supervisory Logix; produce/consume design at scale; clock sync awareness; ownership boundaries |
| **Time** | 5–6 h |
| **Prerequisites** | 3.7 |
| **Docs** | `LEARNING_PATH/04_Expert_Field_Mastery/03-multi-controller.md` |
| **Labs** | Lab 4.3 — Two-controller handshake design on paper + emulate if available |
| **Quiz** | Quiz 4.3 |
| **Success** | Do design interface contract between two controllers |

---

## Module 4.4 — Firmware, SD card, and disaster recovery

| | |
|--|--|
| **Objectives** | Firmware match; SD load/store; nonvolatile; upload discipline; disaster recovery kit |
| **Electrician map** | SD/image ≈ having the latest marked-up prints *and* a known-good spare brain |
| **Time** | 4–5 h |
| **Prerequisites** | 1.7 |
| **Docs** | `LEARNING_PATH/04_Expert_Field_Mastery/04-firmware-recovery.md` |
| **Labs** | Lab 4.4 — Document recovery procedure for your trainer/emulate setup |
| **Quiz** | Quiz 4.4 |
| **Success** | Teach full recovery from dead controller scenario |

---

## Module 4.5 — Commissioning and redline discipline

| | |
|--|--|
| **Objectives** | I/O checkout sheets; force log; functional tests; SAT/FAT mindset; as-built ACDs; password/role habits |
| **Time** | 5–6 h |
| **Prerequisites** | P3 |
| **Docs** | `LEARNING_PATH/04_Expert_Field_Mastery/05-commissioning.md` |
| **Labs** | Lab 4.5 — Full I/O checkout on P3 or trainer |
| **Template** | `RESOURCES/templates/io-checkout-sheet.md` |
| **Quiz** | Quiz 4.5 |
| **Success** | Do complete checkout pack an engineer would accept |

---

## Module 4.6 — Expert troubleshooting under time pressure

| | |
|--|--|
| **Objectives** | 15-minute triage; communicate to ops/maintenance; know when to escalate OEM; avoid “shotgun” online edits |
| **Time** | 6–8 h |
| **Prerequisites** | All prior |
| **Docs** | `LEARNING_PATH/04_Expert_Field_Mastery/06-field-triage.md` |
| **Labs** | Lab 4.6 — Timed drills (8 scenarios, 15 min each) |
| **Scenarios** | `ON_THE_JOB/scenarios/phase-04/` |
| **Quiz** | Quiz 4.6 |
| **Success** | Diagnose ≥6/8 under time; Teach triage checklist |

---

## Module 4.7 — Capstone integration topics

| | |
|--|--|
| **Objectives** | Tie safety awareness, performance, messaging, AOIs, and docs into one plant-ready package |
| **Time** | 3–4 h (plus projects) |
| **Docs** | `LEARNING_PATH/04_Expert_Field_Mastery/07-capstone-prep.md` |
| **Success** | Ready for P4/P5 without knowledge gaps on checklist |

---

## Phase 4 Gates — Projects P4 & P5

### P4 Multi-station cell

| | |
|--|--|
| **Path** | `PROJECTS/P4-multi-station-cell/` |
| **Time** | 12–15 h |
| **Requirements** | Modes, AOIs, UDTs, periodic task for fast I/O, alarms, simulate peer data, performance notes |
| **Success** | Rubric + peer/teach review |

### CAPSTONE — Inspect & divert station (build)

| | |
|--|--|
| **Path** | `PROJECTS/CAPSTONE-inspect-station/` |
| **Time** | 16–24 h |
| **Requirements** | Design + program + simulate small machine (conveyor + inspect + divert); modes; sequence; faults; HMI tag design; fault injection RCAs |
| **Success** | Rubric ≥ 90%; design docs complete; pass/fail paths work |

### P5 Field mastery (recovery drill)

| | |
|--|--|
| **Path** | `PROJECTS/P5-field-mastery-capstone/` |
| **Time** | 10–12 h |
| **Requirements** | Broken plant/capstone package: restore using trees; ≥5 RCAs; controlled online edit; handoff presentation |
| **Success** | Score ≥ 90%; expert checklist substantially complete |

### Retention systems

| | |
|--|--|
| **Path** | `LEARNING_PATH/Retention/` |
| **Includes** | Spaced schedule, flashcards (instructions/tags/tasks/faults), phase teach-backs, expert floor checklist |
| **Progressive projects** | `PROJECTS/mini/` M1–M4 + P1–P4 → CAPSTONE → P5 |

---

# SPACED REVIEW CHECKPOINTS (mandatory)

| ID | When | Content |
|----|------|---------|
| **SR-0** | End of week 1 | Scan, tags, XIC/XIO/OTE |
| **SR-1** | After P1 + 3 days, 1 week, 3 weeks | All Phase 1 |
| **SR-2** | After P2 + same intervals | Timers, analog, online edit |
| **SR-3** | After P3 | Languages, AOI/UDT, MSG |
| **SR-4** | After P5 | Mixed expert drills |
| **SR-X** | Monthly ongoing | Random 20-card pull from full bank |

Files: `RESOURCES/quizzes/spaced-review/`

---

# TIME BUDGET SUMMARY

| Phase | Study + Labs | Project | Reviews | Subtotal |
|-------|--------------|---------|---------|----------|
| 0 Orientation | 2–3 h | — | — | 2–3 h |
| 1 Foundation | 34–42 h | 6–8 h | 4–5 h | 44–55 h |
| 2 Intermediate | 39–49 h | 8–10 h | 5–6 h | 52–65 h |
| 3 Advanced | 44–56 h | 12–15 h | 5–6 h | 61–77 h |
| 4 Expert | 34–43 h | 22–27 h | 5–6 h | 61–76 h |
| **Total** | | | | **~220–275 h** |

*Shortest effective full-time: ~8–10 weeks. Part-time (10 h/week): ~5–6 months.*

---

# PHASE EXIT CHECKLISTS

## Leave Phase 1 only if you can:
- [ ] Build start/stop + interlocks from a schematic without notes  
- [ ] Alias all digital I/O correctly  
- [ ] Online monitor and remove forces  
- [ ] Separate field vs program faults with a written tree  
- [ ] Teach scan cycle and NC-stop wiring/programming trap  

## Leave Phase 2 only if you can:
- [ ] Pick TON/TOF/RTO correctly every time  
- [ ] Scale 4–20 mA to eng units and alarm  
- [ ] Online edit with documentation  
- [ ] Prove an intermittent with a trend  
- [ ] Structure multi-routine programs cleanly  

## Leave Phase 3 only if you can:
- [ ] Write ST state machine and SFC sequence  
- [ ] Ship a motor AOI + UDT  
- [ ] Implement produce/consume or MSG with fault handling  
- [ ] Explain language choice for mixed systems  
- [ ] Read major fault families  

## Leave Phase 4 (mastery) only if you can:
- [ ] Respect safety vs standard boundaries  
- [ ] Tune tasks/RPI without cargo-cult defaults  
- [ ] Commission with checkout sheets  
- [ ] Triage under 15 minutes  
- [ ] Recover a controller and defend your RCA  

---

# MODULE FILE INDEX

| Module | Primary doc |
|--------|-------------|
| 0.1 | `LEARNING_PATH/00_how-to-use-this-path.md` |
| 1.1–1.8 | `LEARNING_PATH/01_Foundation/` |
| 2.1–2.9 | `LEARNING_PATH/02_Intermediate/` |
| 3.1–3.9 | `LEARNING_PATH/03_Advanced/` |
| 4.1–4.7 | `LEARNING_PATH/04_Expert_Field_Mastery/` |
| Reference | `RESOURCES/reference/` |

Labs, quizzes, trees, and projects are linked per module above and live under their top-level folders.
