# LAB 1.2 — Hardware identification (packaging panel)

## Goal
Identify Logix hardware and power domains; practice LED first-response.

## Time
60–90 min

## Platforms
| Emulate | Real hardware |
|---------|----------------|
| Photos + datasheets + FC-01 | Live trainer/panel walkdown |

---

## Procedure

### Part A — Label the system
Using trainer **or** Rockwell literature/photos, label:

1. Controller / CPU  
2. Chassis power supply (ControlLogix) or integrated power (Compact)  
3. Digital input module  
4. Digital output module  
5. Ethernet port or ENET module  
6. SD card location (if applicable)  
7. Keyswitch (if applicable)  

### Part B — Catalog table
Record five catalog numbers and one-line functions:

| Catalog | Function | Where used on packaging cell |
|---------|----------|------------------------------|
| | | |

### Part C — Power domain sketch
Draw three boxes and list what dies if each is lost:

1. Chassis/CPU power  
2. Field 24 VDC  
3. Motor 480 V  

### Part D — LED drills
Using `troubleshooting/fault-codes/FC-01-controller-leds.md`, write **ordered** first five checks for:

1. No lights on controller  
2. Controller FAULT LED  
3. CPU OK but all input LEDs dark  
4. Output tag commanded but starter dead (preview)  
5. No Ethernet link light  

### Part E — Studio link
Open I/O Configuration in `PKG_CELL01` and write one sentence: “The project’s I/O tree is the software twin of ______.”

---

## Pass criteria
- [ ] Seven parts labeled  
- [ ] Five catalogs  
- [ ] Power domain sketch  
- [ ] Five LED scenarios with ordered checks  
- [ ] Lab report complete  

## Teach-back (end of lab)
Record 60 seconds audio or write: “CPU RUN good, sensors dead — what I check first.”
