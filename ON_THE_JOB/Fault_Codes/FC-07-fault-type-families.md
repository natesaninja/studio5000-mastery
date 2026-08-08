# FC-07 — Major fault type families (field guide)

> **Not a substitute for the official Rockwell fault code list** for your controller firmware.  
> Use this to know **what kind of problem** you’re in, then look up the exact Type/Code.

---

## How to use

1. Online → read **Type** and **Code** and description text  
2. Match to a **family** below  
3. Run the **first checks**  
4. Fix cause → clear → verify  

---

## Family A — Program / instruction

**Floor feel:** Started after a logic change, recipe edge case, or rare math condition.

| Clues | First checks |
|-------|--------------|
| Routine/rung cited | Open that logic; recent edits |
| Math / overflow language | Divide by zero, bad values, REAL edge cases |
| Jump / subroutine language | JSR to missing, bad LBL, SFC issues |

**Electrician:** Like a control circuit that miswired itself after someone “improved” it.

---

## Family B — I/O / connection elevated to major

**Floor feel:** Module pulled, remote rack dark, major config mismatch.

| Clues | First checks |
|-------|--------------|
| I/O tree faulted | LEDs, power, FC-02/FC-06 |
| After card swap | Catalog, slot, keying |
| Many points dead | Field power vs chassis |

---

## Family C — Watchdog / task / resource

**Floor feel:** Machine grew slower; heavy ST loop; motion + logic overload.

| Clues | First checks |
|-------|--------------|
| Watchdog wording | Scan time, task overlap |
| After “optimization” | RPI storm, continuous heavy logic |

**Escalate** if not obvious — easy to make worse.

---

## Family D — Motion

**Floor feel:** Servo fault, group fault, axis issues.

| Clues | First checks |
|-------|--------------|
| Axis/drive codes | Drive display, enable, E-stop of motion, feedback |
| After crash | Mechanical + drive fault log |

Follow OEM motion recovery; don’t random MSO.

---

## Family E — Power-up / memory / nonvolatile

**Floor feel:** After outage, battery/memory warnings (platform), failed load from SD, corrupted project load.

| Clues | First checks |
|-------|--------------|
| Only after power event | Power quality, proper restart order |
| Load from card failed | Known-good ACD, firmware match, SD procedure |

---

## Family F — User-defined / application fault routines

Some projects **deliberately** major-fault or use fault routines for protection.

| Clues | First checks |
|-------|--------------|
| Same code every time a process limit hits | Application design — read fault routine comments |
| Docs say “fault on low oil” etc. | Fix process condition, not only clear PLC |

---

## Clear vs fix

| Action | Meaning |
|--------|---------|
| **Fix** | Remove the condition that caused Type/Code |
| **Clear** | Allow controller to attempt RUN again |

Clear without fix = roulette.

---

## Related

- [FC-05](FC-05-major-minor-faults.md)  
- [DT-MAJ](../Symptom_Decision_Trees/DT-MAJ-major-fault-recovery.md)  
- [Reading_Faults_Detail.md](../Reading_Faults_Detail.md)  
