# DT-05 — Produced/consumed or MSG failure

```
│
├─ Heartbeat / connection status healthy?
│  NO → network, IP, produce/consume connection, RPI, inhibit
│  YES but data stale → wrong tags produced, size mismatch, not mapping
│
├─ MSG: look at EN/DN/ER and error code
│  ER → path string, CIP service, tag rights, size, target offline
│  No EN → trigger logic never fires
│  EN stuck → re-trigger conditions wrong
│
├─ Defaults on fault implemented?
│  NO → add CommFault safe state (design issue, not just repair)
│
└─ Duplicate IPs / storms / overloaded switch?
   → infrastructure
```
