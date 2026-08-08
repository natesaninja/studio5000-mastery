# Phase 1 scenarios — packaging infeed

Work each with **6 buckets** and the named tree. Write RCA.

---

## SC-1.1 — Starter won’t pull in
**Ops:** “Hit start on infeed, nothing.”  
**Given online:** `Run_Cmd` TRUE; DO LED OFF.  
**Tree:** DT-01  
**Likely:** wrong alias, module fault, no output supply, force on output path oddities  
**Teach point:** Command true ≠ field energy.

---

## SC-1.2 — Starts then immediately drops
**Ops:** “It bumps.”  
**Given:** `Stop_OK` goes false in logic while PB not pressed — or inverted examine.  
**Tree:** DT-01 + DT-1.6  
**Likely:** inverted stop; chattering stop circuit; permissive flicker  
**Teach point:** Watch Stop_OK while operating.

---

## SC-1.3 — Input LED on, tag false
**Ops:** Guard shows closed on prox LED.  
**Given:** Module input LED ON; `Guard_OK` FALSE.  
**Tree:** DT-02  
**Likely:** force, wrong alias, connection  
**Teach point:** LED is not the tag.

---

## SC-1.4 — Works with HOA hand, not auto from PLC
**Ops:** “In HAND it runs.”  
**Given:** Starter HOA in HAND works; PLC Auto does not.  
**Tree:** DT-01  
**Likely:** PLC output path, Run_Cmd never true, permissives, mode  
**Teach point:** Separate power/control paths for HOA vs PLC.

---

## SC-1.5 — Force left on
**Ops:** “Ignores stop” or “starts itself.”  
**Tree:** DT-1.6 / forces first  
**Likely:** force on Stop_OK or Run_Cmd  
**Teach point:** Force table is a primary screen.

---

## SC-1.6 — Stop wired NC, programmed wrong
**Symptom:** Won’t run unless holding stop, or won’t stop.  
**Tree:** DT-1.6  
**Fix:** Align convention; XIC on `Stop_OK` when healthy=1.

---

## SC-1.7 — Wrong conveyor moves
**Symptom:** Start infeed, case sealer jogs.  
**Tree:** DT-02 alias  
**Likely:** off-by-one DO alias or swapped outputs in map.

---

## SC-1.8 — Can’t go online before shift
**Symptom:** Download needed; browser empty.  
**Tree:** DT-03 + DT-1.2  
**Likely:** cable, IP, switch, power, wrong driver.
