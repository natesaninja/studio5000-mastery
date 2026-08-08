# Quiz 1.8 — First troubleshooting

**Closed notes.** 10 questions. Pass ≥ 8/10.

1. List the **6 buckets** in order you prefer to apply.  
2. Output tag TRUE, starter does not pull in. Give the first three checks.  
3. Cross-reference is used for what?  
4. Why write RCA after a fix?  
5. Shotgun online edits are bad because?  
6. Input LED ON, tag FALSE — name the decision tree.  
7. Can’t download — name the decision tree.  
8. Won’t start — name the decision tree.  
9. True/False: HMI alone is sufficient proof of field state.  
10. Scenario: Guard prox LED on at device, module input LED on, tag FALSE. Most likely bucket family?

---

## Answers

1. Energy/mode; field; I/O config; alias/tag; logic; overrides. (Order may vary slightly; all six must appear.)  
2. DO module LED; force table; alias path; field voltage at coil; output supply/fuse. (Any solid first three.)  
3. Finding every use of a tag (reads/writes) to see ownership and path.  
4. Handoff, learning, prevent repeat, accountability.  
5. Introduce new faults; hide root cause; unsafe side effects.  
6. **DT-02**  
7. **DT-03**  
8. **DT-01**  
9. **False**  
10. Alias / forces / connection image (buckets 4, 6, 3) — field and module look good so software path is suspect.

**Score: __ / 10**
