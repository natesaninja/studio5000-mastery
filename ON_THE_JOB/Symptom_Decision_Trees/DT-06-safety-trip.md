# DT-06 — Safety trip / won’t reset

```
│
├─ Is this a SAFETY function (e-stop, curtain, gate) or process interlock?
│  Process → standard troubleshooting trees
│  Safety ↓
│
├─ Make machine safe. Do not force safety inputs as a “fix” without procedure.
│
├─ Which device channel faulted? Dual channel mismatch?
│  → device, wiring, safety relay/module diagnostics
│
├─ Safety reset conditions met (no request, doors closed, reset PB type)?
│  NO → follow OEM reset sequence
│  YES ↓
│
├─ Safety controller / module status / signature issues after a change?
│  → controls engineer / validated change process
│
└─ Standard PLC not seeing Safety_OK permissive?
   → interface mapping only AFTER safety side is healthy
```

**Rule:** If you are not qualified on that safety system, stabilize and escalate.
