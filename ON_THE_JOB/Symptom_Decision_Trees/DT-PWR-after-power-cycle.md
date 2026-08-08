# DT-PWR — After power cycle / weekend outage

**Symptom:** Ran fine before power loss; wrong state, won’t run, remote I/O missing, drives not starting, latched faults.  
**Electrician parallel:** After a plant outage, you don’t assume every bucket and starter came back healthy — same for PLC, 24 V, network, and drives.

```
START: Problem only (or mainly) after power cycle
│
├─ SAFE? Unexpected motion on power-up possible?
│
├─ Controller
│  ├─ Major fault? → DT-MAJ (record code BEFORE clear)
│  ├─ Mode RUN?
│  └─ Wrong project never downloaded — still check identity
│
├─ Power domains (all three)
│  ├─ Chassis / CPU power OK?
│  ├─ Field 24 V OK? (CPU green + dead sensors = classic)
│  └─ Motor/drive power OK?
│
├─ I/O connections re-established?
│  ├─ Local OK, remote dead → adapter power, switch, cable (DT-COM / FC-06)
│  ├─ Module inhibited or faulted after power-up?
│  └─ Wait vs permanent fault — some racks boot slow
│
├─ Application state
│  ├─ Latched faults needing Reset?
│  ├─ Mode bits defaulted to Off / wrong mode?
│  ├─ OTL / retentive data in bad state?
│  └─ First-scan / initialization missing?
│
├─ Drives / VFDs
│  ├─ Drive Ready before PLC issues Run?
│  ├─ Drive fault log from brownout?
│  ├─ Control source still Remote/Network?
│  └─ PLC commanding while drive still booting → nuisance faults
│
├─ HMI / peers
│  ├─ HMI pointing at correct controller?
│  ├─ Heartbeat / produce-consume stale until peer up?
│  └─ Safe defaults on comms loss engaged?
│
└─ Document power-up order if this repeats
   (e.g., network → remote racks → drives Ready → enable Auto)
```

## Quick checklist (print)

- [ ] Fault code recorded if any  
- [ ] Field 24 V  
- [ ] Remote connections  
- [ ] Fault reset / mode  
- [ ] Drive Ready vs Run_Cmd  
- [ ] Force table empty  
- [ ] Ops tried Manual then Auto  

## Related
- [DT-MAJ](DT-MAJ-major-fault-recovery.md) · [DT-COM](DT-COM-communication-loss.md) · [DT-1.2](DT-1.2-hardware-power.md)  
