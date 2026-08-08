# Module 1.4 — Tag-based architecture

| | |
|--|--|
| **Time** | 5–6 hours |
| **Prerequisites** | 1.3 |
| **Lab** | [`../../LABS/01-foundation/LAB-1.4-motor-tags.md`](../../../../LABS/01-foundation/LAB-1.4-motor-tags.md) |
| **Quiz** | [`../../RESOURCES/quizzes/01-foundation/Q04-tags.md`](../../../../RESOURCES/quizzes/01-foundation/Q04-tags.md) |
| **Cheatsheet** | [`../../ON_THE_JOB/Quick_Cheatsheets/tags-and-data-types.md`](../../../../ON_THE_JOB/Quick_Cheatsheets/tags-and-data-types.md) |
| **Tree** | [`../../ON_THE_JOB/Symptom_Decision_Trees/DT-1.4-tag-scope.md`](../../../../ON_THE_JOB/Symptom_Decision_Trees/DT-1.4-tag-scope.md) |

---

## Learning objectives

- Create **controller-scoped** and **program-scoped** tags  
- Use BOOL, DINT, REAL appropriately  
- Explain **base** vs **alias** tags  
- Stop thinking in `B3:0/0` / `N7:0` addresses for Logix  

---

## 1. Concept — electrician language

### Tags replace “mystery addresses”

Older PLC-5 / SLC style thinking:

```
I:1.0/0   Start PB
O:2.0/0   Motor
B3:0/0    Internal seal-in
N7:0      Some integer
```

Logix thinking:

```
INF01_Start_PB      (BOOL)  — may alias to a real input point
INF01_MTR01_Run_Cmd (BOOL)  — may alias to a real output point
INF01_MTR01_Running (BOOL)  — internal or feedback
```

| Electrician idea | Tag idea |
|------------------|----------|
| Wire number / terminal label | **Tag name** |
| Signal kind | **Data type** |
| Label stuck on a real terminal | **Alias** |
| Ice-cube relay used only inside the panel | **Base BOOL** (not aliased) |
| Label known plant-wide | **Controller scope** |
| Note only on one drawing book | **Program scope** |

### Scope rules (foundation)

| Scope | Who can see it | Use for |
|-------|----------------|---------|
| **Controller** | All programs, HMI, MSG often | I/O aliases, commands, statuses, shared |
| **Program** | That program only | Local helpers, temporary sequence bits |

**Recommendation for packaging infeed:**

- All I/O aliases → **controller**  
- Motor run commands / HMI-facing bits → **controller**  
- Purely local “rung helpers” → program OK  

### Core types

| Type | Think | Foundation use |
|------|-------|----------------|
| **BOOL** | Contact / coil | 95% of starter logic |
| **DINT** | 32-bit integer | Counts, states (later) |
| **INT** | 16-bit | Prefer DINT unless required |
| **REAL** | Float | Analogs (Phase 2) |
| **TIMER / COUNTER** | Structures | Phase 2 |

### Alias tags

An **alias** does not “copy” a value — it **is another name for the same memory/path**.

```
INF01_Start_PB  alias for  Local:1:I.Data.0
INF01_MTR01_Run_Cmd  alias for  Local:2:O.Data.0
```

Logic should use the **meaningful name**. If the wire moves to another point, retarget the alias — not every rung.

---

## 2. Studio 5000 walkthrough — build the infeed motor tag set

### A. Open Controller Tags

1. Open `PKG_CELL01` skeleton.  
2. Double-click **Controller Tags**.  
3. Go to **Edit Tags** tab (not just Monitor).  

### B. Create base tags (before I/O alias targets exist)

Create these **BOOL**, controller scope, with descriptions:

| Tag | Description |
|-----|-------------|
| `INF01_Start_PB` | Infeed Start pushbutton |
| `INF01_Stop_OK` | Stop circuit healthy (NC field → ON when OK) |
| `INF01_OL_OK` | Overload healthy |
| `INF01_Guard_OK` | Guard door closed |
| `INF01_Dsch_Clear` | Discharge photoeye clear to run |
| `INF01_EStop_OK` | Safety OK permissive into PLC (not full safety design) |
| `INF01_MTR01_Run_Cmd` | Conveyor motor run command |
| `INF01_MTR01_Run_FB` | Optional starter aux feedback |
| `INF01_Run_Light` | Door/stack run indication |
| `INF01_Fault_Light` | Fault indication |
| `INF01_Fault` | Latched or active fault bit |
| `INF01_Fault_Reset` | Fault reset PB |

### C. Descriptions are mandatory

Select each tag → Description column: write what an apprentice needs at 2 a.m.

### D. Program-scoped example

1. Under `prg_Infeed` → **Program Tags**.  
2. Create `tmp_StartEdge` BOOL (optional helper).  
3. Note it will **not** appear in Controller Tags.  

### E. Alias later (Module 1.5)

You will set **Alias For** to `Local:x:I.Data.y` after modules exist. For now, base tags are enough to write logic offline.

### F. Save

`M14_Tags_InfeedMotor.ACD`

---

## 3. Side-by-side — terminal strip vs tag list

### Hardwired terminal strip (control section)

```
TB1-1  Start PB
TB1-2  Stop PB
TB1-3  OL aux
TB1-4  Guard prox
TB1-5  Photoeye
TB2-1  M starter coil
TB2-2  Run light
```

### Logix tag list (same job)

```
INF01_Start_PB        → will alias DI bit
INF01_Stop_OK         → will alias DI bit
INF01_OL_OK           → will alias DI bit
INF01_Guard_OK        → will alias DI bit
INF01_Dsch_Clear      → will alias DI bit
INF01_MTR01_Run_Cmd   → will alias DO bit
INF01_Run_Light       → will alias DO bit
```

| Terminal style | Tag style |
|----------------|-----------|
| Find by wire number | Find by name + cross-reference |
| Jumpers on TB | Alias retarget |
| Spare terminal | Spare BOOL / spare I/O point |

---

## 4. Common mistakes

| Mistake | Online appearance | Fix |
|---------|-------------------|-----|
| Program-scoped HMI tag | HMI can’t see bit | Move to controller scope |
| Spaces / illegal characters in names | Editor rejects or site tools break | Use underscores |
| `Motor1` with no area | Collides on multi-conveyor cells | `INF01_MTR01_...` |
| Alias to wrong bit | Wrong device operates | I/O map verification |
| Thinking alias is a MOV copy | Confusion when both “names” change together | Alias = same point |
| Using INT for everything | OK but non-idiomatic | Prefer DINT for integers |

---

## 5. Mini-lab

[`LAB-1.4-motor-tags.md`](../../../../LABS/01-foundation/LAB-1.4-motor-tags.md)

---

## 6. Troubleshooting tree

[`DT-1.4-tag-scope.md`](../../../../ON_THE_JOB/Symptom_Decision_Trees/DT-1.4-tag-scope.md)

```
"Tag doesn't exist / HMI can't see it / wrong value"
  → Correct scope (Controller vs Program)?
  → Typo in name?
  → Alias path valid?
  → Looking Monitor vs Edit?
  → Online with right controller project?
```

---

## 7. Quiz

[`Q04-tags.md`](../../../../RESOURCES/quizzes/01-foundation/Q04-tags.md)

---

## 8. Spaced repetition

| When | Re-visit |
|------|----------|
| **+1 day** | Write 12 tags for a second conveyor `CAS01` from memory using the same pattern. |
| **+1 week** | Explain base vs alias to someone; quiz yourself on scope. |
| **+1 month** | Audit P1 tags against `../../RESOURCES/templates/tag-naming-standard.md`. |

### Teach-back

> Why did Logix move from N7:0 addresses to tags — and how does that help an electrician?

### Exit checklist

- [ ] Full infeed tag set with descriptions  
- [ ] Scope choices justified in lab report  
- [ ] Quiz ≥ 80%  

## Next

→ [1.5 Digital I/O](05-digital-io.md)
