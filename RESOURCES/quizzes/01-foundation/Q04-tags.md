# Quiz 1.4 — Tags

**Closed notes.** 10 questions. Pass ≥ 8/10.

1. What is an **alias** tag?  
2. Base tag vs alias — key difference.  
3. Preferred scope for I/O aliases and HMI commands?  
4. Default integer workhorse type in Logix?  
5. Why did tag-based Logix replace B3/N7 style addresses for most work?  
6. True/False: An alias makes a second copy of the bit that can differ from the original.  
7. Is `INF01_MTR01_Run_Cmd` a better name than `Motor`? Why?  
8. BOOL is used for ________.  
9. Program-scoped tag symptom when HMI needs it?  
10. Map: labeled terminal strip of like signals → ________ concept (preview arrays later; for now “consistent naming”).

---

## Answers

1. A name that references another tag or I/O path — same underlying point.  
2. Base owns memory; alias is another name for existing path/memory.  
3. **Controller** scope.  
4. **DINT**.  
5. Readability, reuse, HMI, less brittle when hardware landing changes.  
6. **False**.  
7. Yes — area + equipment + role; multi-motor cells won’t collide.  
8. Discrete true/false (contacts/coils).  
9. HMI/other programs can’t see it (or hard to access).  
10. Consistent tag naming pattern (later: arrays/UDTs).

**Score: __ / 10**
