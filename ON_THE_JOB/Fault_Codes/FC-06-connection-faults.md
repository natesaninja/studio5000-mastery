# FC-06 — Connection faults (I/O and devices)

**Connection** = scheduled CIP relationship between controller and a module/device — not the same as one discrete wire.

---

## What you’ll see

| UI / LED | Meaning |
|----------|---------|
| Connection faulted / timed out | Updates failed |
| Inhibited | Intentionally not connecting |
| Connecting… | Trying; may hang if path bad |
| OK / Running | Connection healthy |
| Module fault LED + connection error | Hardware or config vs physical |

---

## Common causes (floor order)

1. **Device unpowered** (remote rack, Point I/O adapter, drive)  
2. **Ethernet link down** (cable, port, switch)  
3. **Wrong IP / path** after device replace  
4. **Duplicate IP**  
5. **Catalog / keying mismatch** after module swap  
6. **Slot mismatch** in project vs chassis  
7. **Inhibit** left on in properties  
8. **Network change** (VLAN, firewall, storm)  
9. **Over-subscribed RPI** / overloaded network (less common first guess)  
10. **Firmware** incompatibilities  

---

## Local vs remote

| Local chassis module | Remote / networked |
|----------------------|--------------------|
| Backplane, keying, field power to module | All local causes **plus** network & adapter power |
| Wrong slot after maintenance | IP and switch path critical |

---

## Diagnostic steps

1. Visual LEDs on controller, module, adapter, switch  
2. Online module **Connection** status text  
3. Browse to device in Linx/Who Active if applicable  
4. Compare project IP/slot/catalog to sticker  
5. Temporary known-good cable / port  
6. Check inhibits  
7. Escalate if multi-device outage (switch/core)  

---

## After power cycle

Connections often re-establish automatically.  
If **one** remote never returns: that drop’s power/IP/cable.  
If **all** remotes fail: uplink, switch, controller Ethernet module.

---

## Related trees

- [DT-COM](../Symptom_Decision_Trees/DT-COM-communication-loss.md)  
- [DT-05](../Symptom_Decision_Trees/DT-05-comms-failure.md)  
- [FC-02](FC-02-io-module-faults.md)  
