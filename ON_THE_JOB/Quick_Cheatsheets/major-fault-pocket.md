# Cheatsheet — Major fault pocket

## Order
1. **Safe**  
2. **Online** → record Type / Code / Description / time  
3. **Classify** (program / I/O / watchdog / motion / power-up)  
4. **Fix cause**  
5. **Clear**  
6. **Verify RUN** + no instant re-fault  
7. **Document**  

## Clear ≠ fix
Clearing only resets the trip. Cause still there → re-fault.

## First questions
- What changed?  
- Power event?  
- Which module yellow?  
- Last download / online edit?  

## If no online path
LEDs + power only → restore path (DT-COM) → then read code.  
Don’t random power-cycle forever.

## Related
- `troubleshooting/Symptom_Decision_Trees/DT-MAJ-major-fault-recovery.md`  
- `troubleshooting/Reading_Faults_Detail.md`  
- `troubleshooting/Fault_Codes/FC-07-fault-type-families.md`  
