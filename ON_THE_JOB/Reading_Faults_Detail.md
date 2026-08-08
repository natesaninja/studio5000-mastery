# How to read and interpret Logix faults

Fault lights are trip codes for a computer-relay hybrid. Your job: **read → classify → fix cause → then clear** — not “clear until green.”

Exact codes vary by controller family and firmware. Use this as a **field classification guide**, then the Rockwell fault code for your catalog/firmware.

---

## 1. Major vs minor (first split)

| Class | Typical effect | Electrician parallel | Your move |
|-------|----------------|----------------------|-----------|
| **Major** | User program may stop; outputs go to configured fault state | Main breaker / MCR dropped the control logic | [DT-MAJ](Symptom_Decision_Trees/DT-MAJ-major-fault-recovery.md) |
| **Minor** | Warning; program often continues | Annunciator / yellow light | Log, trend if process affected, schedule fix |

**Never** clear a major fault as the fix. Clearing without cause = same trip in five minutes, maybe less safe.

---

## 2. Where to look in Studio 5000

When online:

1. Controller **status** / fault indicators in Organizer  
2. **Major Fault** / **Minor Fault** tabs or Controller Properties → Faults (wording varies by version)  
3. Note: **Type**, **Code**, **Info/Description**, **Time**, **Program/Routine** if given  
4. I/O tree: module with **fault / yellow**  
5. Module **Properties → Connection** status  
6. For MSG: instruction tag `.ER`, `.ERR`, `.EXERR`  

Write them down before you clear anything.

---

## 3. Major controller faults — how to interpret

### Capture template

```
Date/time:
Controller name / path:
Mode before clear:
Type:
Code:
Description text:
Program / routine / rung if shown:
Last change known:
Power event? Y/N
```

### Families (conceptual — verify with official code list)

| Family (idea) | What it often means on the floor | First field checks |
|---------------|----------------------------------|--------------------|
| **Program / instruction** | Bad math, jump, subroutine issue, unhandled condition | What changed in logic; which routine; recent online edit |
| **I/O related major** | Severe I/O problem configured to major | Module LEDs, chassis, remote rack power/network |
| **Watchdog / timing** | Scan too long / stuck | Recent heavy logic, loops in ST, motion overload |
| **Motion** | Axis fault elevated to major (if so configured) | Drive display, E-stop of motion, enable chain |
| **Power-up / nonvolatile** | Memory/load issue | SD card, corrupted load, firmware mismatch recovery |

Use [FC-07](Fault_Codes/FC-07-fault-type-families.md) and [FC-05](Fault_Codes/FC-05-major-minor-faults.md).

### Clear discipline

1. Record code  
2. Hypothesize cause  
3. Correct cause (or safe temporary engineered state)  
4. Clear fault per procedure  
5. Verify mode RUN and process safe  
6. Watch for immediate re-fault  

---

## 4. I/O module faults

### What you see

- Module **fault LED**  
- Yellow / fault icon in I/O Configuration online  
- Connection status: faulted, timed out, inhibited  
- Channel-level diagnostics on smart modules (analog/diagnostics cards)  

### Interpret by pattern

| Pattern | Likely meaning |
|---------|----------------|
| One module fault after swap | Wrong catalog, slot, keying, missing field power |
| Entire remote rack fault | Adapter power, Ethernet, uplink, IP |
| All local modules OK, one remote bad | That drop only |
| Fault after download | Config/keying/RPI/slot mismatch vs hardware |
| Intermittent module fault | Power dip, loose backplane, bad cable, heat |

### Electrician actions

1. Visual LEDs on module and adapter  
2. Field power to that module (many DI need external 24 V)  
3. Online module properties — connection error text  
4. Match **catalog + slot** to project  
5. Electronic keying policy (Exact match fails on “almost same” card)  
6. Reseat only with LOTO / procedure  

Detail: [FC-02](Fault_Codes/FC-02-io-module-faults.md), [FC-06](Fault_Codes/FC-06-connection-faults.md)

---

## 5. Connection faults (CIP / I/O connection)

Different from “wire open on channel 3.”

**Connection** = the controller’s scheduled relationship to a module or device (local or networked).

| Symptom | Meaning |
|---------|---------|
| Connection faulted / timed out | Controller not successfully updating that device |
| Inhibited | Project or command told it not to connect |
| Connecting… stuck | Path, power-up, wrong IP, broken route |
| OK but data wrong | Alias/logic — not connection |

### Common causes

- Bad Ethernet cable / switch port  
- Wrong IP or duplicate IP  
- RPI too aggressive for network load (advanced)  
- Device powered off  
- Firewall/ACL after IT change  
- Chassis removed / module pulled  

### Floor order

1. Ping/browse device if applicable  
2. Link lights  
3. Module connection tab  
4. Power at remote  
5. Recent network changes  

Trees: [DT-COM](Symptom_Decision_Trees/DT-COM-communication-loss.md), [DT-05](Symptom_Decision_Trees/DT-05-comms-failure.md)

---

## 6. MSG instruction “faults” (not always controller major)

MSG failures often **do not** major-fault the controller. They set `.ER` and error codes.

| Member | Meaning |
|--------|---------|
| `.EN` | Enabled / in progress semantics |
| `.DN` | Done success |
| `.ER` | Error |
| `.ERR` / `.EXERR` | Error code detail |

Interpret with [FC-04](Fault_Codes/FC-04-msg-and-cip.md). Look at **path**, tag names, types/sizes, target mode.

---

## 7. LED quick map (controller)

| Observation | Prefer |
|-------------|--------|
| No lights | Power |
| Fault LED | Major — go online, read code |
| OK/RUN normal | Leave CPU; chase I/O/logic/field |
| Force status indicated | Open force tables **now** |
| Link dark | Network path |

[FC-01](Fault_Codes/FC-01-controller-leds.md)

---

## 8. Safety faults (GuardLogix / dual channel)

- Safety faults are **not** standard minor annoyances  
- Dual-channel mismatch, cross-fault, lockout  
- Reset sequences are OEM/site specific  
- Forcing safety inputs is a **last-resort authorized** act, often forbidden  

[DT-06](Symptom_Decision_Trees/DT-06-safety-trip.md)

---

## 9. After you clear — verification

- [ ] Controller in intended mode  
- [ ] No immediate re-fault  
- [ ] Critical I/O connections OK  
- [ ] Sample start in Hand/Manual if required  
- [ ] Ops informed of residual risk  
- [ ] Code + cause logged  

---

## Related cheatsheets

- [major-fault-pocket.md](Quick_Quick_Cheatsheets/major-fault-pocket.md)  
- [diagnostic-status-bits.md](Quick_Quick_Cheatsheets/diagnostic-status-bits.md)  
