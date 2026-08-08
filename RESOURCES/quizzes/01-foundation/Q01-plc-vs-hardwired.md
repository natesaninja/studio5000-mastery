# Quiz 1.1 — PLC vs hardwired

**Closed notes.** 10 questions. Pass ≥ 8/10.

1. List the three major steps of a continuous PLC scan in order.  
2. Why can a module input LED be ON while the alias tag is FALSE? Give two reasons.  
3. A Stop PB is wired NC. The button is not pressed and wiring is healthy. Is the DI tag usually 0 or 1?  
4. Name two things a standard PLC program must **not** be assumed to replace.  
5. Map: hardwired holding contact across Start → ________ in ladder.  
6. True/False: If the CPU RUN light is on, the motor starter must have coil voltage.  
7. In electrician language, what is the “input image”?  
8. Why might a packaging plant keep a hardwired safety contactor **and** a PLC?  
9. You meter 24 V at the starter coil, but the PLC run tag is false. Where is the problem likely **not**?  
10. Teach-back (short answer): Why doesn’t the PLC “feel” a stuck contact like a voltmeter?

---

## Answers

1. Read inputs (input image) → solve logic → write outputs (output image).  
2. Force; wrong alias; inhibited/bad connection; wrong project/slot; simulation. (Any two.)  
3. **1** (ON) typically.  
4. LOTO; safety-rated personnel protection without a proper safety system.  
5. Seal-in branch with run bit (XIC of run around start) + OTE.  
6. **False.**  
7. The PLC’s sampled copy of what it believes inputs are for this scan.  
8. Safety-rated drop-out vs flexible sequence/interlocks/diagnostics in PLC.  
9. Not the PLC output command path — field already has coil power; look field-side or feedback expectations. (If tag false and voltage present, something else is energizing coil — jumper/HOA — or meter point wrong.)  
   *Preferred teaching answer:* Tag false + voltage at coil → external override/HOA/jumper, not “PLC turning it on.”  
10. It samples into an image and solves logic; it doesn’t continuously measure the terminal like a meter.

**Score: __ / 10**
