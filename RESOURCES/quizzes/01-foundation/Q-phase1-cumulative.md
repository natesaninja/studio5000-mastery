# Phase 1 cumulative quiz

**Closed notes.** 20 questions. Pass ≥ 17/20 (85%).  
Take after Module 1.8 and before or with **P1**.

1. Scan steps?  
2. Task vs Program vs Routine?  
3. XIC true when? XIO true when?  
4. NC stop healthy input usually? Instruction on `Stop_OK`?  
5. Alias definition?  
6. Controller vs program scope for HMI?  
7. LED ON tag FALSE — top three causes?  
8. Seal-in vs OTL for conveyor motor default?  
9. Download vs upload directions?  
10. Force leftover risk?  
11. Six troubleshooting buckets?  
12. `Local:2:O.Data.0` means (conceptually)?  
13. Why permissives in series with seal-in, not only start?  
14. CPU OK, all sensors dead — meter what first?  
15. Two OTE on same run tag — issue?  
16. Compact vs ControlLogix programming model same? (Y/N)  
17. I/O map purpose?  
18. When refuse download?  
19. Cross-ref purpose?  
20. Teach in one sentence: PLC image vs voltmeter.

---

## Answers

1. Input image → logic → output image.  
2. Schedule / machine section / logic sheet.  
3. 1 / 0.  
4. 1; XIC on OK-named tag.  
5. Another name for same path/memory.  
6. Controller.  
7. Force, wrong alias, connection/config (field power if LED actually off — for ON LED: force/alias/connection).  
8. Seal-in OTE.  
9. Download PC→ctrl; upload ctrl→PC.  
10. False process state / defeated protection / surprise motion.  
11. Energy/mode, field, I/O, alias, logic, overrides.  
12. Local output module slot 2, data bit 0.  
13. Drop out while running when interlock opens.  
14. Field 24 V.  
15. Contention / unclear ownership.  
16. Y.  
17. Ties wire/device to path/alias for commissioning and TS.  
18. Wrong identity, no auth, unsafe/unknown.  
19. Find all uses of a tag.  
20. PLC acts on scanned image/tags; meter measures real terminal voltage now.

**Score: __ / 20**
