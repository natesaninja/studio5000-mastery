# FC-04 — MSG / CIP communication issues

| Observation | Suspect |
|-------------|---------|
| MSG.ER latches | Path, tag name, type/size, privileges, target mode |
| MSG never DN | Trigger pattern, path incomplete, network loss |
| Produce/consume not connecting | Connection definition, RPI, network, matching data types/size |
| Works then fails after download | Path/IP change, inhibited module, firewall/ACL (IT) |
| Intermittent | overloaded network, duplex, bad cable, CPU loading |

## Heartbeat rule
If the peer can die and your machine keeps acting on last data, you have a design bug.
