# Online vs offline diagnosis workflow

Electricians already know **bench vs live panel**. Studio is the same split: **offline** = prints on the bench; **online** = panel energized with a laptop on the door.

---

## Definitions

| Mode | What you see | What you risk |
|------|--------------|---------------|
| **Offline** | Project file on PC (ACD); tag values are **not live** | Editing wrong file; thinking it’s the machine |
| **Online** | Live connection to controller; values update | Forces, edits, downloads affect production |
| **Upload** | Controller → PC | Overwrite your offline edits |
| **Download** | PC → Controller | Overwrite what’s running the machine |

---

## When to stay offline

Use offline when:

- Learning / searching logic structure  
- Comparing two ACD revisions (export/print/compare)  
- Preparing a change for a scheduled window  
- No path to the controller yet (print study, I/O map review)  
- You must **not** disturb production  

**Offline checklist:**

1. Confirm filename / revision / date of ACD  
2. Confirm it matches the **as-built** claim (ask; don’t assume)  
3. Cross-reference tags, read descriptions, sketch call flow (JSR)  
4. Write a test plan **before** you go online  
5. Never assume offline tag values are field state  

---

## When you must go online

Use online when:

- Machine is down and you need live truth  
- Intermittent (trend while running)  
- Force tables / fault logs / module connection status  
- Verifying after a fix  

**Online checklist (before any change):**

1. **Identity:** path, controller name, panel label  
2. **Authorization**  
3. **Mode / fault state**  
4. **Forces** — open tables first  
5. **Symptom tags** — watch, don’t edit yet  
6. **One hypothesis**  

---

## Recommended workflow on a down machine

```
OFFLINE (if you have time / known ACD)
  → Find tag names, routine, permissives on paper
ONLINE
  → Confirm live values match hypothesis
  → Module / fault / force checks
  → Minimal test (or force with log if authorized)
  → Fix (field or logic window)
ONLINE verify
  → Remove forces
  → Ops try cycle
OFFLINE (after)
  → Save as-built, notes, redlines
```

If the line is hard down and you have path: **go online first**, but still refuse shotgun edits.

---

## Diagnosis only possible online

| Need | Online tool |
|------|-------------|
| Live bit states | Monitor Tags / rung animation |
| Forces present? | Force tables |
| Module connection status | Module properties |
| Major/minor fault details | Fault window / logs |
| Intermittent capture | Trends |
| MSG DN/ER live | MSG tag members |
| Task overlap / scan (advanced) | Task monitor properties |

## Diagnosis possible offline

| Need | Offline tool |
|------|--------------|
| “Who writes this coil?” | Cross-reference |
| What should permissives be? | Logic reading |
| I/O map vs drawings | I/O Configuration + docs |
| Compare last good ACD | File/revision discipline |
| Prepare online edit | Pending plan |

---

## Dangerous confusions

| Confusion | Result |
|-----------|--------|
| Editing offline ACD while watching HMI | “I fixed it” but never downloaded |
| Upload over uncommitted PC edits | Lost work |
| Download “to try something” on wrong cell | Wrong machine changes |
| Trusting rung green as coil voltage | Field still dead |
| Online values on wrong controller | False confidence |

---

## Online vs offline decision tree

```
Do you have a live path to the correct controller?
  NO → Offline study + DT-COM for path; field meter still valid
  YES →
    Is the question "what is the field doing right now?"
      YES → Online monitor / module / trend
      NO → Offline cross-ref / structure OK
    Will your next action change machine behavior?
      YES → Authorization + log + smallest change
      NO → Observation only
```

---

## After power cycle special case

Often: “It came back different.”

| Check online | Why |
|--------------|-----|
| Controller faulted? | Major fault on power-up |
| I/O connections re-establish? | Remote racks slow/fail |
| Retentive vs non-retentive bits | Latches, RTO, first scans |
| Drives re-enable sequence | VFD not ready; PLC already commanding |
| HMI reconnected to right PLC? | Wrong data looks like logic bug |

See [electrician-field-pack — power cycle](Scenarios/electrician-field-pack.md).

---

## Related

- [00 Machine down](Finding_the_Problem_Area.md)  
- [03 Floor techniques](Cross_Reference_and_Tools.md)  
- [DT-03](Symptom_Decision_Trees/DT-03-wont-download.md) · [DT-COM](Symptom_Decision_Trees/DT-COM-communication-loss.md)  
