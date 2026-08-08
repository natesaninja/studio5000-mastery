# 2.9 — Intermediate troubleshooting scenarios

## Learning objectives

- Diagnose timer/counter edge mistakes
- Catch bad scaling and unit errors
- Find race conditions and missing one-shots
- Write RCA that another electrician can act on

**Time:** 5–6 h | **Prereq:** 2.1–2.8  
**Lab:** `../../LABS/02-intermediate/LAB-2.9-fault-kit.md`  
**Scenarios:** `../../ON_THE_JOB/Scenarios/phase-02/`

---

## Fault kit themes

1. TON used where RTO needed  
2. Counter free-running without ONS  
3. High alarm setpoint in wrong units  
4. Online edit not finalized  
5. Seal-in dropped by 1-scan glitch on permissive  
6. Analog raw correct, SCP inverted min/max  

---

## Teach-back

> “Teach a 10-minute troubleshooting drill for ‘pump won’t stay running.’”

## Next

→ Project **P2** `../../PROJECTS/P2-tank-level-control/`
