# DT-COM — Communication loss

**Symptom:** Can’t go online; HMI red; remote I/O ghosted; drive “comm loss”; MSG fails; produce/consume stale.  
**Electrician parallel:** Inter-panel cable open — but the “cable” may be Ethernet, IP, or a CIP connection.

```
START: Comms problem
│
├─ SCOPE IT
│  A) Laptop can't see controller
│  B) Controller can't see remote I/O / drive / peer PLC
│  C) HMI can't see controller (laptop might still work)
│  D) MSG / produce-consume data stale but I/O local OK
│
├─ A) Laptop ↔ controller (engineering path)
│  ├─ Controller powered? LEDs? (DT-1.2)
│  ├─ Cable / USB / Ethernet link lights?
│  ├─ Correct driver / Who Active path?
│  ├─ IP/subnet of laptop vs controller?
│  ├─ Duplicate IP?
│  ├─ Wrong VLAN / managed switch port down?
│  └─ Emulate: virtual chassis running?
│  → Also DT-03
│
├─ B) Controller ↔ remote device (I/O, drive, adapter)
│  ├─ Device powered?
│  ├─ Link lights both ends?
│  ├─ Online: module/connection status faulted?
│  ├─ IP of device matches project?
│  ├─ Electronic keying / catalog mismatch after swap?
│  ├─ Switch port disabled / speed duplex issues?
│  └─ Recent IT change / storm / broadcast?
│  → FC-06, FC-02
│
├─ C) HMI ↔ controller
│  ├─ Laptop online works, HMI doesn’t → HMI path/topic/shortcut
│  ├─ Neither works → controller path/network
│  └─ HMI points at wrong controller after project copy
│
├─ D) Peer data (MSG / produce-consume)
│  ├─ Heartbeat updating?
│  ├─ MSG .ER / error codes (FC-04)
│  ├─ Produced connection status
│  ├─ Path string typo after download
│  └─ Defaults on fault implemented? (design)
│  → DT-05
│
└─ STABILIZE
   On comms loss, machine should go to SAFE DEFAULTS
   If it runs on stale data → design bug; don’t ignore
```

## Power-cycle comms pattern

Remote racks and drives often come up **slower** than the CPU.  
Symptoms: brief faults at power-up, or PLC runs before VFD ready.

Checks:

- Connection re-establishes without download?  
- Drive Ready before Run command?  
- Need power-up delay permissive in logic?  

## Identity rule

Never download to the first controller that appears.  
Match **panel label + name + IP/path**.
