# Teach-back — Phase 3 Advanced

**Time box:** 15–20 min  
**Prerequisite:** P3 complete

---

## Part A — Explain (12 min)

1. When you choose **Ladder vs FBD vs ST vs SFC** (decision matrix + examples).  
2. What a **UDT** is (motor faceplate idea).  
3. What an **AOI** is; instance vs definition when “AOI is broken.”  
4. Produced/consumed vs **MSG** — and why a **heartbeat** beats a sticky OK bit.  
5. Major vs minor fault — clear vs fix.  
6. Motion literacy: what you check before enabling (high level).  
7. Walk through your P3 architecture on a whiteboard (stations, languages, comms).

## Part B — Challenge

1. Peer PLC dies — what should your machine do with last data?  
2. MSG `.ER` — first three checks?  
3. Unbounded ST loop risk?  
4. Changing a UDT used by 40 motors — risk?  
5. Safety OK bit forced true in standard logic — why refuse?

## Part C — Demo

Show motor AOI instances; heartbeat fault behavior; one ST/SFC sequence step change.

## Self-score
| Criterion | 1–5 |
|-----------|-----|
| Architecture clarity | |
| Accuracy | |
| Safety boundary | |
| Challenge answers | |

**Pass ≥ 4**
