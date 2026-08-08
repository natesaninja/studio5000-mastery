# Capstone test plan

**Build revision / ACD name:**  
**Tester:**  
**Date:**  

## A. I/O checkout
| Point | Alias | Pass | Initials |
|-------|-------|------|----------|
| | | ☐ | |

Force log attached / cleared: ☐  

## B. Manual mode
| # | Test | Expected | Result |
|---|------|----------|--------|
| M1 | Infeed jog/run with permissives | | |
| M2 | Guard open | Motion inhibited | |
| M3 | Outfeed | | |
| M4 | Divert | | |
| M5 | Mode Off | All cmds false | |

## C. Auto — pass path
| # | Test | Expected | Result |
|---|------|----------|--------|
| A1 | Product → Pass → outfeed clear → Idle | | |
| A2 | Repeat cycle | | |

## D. Auto — fail path
| # | Test | Expected | Result |
|---|------|----------|--------|
| F1 | Fail → divert → confirm → Idle | | |

## E. Faults
| # | Test | Expected | Result |
|---|------|----------|--------|
| E1 | Station timeout | Fault, safe state | |
| E2 | Reset with condition still bad | Stays faulted | |
| E3 | Reset when healthy | Clears to Idle | |

## F. Regression
| # | Test | Result |
|---|------|--------|
| R1 | Force table empty | |
| R2 | Cross-ref single OTE owners for motors | |
| R3 | Power cycle behavior noted | |

## Sign-off
Pass / Fail: ____  
Notes:  
