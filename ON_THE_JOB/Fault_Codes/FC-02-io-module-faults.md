# FC-02 — I/O module fault symptoms

| Symptom | Likely causes |
|---------|----------------|
| Module fault LED | Wrong catalog/slot, electronic keying, internal fault, missing field power (some modules) |
| Connection fault on remote I/O | Adapter power, cable, IP, RPI, switch ([FC-06](FC-06-connection-faults.md)) |
| Yellow / inhibit in I/O tree | Module inhibited in project or faulted connection |
| Only some points dead | Field fuse, common, partial wiring, single channel |
| All inputs zero | Field 24 V loss, wrong supply reference |
| Output tag on, no LED | Module power, output supply, module fault, wrong alias |
| Fault after module swap | Keying exact match, wrong catalog, SD/firmware side issues rare |
| Whole group of outputs dead | Group fuse, output power feed, safety contactor feeding DO commons |

## Action order
1. Visual LEDs (module + adapter)  
2. Online module properties / connection text  
3. Field power meter (DI/DO supplies)  
4. Config vs physical catalog + slot  
5. Bit/alias verification  
6. Network path if remote  

## Trees
- [DT-IN](../Symptom_Decision_Trees/DT-IN-inputs-not-reading.md)  
- [DT-OUT](../Symptom_Decision_Trees/DT-OUT-outputs-not-on.md)  
- [DT-COM](../Symptom_Decision_Trees/DT-COM-communication-loss.md)  
