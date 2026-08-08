# LAB 2.1B — Runtime with RTO

## Goal
Accumulate motor runtime; convert to hours for HMI-style tag.

## Requirements
- RTO runs while `Run_Cmd` true  
- On maintenance `Hours_Reset`, RES the RTO and clear hour total  
- `EU_Runtime_Hours` updated (ACC based math — document formula)  

## Pass criteria
- [ ] Hours only increase while running  
- [ ] Reset works  
- [ ] Formula written in lab report  
