# Flashcards — Faults, LEDs, connections, MSG

---

## Q1
**Q:** Major vs minor fault?  
**A:** **Major** may halt user program. **Minor** is warning; program often continues.

## Q2
**Q:** Clear vs fix?  
**A:** **Fix** removes cause. **Clear** only allows retry — clear without fix re-trips.

## Q3
**Q:** First actions on major fault?  
**A:** Make safe → go online → **record Type/Code/Description** → classify → fix → clear → verify.

## Q4
**Q:** CPU OK/RUN, all sensors dead — meter first?  
**A:** **Field 24 V** supply (not chassis power assumption).

## Q5
**Q:** No controller lights at all — first family?  
**A:** Power / PSU / fuses / plugs.

## Q6
**Q:** Module connection faulted means?  
**A:** Controller not successfully updating that device connection (not just one wire).

## Q7
**Q:** Inhibited module means?  
**A:** Configured/commanded not to connect.

## Q8
**Q:** MSG `.ER` means?  
**A:** Message error — check path, tags, size, target, network.

## Q9
**Q:** Produce/consume vs MSG one line each?  
**A:** **P/C** scheduled share. **MSG** on-demand transaction.

## Q10
**Q:** Heartbeat purpose between PLCs?  
**A:** Detect **stale** peer — sticky OK bits can lie.

## Q11
**Q:** LED ON, tag FALSE — top causes?  
**A:** Force, wrong alias, connection/project mapping.

## Q12
**Q:** After module swap, fault — first checks?  
**A:** Catalog, slot, electronic keying, field power.

## Q13
**Q:** Fault LED on controller — tool?  
**A:** Online fault log — don’t clear blindly.

## Q14
**Q:** Safety trip first tree?  
**A:** **DT-06** — do not force safety inputs as normal fix.

## Q15
**Q:** Power-cycle then remote I/O ghosted, local OK?  
**A:** Remote adapter power/network/connection (DT-COM / FC-06).
