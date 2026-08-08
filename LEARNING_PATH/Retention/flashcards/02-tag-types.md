# Flashcards — Tags, types, scope, alias

---

## Q1
**Q:** What is an alias tag?  
**A:** Another **name** for the same path/memory (not a second independent copy).

## Q2
**Q:** Base tag vs alias?  
**A:** Base owns storage; alias points at existing tag/I/O path.

## Q3
**Q:** Preferred scope for I/O aliases and HMI commands?  
**A:** **Controller** scope.

## Q4
**Q:** Program-scoped tag problem for HMI?  
**A:** HMI/other programs generally shouldn’t rely on buried program tags.

## Q5
**Q:** Default integer workhorse in Logix?  
**A:** **DINT**

## Q6
**Q:** BOOL used for?  
**A:** Discrete true/false (contacts/coils).

## Q7
**Q:** REAL used for?  
**A:** Engineering units / floating process values.

## Q8
**Q:** Why not think in N7:0 / B3:0 for Logix daily work?  
**A:** Tag-based architecture — names + types, not fixed data table addresses.

## Q9
**Q:** `Local:1:I.Data.0` means (concept)?  
**A:** Local chassis, slot 1, input data bit 0.

## Q10
**Q:** Why alias instead of raw Local paths on every rung?  
**A:** Readable; retarget one place; fewer errors.

## Q11
**Q:** CMD_ vs STS_ vs ALM_ vs CFG_?  
**A:** Command / Status / Alarm / Config(setpoint).

## Q12
**Q:** RAW_ vs EU_?  
**A:** Unscaled counts vs engineering units.

## Q13
**Q:** UDT is like what for an electrician?  
**A:** Standard device faceplate / repeated terminal list for similar motors.

## Q14
**Q:** AOI is like what?  
**A:** Standard control module / typical circuit you drop repeatedly.

## Q15
**Q:** Alias off-by-one bit looks like?  
**A:** Wrong device operates or nothing operates.

## Q16
**Q:** Good motor tag example vs bad?  
**A:** Good: `INF01_MTR01_Run_Cmd`. Bad: `Motor` / `M1` with no context.
