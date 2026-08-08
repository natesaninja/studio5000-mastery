# DT-INT — Intermittent faults / random stops

**Symptom:** Works most of the time; random dropouts, “sometimes won’t start,” flicker, shift-dependent ghosts.  
**Electrician parallel:** Intermittent limit switch or loose wire — prove it before replacing three photoeyes.

```
START: Intermittent / random behavior
│
├─ SAFE to run and capture?
│
├─ Force tables — left-on forces or shift “bypasses”?
│  YES → remove/log; often “cures” ghosts
│  NO ↓
│
├─ Make symptom CRISP
│  Which device? Which mode? How often? After heat/vibration/power?
│
├─ TREND first (do not shotgun parts)
│  Tags: suspect sensor/permissive + command + fault + feedback
│  Sample rate fast enough for a short glitch
│  Run until event → save artifact
│
├─ Read the trend
│  Permissive drops briefly → field bounce, loose wire, true open, noise
│  Command drops with logic → find what dropped it (Cross-Ref)
│  Command stays, FB drops → starter/VFD/field
│  Everything freezes → lost online / controller / network blip
│
├─ Field prove while trending
│  Wiggle connectors, PE mount, door cables
│  Clean lens / realign
│  Meter for dropouts if safe
│
├─ Logic only after evidence
│  Debounce (TON) if bounce proven and approved
│  Fix inverted/edge issues if program bug proven
│  Do NOT force permissive true as production fix
│
└─ If unreproducible in one visit
   Leave trend setup notes for next occurrence
   Check history: power quality, network, recent edits
```

## Related
- [Finding_the_Problem_Area.md](../Finding_the_Problem_Area.md) § Trends  
- [DT-IN](DT-IN-inputs-not-reading.md) · [DT-01](DT-01-wont-start.md)  
