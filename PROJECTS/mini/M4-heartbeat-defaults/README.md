# Mini-M4 — Heartbeat + safe defaults

**Time:** 3–5 h | **Phase:** 4 | **Builds on:** P3 comms concepts  
**Reuse later:** Capstone peer interface, P4  

---

## Machine story
Upstream cell must be alive or this conveyor must **not** run on stale “OK” data.

## Requirements
- [ ] Simulated peer heartbeat bit toggling (or second controller if available)  
- [ ] Consumer detects stale heartbeat (TON timeout)  
- [ ] `CommFault` latches or holds until healthy + reset policy  
- [ ] On CommFault: force safe state (motor off, fault light, HMI alarm bit)  
- [ ] Document interface contract row for heartbeat  

## Tests
| # | Action | Expected |
|---|--------|----------|
| 1 | Heartbeat healthy | Run allowed if other permissives OK |
| 2 | Stop heartbeat | CommFault within timeout; motor drops |
| 3 | Resume heartbeat | Policy: auto-clear or needs reset (document) |

## Teach-back
Why sticky `Peer_OK = 1` forever is dangerous.
