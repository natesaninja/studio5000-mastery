# Quiz 1.2 — Hardware tour

**Closed notes.** 10 questions. Pass ≥ 8/10.

1. What is the ControlLogix chassis analogous to in a traditional panel?  
2. True/False: CompactLogix and ControlLogix use fundamentally different tag-based programming models.  
3. Name three separate power domains you must keep straight.  
4. CPU OK/RUN is good, but every input is false and sensor LEDs are off. First power to meter?  
5. What does a module **slot number** affect in the project?  
6. First response when the controller **FAULT** LED is on?  
7. What is an Ethernet module (or embedded port) for in a packaging cell?  
8. Why log firmware version when swapping a CPU?  
9. SD card purpose at a high level?  
10. Electrician map: I/O module ≈ ________.

---

## Answers

1. Rack / backplane for control devices.  
2. **False** — same Logix tag model; different packaging.  
3. Chassis/CPU power; field device power (often 24 V); network infrastructure (and motor power is separate again).  
4. **Field 24 VDC** (sensor/DI supply).  
5. Which physical module the project addresses / I/O mapping.  
6. Make safe as needed; connect online; read fault information — don’t clear blindly.  
7. Communications to HMI, drives, remote I/O, other controllers, engineering workstation.  
8. Mismatch causes download/online/keying/instruction issues.  
9. Nonvolatile store/load / recovery image options (platform-specific).  
10. Terminal group / card with status LEDs and intelligence.

**Score: __ / 10**
