# DT-IN — Inputs not reading

**Symptom:** Pushbutton, prox, photoeye, OL aux, or pressure switch not seen by logic/HMI.  
**Electrician parallel:** Control wire not making it to the coil circuit — now “to the input image.”

```
START: Input not reading / always wrong
│
├─ SAFE to test device?
│
├─ Identify alias TAG and physical device
│
├─ ONLINE: What is the TAG value vs what you expect?
│
├─ FORCES on this input or alias?
│  YES → remove/log; retest real device
│  NO ↓
│
├─ Module INPUT LED (or channel status) while device actuated?
│  │
│  LED follows device, TAG does not
│    → Alias wrong bit/slot
│    → Connection not updating (FC-06)
│    → Looking at wrong tag name
│    → Online to wrong controller
│
│  LED does NOT follow device
│    → Field side until module
│       ├─ Device power / sensing LED on device?
│       ├─ Meter at module terminal while actuate
│       ├─ Common / return / wrong TB
│       ├─ Sinking vs sourcing mismatch
│       ├─ Broken wire / crushed cable
│       └─ Wrong channel landed
│
│  NO LEDs at all on whole module / all inputs dead
│    → Field 24 V supply (DT-1.2)
│    → Module power / fault / inhibited
│    → Entire remote rack connection
│
├─ Device is NC in field (stop, some guards)
│  → Healthy may be TAG = 1; pressed/open = 0
│  → “Not reading” may be inverted expectation (DT-1.6)
│
└─ Intermittent only
   → Trend tag + if possible parallel observation
   → Loose terminal, marginal sensor, noise, RPI/scan (advanced)
```

## Packaging photoeye example

| Observation | Action |
|-------------|--------|
| PE light on, DI LED on, tag 0 | Alias/force/connection |
| PE light on, DI LED off | Wire/power/type mismatch |
| Flickers in trend | Debounce, mount, clean lens, shield |

## Analog note

Wrong engineering units with good raw → scale, not this tree.  
Raw dead → still use field power + loop checks ([DT-04](DT-04-analog-wrong-reading.md)).
