# 3.7 — Produced/Consumed tags and MSG

## Learning objectives

- Configure produced/consumed data between controllers (concept + practice)
- Build MSG read/write with path, timeout, and error handling
- Implement heartbeat / communication fault patterns
- Choose produce-consume vs MSG for a given interface

**Time:** 6–8 h | **Prereq:** 1.5, 2.8  
**Labs:** `LAB-3.7A`, `LAB-3.7B` in `../../LABS/03-advanced/`  
**Tree:** `../../ON_THE_JOB/Symptom_Decision_Trees/DT-05-comms-failure.md`  
**Faults:** `../../ON_THE_JOB/Fault_Codes/FC-04-msg-and-cip.md`

---

## Electrician map

| Field idea | Logix |
|------------|-------|
| Always-on multi-conductor between panels | **Produced/Consumed** |
| Call the other panel when you need a value | **MSG** |
| Watchdog timer on interlock chain | **Heartbeat** bit + timeout TON |

---

## Produce/Consume vs MSG

| | Produce/Consume | MSG |
|--|-----------------|-----|
| Traffic | Scheduled / connection-oriented | On demand / triggered |
| Best for | Real-time status sharing | Occasional data, larger transfers |
| Failure mode | Connection loss | ER bit / timeout |

---

## Heartbeat pattern

Producer toggles a bit every X ms. Consumer requires transitions (or free-running counter change). If stale → `CommFault` → safe default outputs.

---

## Teach-back

> “Why is a heartbeat better than trusting a single ‘OK’ bit that can stick true?”

## Next

→ [3.8 Motion basics](08-motion-basics.md)
