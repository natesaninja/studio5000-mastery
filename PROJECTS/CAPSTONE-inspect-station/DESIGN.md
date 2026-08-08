# Capstone design — sequence of operations

**Machine name:**  
**Author / date:**  

## 1. Purpose
One-paragraph: what product moves through, what “pass/fail” means.

## 2. Modes

| Mode | Operator intent | Allowed motion |
|------|-----------------|----------------|
| Off | | |
| Manual | | |
| Auto | | |

### Mode transition rules
-  
-  

## 3. Permissives (always)
List field + logic permissives required for any motion:

1.  
2.  
3.  

## 4. Auto sequence of operations

| Step | State # | Actions (outputs) | Sensors / conditions to advance | Timeout? |
|------|---------|-------------------|----------------------------------|----------|
| Idle | 0 | | | |
| | | | | |
| | | | | |
| Fault | | All safe | Reset policy: | |

## 5. Manual operations
| Device | CMD tag | Permissives | Notes |
|--------|---------|-------------|-------|
| Infeed | | | |
| Outfeed | | | |
| Divert | | | |

## 6. Fault list

| ID | Fault | Detect how | Safe action | Reset |
|----|-------|------------|-------------|-------|
| F1 | | | | |
| F2 | | | | |
| F3 | | | | |
| F4 | | | | |

## 7. Language choices
| Part | Language | Why |
|------|----------|-----|
| Permissives / motors | | |
| Sequence | | |
| Alarms | | |

## 8. Interfaces
- Upstream/downstream heartbeat? Y/N — contract summary:  
- HMI: see HMI_NOTES.md  

## 9. Assumptions / out of scope
- Safety system is **permissive only** into standard PLC unless you have GuardLogix lab  
-  
