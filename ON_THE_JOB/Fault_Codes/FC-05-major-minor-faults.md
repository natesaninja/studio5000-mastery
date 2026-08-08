# FC-05 — Major vs minor faults

| Class | Typical effect | Your job |
|-------|----------------|----------|
| **Major** | May halt user program; outputs use fault action config | Record code → fix cause → clear → verify ([DT-MAJ](../Symptom_Decision_Trees/DT-MAJ-major-fault-recovery.md)) |
| **Minor** | Warning; program often continues | Log; determine process impact; schedule fix |

---

## Major — electrician mindset

| Do | Don’t |
|----|-------|
| Write Type/Code/Description | Clear blindly |
| Ask what changed | Cycle power as first “fix” repeatedly |
| Check I/O tree if I/O-related | Download unproven ACD without identity check |
| Verify RUN after clear | Leave forces from testing |

---

## Minor — when to care now

- Flood of minors correlating with bad behavior  
- I/O connection minors that precede a major  
- Motion warnings before a crash  

Otherwise: document and continue triage if process is the priority.

---

## Where information lives

- Online fault tabs / controller properties  
- Sometimes HMI “PLC Fault” bits via GSV (verify live)  
- LED FAULT on controller ([FC-01](FC-01-controller-leds.md))  

---

## Families

See [FC-07](FC-07-fault-type-families.md) for program / I/O / watchdog / motion / power-up guidance.

---

## GSV habit (advanced)

Well-built projects surface mode and fault info to HMI.  
Treat HMI as a hint; confirm in Studio when the line is down.
