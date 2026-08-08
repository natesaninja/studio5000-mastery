# Expert-level checklist — industrial electrician on Logix

**Definition of “expert” here:** You can work **unsupervised on a plant floor** with Studio 5000 / ControlLogix / CompactLogix — safely, systematically, and without creating new faults.

Check an item only when you have **done it live** (or full Emulate drill with timer) and could teach it tomorrow.

---

## A. Safety & professionalism

- [ ] Refuse unsafe forces / safety bypasses under pressure; explain why  
- [ ] Follow LOTO and site authorization for online work  
- [ ] Distinguish process interlocks from **personnel safety** systems  
- [ ] Communicate 30-second honest status updates to ops  
- [ ] Know when to escalate (motion energy, safety dual-channel, no known-good ACD)  

## B. Controller & project literacy

- [ ] Create/open projects; know Task → Program → Routine  
- [ ] Match controller type/firmware expectations enough to download safely  
- [ ] Navigate I/O Configuration and interpret module connection health  
- [ ] Controller vs program tags; alias vs base  
- [ ] Find logic with cross-reference in under 2 minutes for a named motor  

## C. Discrete control

- [ ] Build 3-wire start/stop + interlocks from a schematic without notes  
- [ ] Apply NC stop convention correctly every time  
- [ ] Seal-in vs OTL: choose and defend  
- [ ] Structure multi-routine programs with JSR  
- [ ] Implement fault latch + reset paths that maintenance understands  

## D. Timers, counts, analog

- [ ] Pick TON/TOF/RTO correctly under time pressure  
- [ ] Count with ONS on field sensors  
- [ ] Scale 4–20 mA (or 0–10 V) to eng units; document raw/eng  
- [ ] Diagnose open loop / wrong scale / wrong units  
- [ ] Prove intermittents with a **trend artifact**  

## E. Online work

- [ ] Establish path; verify **identity** before download  
- [ ] Download/upload with revision discipline  
- [ ] Force lifecycle: log → use → remove → audit empty  
- [ ] Online edit small changes with test plan and finalize  
- [ ] Leave no test rungs, no orphan forces  

## F. Languages & reuse (working fluency)

- [ ] Read ladder under pressure as primary language  
- [ ] Read ST state machine and explain transitions  
- [ ] Explain when FBD/SFC help  
- [ ] Use or maintain motor **UDT + AOI** instances  
- [ ] Choose language without dogma; follow site standard  

## G. Communications

- [ ] Diagnose basic Ethernet path issues (link, IP, wrong device)  
- [ ] Interpret MSG .DN/.ER at field level  
- [ ] Implement or verify heartbeat + **safe defaults on loss**  
- [ ] Explain produce/consume vs MSG  
- [ ] Never leave dual ownership of one actuator  

## H. Faults & recovery

- [ ] Major vs minor; record code before clear  
- [ ] Use DT-MAJ / DT-OUT / DT-IN / DT-SCAN / DT-COM from memory  
- [ ] Separate field vs image vs logic in under 15 minutes on common faults  
- [ ] Recover from power-cycle fallout (remote I/O, drives not ready)  
- [ ] Document RCA another electrician can act on  

## I. Commissioning & ownership

- [ ] Complete I/O checkout sheet with force log  
- [ ] As-built ACD + redline habit  
- [ ] Interface contract between two controllers on paper  
- [ ] Build recovery kit list for your cell  
- [ ] Train an apprentice on one motor circuit end-to-end  

## J. Capstone proof

- [ ] Designed and programmed a multi-step machine cell (Capstone)  
- [ ] Simulated/tested with written test plan  
- [ ] Injected and cleared multiple fault classes  
- [ ] Operator interface considerations documented (modes, alarms, resets)  
- [ ] Phase 4 teach-back scored ≥ 4  

---

## Unsupervised “day one on nights” scenarios (must pass mentally)

You get the call. No engineer on site. Can you handle?

| Call | You can… |
|------|----------|
| “Won’t start” | DT-01 chain without guessing |
| “Ignores stop” | Force table + stop convention in first 3 minutes |
| “After power bump” | Power domains + connections + latched faults |
| “VFD Hand OK Auto dead” | Split PLC command vs drive remote |
| “Safety won’t reset” | Refuse force; correct reset path / escalate |
| “HMI red / can’t online” | DT-COM without random download |
| “Major fault” | Record code → fix cause → clear → verify |

If any row is “I’d freeze,” you are not done — drill that tree + flashcards.

---

## Sign-off (optional mentor)

| Role | Name | Date | Notes |
|------|------|------|-------|
| Learner | | | |
| Mentor / lead | | | |

**Expert is not a certificate.** It is a pattern of safe, fast, documented isolation under pressure.
