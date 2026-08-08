# DT-04 — Analog reading wrong

```
│
├─ Is RAW wrong or only EU (scaled) wrong?
│  EU only → scale min/max, units, CPT/SCP formula
│  RAW wrong ↓
│
├─ Loop power present? 4–20 with meter in series if safe?
│  NO → supply, open wire, blown fuse, bad XMTR
│  YES ↓
│
├─ Correct channel / wiring (diff vs single-ended) / range config?
│  NO → fix config / landing
│  YES ↓
│
├─ Noise / shield / ground loops?
│  → field practices
│
└─ Module fault / calibration / overrange flags?
   → FC-03
```
