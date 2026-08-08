# FC-03 — Analog symptoms

| Reading | Suspect |
|---------|---------|
| Raw ~0 or very low on 4–20 | Open loop, no loop power, broken wire |
| Raw pegged high | Short, wrong range, miswire |
| Raw OK, EU wrong | Scale, units, inverted min/max |
| Wander/noise | Shield, ground, long run, sample |
| Intermittent spikes | loose terminal, failing XMTR, electrical noise |
| Channel underrange/overrange flags | config vs signal type mismatch |

## Meter first
Safe series mA measurement beats arguing with the HMI.
