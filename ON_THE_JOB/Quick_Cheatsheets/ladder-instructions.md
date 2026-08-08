# Cheatsheet — Core ladder instructions (+ TS notes)

| Inst | Electrician | Notes / TS |
|------|-------------|------------|
| **XIC** | NO contact | True if tag = 1 |
| **XIO** | NC *relative to tag* | True if tag = 0; stop double-invert trap |
| **OTE** | Coil | Follows rung; one owner preferred |
| **OTL** | Latch set | Needs OTU path; power-cycle retention design-dependent |
| **OTU** | Latch reset | |
| **ONS** | One-shot | Edges for counts; missing ONS → free-run count |
| **TON** | On-delay | ACC clears when rung false |
| **TOF** | Off-delay | |
| **RTO** | Retentive timer | Needs RES; wrong TON kills hour meters |
| **CTU/CTD** | Counter | RES clears |
| **RES** | Reset T/C | |
| **EQU…GEQ** | Compare | REAL exact EQU fragile |
| **ADD…DIV** | Math | DIV0 risk; INT truncate |
| **MOV** | Copy | |
| **CLR** | Zero | |
| **JSR** | Call sheet | Missing JSR = dead routine (DT-SCAN) |
| **JMP/LBL** | Jump | Can skip logic unintentionally |
| **MCR** | MCR zone | Zone false de-energizes non-retentive outputs |
| **MSG** | Call other panel | Watch .DN/.ER |
| **AFI** | Always false | Left in by mistake kills rung |

## Stop convention
NC field healthy → input usually **1** → often **XIC Stop_OK**

## Run seal-in pattern
```
Permissives series * (Start OR Run) → OTE Run
```

## Output TS
Tag true ≠ voltage at coil → alias / module / wire / HOA / safety contactor
