# DT-OUT — Outputs not turning on

**Symptom:** Motor, valve, light, or VFD run command does not energize the field device.  
**Electrician parallel:** Coil never gets control power — or you think it doesn’t.

```
START: Output not on / load not energizing
│
├─ SAFE? Motion, stored energy, LOTO as required
│
├─ Identify the TAG that should command the output
│  (Run_Cmd, Open_Cmd, etc.) — use HMI faceplate name → tag map if needed
│
├─ ONLINE: Is the command TAG TRUE when you request the action?
│  │
│  NO ──► Logic / mode / permissives path (not the starter yet)
│  │      ├─ Forces holding a permissive false or stop true?
│  │      ├─ Stop_OK / EStop_OK / Guard / OL / interlocks?
│  │      ├─ Auto vs Manual / HMI command not writing?
│  │      ├─ Fault latched?
│  │      ├─ OTE owned elsewhere / routine not scanned? (DT-SCAN)
│  │      └─ Cross-ref: is there an OTE at all?
│  │
│  YES ─► Command is true. Chase image → module → wire → load
│         │
│         ├─ Forces on output tag forcing OFF?
│         │
│         ├─ Alias points to correct DO bit / module?
│         │    Wrong bit → neighbor device or nothing
│         │
│         ├─ Module connection OK? Fault LED? Inhibited?
│         │    NO → FC-02 / FC-06 / power / network for remote
│         │
│         ├─ DO channel LED ON (or status bit ON)?
│         │    NO → module output supply, blown group fuse,
│         │         module fault, wrong config
│         │    YES ↓
│         │
│         ├─ Meter voltage at MODULE terminal (safe method)
│         │    NO voltage → module/supply issue
│         │    YES ↓
│         │
│         ├─ Meter at LOAD (starter A1/A2, valve, relay)
│         │    NO → wire, TB, intermediate interlock contact,
│         │         HOA not in AUTO, safety contactor open downstream
│         │    YES ↓
│         │
│         └─ Load has power but no action
│              → starter coil open, mechanical bind, VFD not in remote,
│                drive fault, 480 V missing, overload kicked
```

## Special case: VFD via PLC

| Check | Meaning |
|-------|---------|
| DO “Run” true, drive local/hand | Drive ignores remote |
| Networked command, drive not Ready | Drive fault / not enabled / comms loss |
| Speed ref 0 | Runs at zero — looks “off” |
| Safety torque off / safe disable | Drive correctly refuses |

See [electrician-field-pack — VFD](../scenarios/electrician-field-pack.md).

## Special case: Safety contactor downstream of PLC DO

PLC output true and LED on, but starter dead because **safety contactor** dropped.  
That’s correct safety behavior — fix safety string, don’t force DO harder.

## Quick pass (2 minutes)

1. Tag true?  
2. Force table?  
3. DO LED?  
4. Voltage at load?  
5. HOA / safety contactor / VFD mode?
