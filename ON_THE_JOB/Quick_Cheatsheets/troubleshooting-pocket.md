# Pocket — Troubleshooting (Logix)

## 15-min triage
0–2 Safe + symptom + what changed  
2–5 Power, LEDs, safety, field  
5–10 Online: cmd tag, inputs, forces, modules  
10–13 One test  
13–15 Stabilize + tell ops  

## 6 buckets
1 Energy / mode  
2 Field device / wiring  
3 I/O module / config / connection  
4 Alias / tag  
5 Logic  
6 Overrides (forces / HMI / maint)  

## Layer cake
Power → Safety → Network → Controller → I/O → Logic → Load  

## Splitters
| See | Means |
|-----|--------|
| Cmd tag FALSE | Logic/permissive/mode |
| Cmd TRUE, DO LED OFF | Alias/module/supply |
| DO LED ON, no load V | Wire/TB/HOA/safety contactor |
| Load V, no motion | Starter/VFD/mechanical |

## Trees
| Symptom | DT |
|---------|-----|
| Won’t start | DT-01 |
| Outputs dead | DT-OUT |
| Inputs dead | DT-IN |
| Logic frozen/skipped | DT-SCAN |
| Intermittent | DT-INT |
| After power cycle | DT-PWR |
| Comms loss | DT-COM |
| Major fault | DT-MAJ |
| LED≠tag | DT-02 |
| No online | DT-03 |
| Analog wrong | DT-04 |
| MSG/P-C | DT-05 |
| Safety | DT-06 |

## Job-aid open order
1 Finding_the_Problem_Area  
2 What_to_Check_First  
3 Matching DT-* tree

## Forces
Log → use → **REMOVE** → verify field → empty table  

## Every confusing call
Open **force table** first.
