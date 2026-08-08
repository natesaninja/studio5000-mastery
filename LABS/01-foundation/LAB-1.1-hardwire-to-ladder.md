# LAB 1.1 — Hardwired circuit → ladder map (packaging infeed)

## Goal
Translate circuits you already know into Logix thinking **before** depending on the software UI.

## Time
45–75 min  

## Platforms
| Emulate | Real hardware |
|---------|----------------|
| Paper + Studio project create only | Same; optional meter later |

## Materials
- Paper or draw.io  
- Studio 5000 (project create only)  
- Lab report: `templates/lab-report.md`

---

## Procedure

### Part A — Hardwired from memory (15 min)
Draw a **3-wire start/stop** for packaging infeed conveyor motor starter:

- Stop PB **NC**
- Start PB **NO**
- Holding contact
- OL **NC** in series with coil
- Coil `M` (24 VDC control)

Label wire numbers roughly (e.g. 401–410).

### Part B — Map table (15 min)

| Hardwired element | Proposed tag name | Instruction | Notes |
|-------------------|-------------------|-------------|-------|
| Stop NC | `INF01_Stop_OK` | | Healthy = ? |
| Start NO | | | |
| Holding | | | |
| OL NC | | | |
| Coil M | | | |

### Part C — Ladder sketch (15 min)
Sketch the seal-in rung on paper using XIC/XIO/OTE labels.

**Call out explicitly:** What is the input tag value when Stop is **not** pressed?

### Part D — Two more packaging circuits (15 min)
On paper only, map:

1. **Guard door** NC in series with start circuit (safety note: this is process interlock training, not dual-channel safety design).  
2. **Discharge photoeye** must be clear (NO or NC per your assumption — **state the assumption**).

### Part E — Studio orientation (10 min)
1. Create project controller name `PKG_CELL01`.  
2. Find Controller Tags, MainRoutine, I/O Configuration.  
3. Save `labs/01-foundation/output/LAB11_PKG_CELL01.ACD`.  
4. No logic required yet.

---

## Pass criteria
- [ ] Table complete  
- [ ] NC stop convention written correctly  
- [ ] Two extra circuits mapped  
- [ ] Project opens and saves  
- [ ] Lab report: “what surprised me” filled  

## Common failure modes
- Double-inverting Stop  
- Forgetting OL  
- Using OTL “because latches feel right” for a standard starter  

## Spaced review tags
Add to deck: scan steps; NC stop healthy = ON; seal-in = branch.
