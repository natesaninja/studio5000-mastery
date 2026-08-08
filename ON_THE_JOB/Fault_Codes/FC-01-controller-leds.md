# FC-01 — Controller & status LED quick reference

> Exact blink codes vary by catalog and firmware. Use as a **field first-pass**, then the official manual.

| Observation | First checks |
|-------------|--------------|
| No lights at all | Chassis/controller power, PSU, cord, fuses ([DT-1.2](../Symptom_Decision_Trees/DT-1.2-hardware-power.md)) |
| Power good, not running | Keyswitch, major fault, mode, empty/corrupt project |
| Fault LED | Online → major fault log ([DT-MAJ](../Symptom_Decision_Trees/DT-MAJ-major-fault-recovery.md), [FC-05](FC-05-major-minor-faults.md)) |
| OK / RUN as expected | Leave CPU; chase I/O, logic, field, network |
| Force indicator / status | Open **force tables** immediately — clear leftovers |
| Battery / energy storage warnings | Maintenance schedule; prepare for memory loss risk on some platforms |
| Ethernet link dark | Cable, switch, port, IP — [DT-COM](../Symptom_Decision_Trees/DT-COM-communication-loss.md) |
| Ethernet activity only on wrong port | Wrong port / wrong switch |

## Electrician note
A “good” CPU light means the **brain is alive**, not that the motor should run.

## Pair with
- Module LEDs → [FC-02](FC-02-io-module-faults.md)  
- Connection status → [FC-06](FC-06-connection-faults.md)  
