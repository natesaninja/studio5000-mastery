# DT-1.2 — Hardware / power / LED first pass

```
START: Controller or I/O looks “dead” or wrong LEDs
│
├─ SAFE to approach? (stored energy, motion)
│  NO → Make safe / LOTO
│  YES ↓
│
├─ ANY power LEDs on controller / chassis PSU?
│  NO → Chassis/CPU supply, fuses, plugs, outlet, PSU failure
│  YES ↓
│
├─ Controller FAULT indicator?
│  YES → Go online when possible → major fault log (Phase 3 deep)
│        Foundation: note fault, don’t clear blindly
│  NO ↓
│
├─ Controller appears RUN/OK but ALL field inputs dead?
│  YES → Meter FIELD 24 V at module commons / sensor supply
│        (CPU power ≠ field power)
│  NO ↓
│
├─ Single module fault LED?
│  YES → FC-02: catalog/slot/keying/field power to that module
│  NO ↓
│
├─ Ethernet link dark (and you need online)?
│  YES → cable, switch, port, IP — then DT-03
│  NO ↓
│
└─ Partial I/O → wiring, fuse per channel group, wrong slot after maintenance
```

## Packaging example
Case packer “blind” after weekend: CPU green, no sensors → found tripped 24 VDC supply breaker feeding DI commons only.
