# LAB 2.1A — Dwell / debounce timers

## Goal
Use TON for sensor debounce and post-start dwell.

## Requirements
1. Photoeye must be true for 200 ms before `Part_Present` seals.  
2. After motor start, wait 2 s (`Dwell_DN`) before allowing a “ready for next” bit.  
3. Document PRE values in ms.  

## Pass criteria
- [ ] Chatter shorter than 200 ms ignored  
- [ ] Dwell blocks early “ready”  
