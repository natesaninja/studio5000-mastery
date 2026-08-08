# Projects — progressive path

Projects exist to **force reuse**. Each one assumes the previous machine’s habits (tags, permissives, forces, RCAs).

---

## Path overview

```
Mini-M1 ──► P1 ──► Mini-M2 ──► P2 ──► Mini-M3 ──► P3 ──► Mini-M4 ──► P4 ──► CAPSTONE ──► P5 (break/fix)
```

| ID | Name | Builds on | Phase |
|----|------|-----------|-------|
| [Mini-M1](mini/M1-jog-and-run/) | Jog + run selector | Module 1.6 | 1 |
| [P1](P1-conveyor-start-stop/) | Infeed start/stop gate | M1 | 1 |
| [Mini-M2](mini/M2-debounce-and-hours/) | Debounce + runtime hours | P1 | 2 |
| [P2](P2-tank-level-control/) | Tank level gate | M2 + analog | 2 |
| [Mini-M3](mini/M3-motor-udt-aoi/) | Motor UDT/AOI retrofit | P1/P2 motors | 3 |
| [P3](P3-packaging-line/) | Multi-station line | M3 | 3 |
| [Mini-M4](mini/M4-heartbeat-defaults/) | Heartbeat + safe defaults | P3 comms | 4 |
| [P4](P4-multi-station-cell/) | Cell performance/interface | M4 | 4 |
| [**CAPSTONE**](CAPSTONE-inspect-station/) | End-to-end machine | All | 4 gate |
| [P5](P5-field-mastery-capstone/) | Broken-plant recovery drill | Capstone | Expert proof |

---

## Rules for all projects

1. **Reuse tag naming** (`INF01_`, `CMD_`, etc.) — don’t invent a new language each time.  
2. **I/O map + test plan** required.  
3. **Zero forces** at handoff.  
4. **Teach-back** blurb (½–1 page) even on minis.  
5. After each major P: schedule spaced reviews + phase teach-back (`../LEARNING_PATH/Retention/`).  

---

## Capstone vs P5

| | CAPSTONE | P5 |
|--|----------|-----|
| Goal | **Design & build** a real small machine | **Diagnose & restore** a broken system |
| Skills | Architecture, sequence, faults, HMI-ready | Trees, RCA, pressure |
| Order | Complete CAPSTONE first | Then break it (or use seed bugs) for P5 |

---

## Retention link

- Flashcards & schedule: [`../LEARNING_PATH/Retention/`](../../LEARNING_PATH/Retention/)  
- Expert bar: [`../LEARNING_PATH/Retention/expert-checklist.md`](../../LEARNING_PATH/Retention/expert-checklist.md)  
