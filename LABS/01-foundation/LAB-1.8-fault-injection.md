# LAB 1.8 — Fault injection kit (Phase 1 skills exam)

## Goal
Diagnose five faults using 6 buckets + decision trees. No shotgun.

## Time
90–120 min

## Setup
Working 1.6B project online/emulate. Apply **one fault at a time**. Fix and restore before next.

---

## Faults

### Fault 1 — Wrong output alias
Point `Run_Cmd` at wrong DO bit (or remove alias).  
**Symptom cue:** Logic true, wrong/no output LED.

### Fault 2 — Inverted stop
Change Stop to wrong XIC/XIO relative to NC wiring.  
**Symptom cue:** Won’t run or won’t stop.

### Fault 3 — Force left on
Force `Stop_OK` or `Run_Cmd` inappropriately.  
**Symptom cue:** Ignores PB / ghost behavior.

### Fault 4 — Permissive never true
`Guard_OK` not aliased / always false.  
**Symptom cue:** Never starts; fault light may on.

### Fault 5 — Light only
Logic writes Run_Light but not Run_Cmd (or Run_Cmd not on rung).  
**Symptom cue:** Indications lie.

---

## Required RCA form (each fault)

```
Fault #:
Symptom:
Bucket(s):
Evidence (tags/LEDs/meter):
Tree used:
Root cause:
Fix:
Prevention for next tech:
Time to isolate (min):
```

---

## Pass criteria
- [ ] 5/5 correct root causes  
- [ ] Each uses a named tree or 6-bucket path  
- [ ] No permanent forces  
- [ ] Average isolate time noted  

## Scoring (optional)
10 pts each RCA; pass ≥ 40/50.

## After lab
Schedule **SR-1** first review. Begin **P1** project polish.
