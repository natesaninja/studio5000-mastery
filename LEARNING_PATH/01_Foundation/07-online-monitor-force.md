# Module 1.7 — Download, go online, monitor, force

| | |
|--|--|
| **Time** | 4–5 hours |
| **Prerequisites** | 1.6 |
| **Lab** | [`../../LABS/01-foundation/LAB-1.7-online-force.md`](../../../../LABS/01-foundation/LAB-1.7-online-force.md) |
| **Quiz** | [`../../RESOURCES/quizzes/01-foundation/Q07-online-force.md`](../../../../RESOURCES/quizzes/01-foundation/Q07-online-force.md) |
| **Tree** | [`DT-03-wont-download.md`](../../../../ON_THE_JOB/Symptom_Decision_Trees/DT-03-wont-download.md) |
| **Cheatsheet** | [`../../ON_THE_JOB/Quick_Cheatsheets/online-edit-checklist.md`](../../../../ON_THE_JOB/Quick_Cheatsheets/online-edit-checklist.md) (preview; full online **edit** is Phase 2) |

---

## Learning objectives

- Establish a communications path and **go online**  
- **Download** and **upload** with intent  
- Monitor tags and rung animation  
- Apply and **remove forces** with LOTO mindset  
- Know when you must **refuse** to force or download  

---

## 1. Concept — electrician language

| Field action | Studio action |
|--------------|---------------|
| Install a new set of prints and rewire the control section | **Download** (PC → controller) |
| Copy what’s actually in the panel back to paper/laptop | **Upload** (controller → PC) |
| Watch a relay pull in | **Online monitor** |
| Jumper a contact or tape a limit | **Force** |
| Leave a jumper in the panel | **Left-on force** — incident |

### Download is not casual

On a packaging line, downloading the wrong ACD can:

- Stop the wrong machine  
- Clear states  
- Change I/O config  
- Create unsafe assumptions  

**Identity first:** controller name, path, IP/node, physical panel label.

### Forces are not maintenance mode

Forces override the normal relationship between field/logic and the bit. Treat every force like a **red jumper** with your name on a tag hanging from the wire.

---

## 2. Studio 5000 walkthrough

### A. Communications path

1. Open **Who Active** / communications browser (FactoryTalk Linx / RSLinx depending on install).  
2. Browse to your Emulate instance or Ethernet driver → controller.  
3. Confirm the device identity matches `PKG_CELL01` (or your name).  

**Emulate:** start Emulate chassis/controller first; path often appears under a virtual AB_ETH or emulate driver.

### B. Download

1. With project open: **Communications → Download** (or toolbar).  
2. Read prompts carefully (download project, mode changes).  
3. If asked to put in remote run / leave in program — for lab, follow a safe choice for Emulate; on real hardware use site procedure.  
4. Wait for completion.  

### C. Go online

1. **Communications → Go Online**.  
2. Rungs show power-flow animation when conditions true (visualization aid — not a scope).  
3. Open **Controller Tags → Monitor Tags**.  
4. Watch `INF01_Start_PB`, `INF01_MTR01_Run_Cmd`, permissives.  

### D. Manual I/O test (Emulate)

- Toggle emulate input bits or use I/O force/toggle features available in your emulate version.  
- On hardware: press real Start only if safe / authorized.

### E. Force lifecycle (lab)

1. Open force view / tag force options for `INF01_Start_PB` or a test bit.  
2. **Log on paper:** tag, value, reason, time, your name.  
3. Force Start true briefly → observe Run if permissives OK.  
4. **Remove force.**  
5. Verify Start only works from real input again.  
6. Confirm **I/O Forces** / tag forces tables empty.  

### F. Upload awareness

**Upload** pulls controller contents to the PC project.  
Risk: overwrite your offline edits you thought you still had.  
Habit: save a dated ACD copy before upload on real jobs.

### G. Save online project

After successful test: save ACD as `M17_Online_Verified.ACD`.

---

## 3. Side-by-side — jumper vs force vs download

| Action | Hardwired equivalent | Risk |
|--------|----------------------|------|
| Force input ON | Jumper across PB terminals | False start path |
| Force output ON | Jumper coil circuit | Unexpected motion |
| Download | Rebuild control wiring from new prints in one shot | Wrong panel / wrong revision |
| Online monitor | Watching coil and contact with meter + eyes | Misreading animation as field truth |

---

## 4. Common mistakes

| Mistake | Appearance | Fix |
|---------|------------|-----|
| Download to neighbor controller | Wrong machine changes | Path + name + physical label check |
| Upload without saving offline work | Lost PC edits | Save copy first |
| Force left on overnight | “Intermittent” ghosts | Force table audit every job |
| Believing green rung = voltage at starter | Tag true, field dead still possible | Meter + DO LED |
| No authorization on live line | Policy violation / injury risk | Stop; get permit |
| Can’t see controller in browser | Comms tree | DT-03 |

---

## 5. Mini-lab

[`LAB-1.7-online-force.md`](../../../../LABS/01-foundation/LAB-1.7-online-force.md)

---

## 6. Troubleshooting tree

[`DT-03-wont-download.md`](../../../../ON_THE_JOB/Symptom_Decision_Trees/DT-03-wont-download.md)

```
Can't online / download
  → Device in browser?
  → Correct identity?
  → IP/subnet/cable/driver?
  → Firmware/project mismatch messages?
  → Mode / keyswitch / exclusive access?
```

---

## 7. Quiz

[`Q07-online-force.md`](../../../../RESOURCES/quizzes/01-foundation/Q07-online-force.md)

---

## 8. Spaced repetition

| When | Re-visit |
|------|----------|
| **+1 day** | Recite force lifecycle from memory. Download + online + clear forces blind. |
| **+1 week** | Practice DT-03 on a broken path (unplug cable / wrong IP in lab). |
| **+1 month** | Shadow a real download window; write your site’s authorization steps. |

### Teach-back

> Explain forces to an apprentice who thinks they’re a normal tool to leave on.

### Exit checklist

- [ ] Successful online session  
- [ ] Force applied and **fully removed** with log  
- [ ] Quiz ≥ 80%  

## Next

→ [1.8 First troubleshooting](08-first-troubleshoot.md)
