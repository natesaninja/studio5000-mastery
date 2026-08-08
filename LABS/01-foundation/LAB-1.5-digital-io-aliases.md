# LAB 1.5 — Digital I/O and aliases (infeed map)

## Goal
Configure DI/DO (or emulate) and alias every infeed point. Prove a wrong alias symptom.

## Time
90–120 min

---

## Procedure

### Part A — Add modules
1. I/O Configuration → add DI module (note slot).  
2. Add DO module (note slot).  
3. Document catalog + slot + keying in I/O map.

### Part B — Alias table (fill your real paths)

| Alias tag | In/Out | Path (yours) | Wire # | Device |
|-----------|--------|--------------|--------|--------|
| INF01_Start_PB | In | | 401 | Start PB |
| INF01_Stop_OK | In | | 402 | Stop PB NC |
| INF01_OL_OK | In | | 403 | OL aux |
| INF01_Guard_OK | In | | 404 | Guard prox |
| INF01_Dsch_Clear | In | | 405 | Photoeye |
| INF01_EStop_OK | In | | 406 | Safety OK |
| INF01_Fault_Reset | In | | 407 | Reset PB |
| INF01_MTR01_Run_Cmd | Out | | 501 | Starter coil |
| INF01_Run_Light | Out | | 502 | Green light |
| INF01_Fault_Light | Out | | 503 | Red light |

### Part C — Verify
**Emulate:** toggle input data bits; watch aliases in Monitor Tags.  
**Hardware:** safe point-to-point; do not defeat safety.

### Part D — Injected fault (required)
1. Alias `INF01_MTR01_Run_Cmd` to the **wrong** DO bit intentionally.  
2. Write: expected symptom if logic turns Run on.  
3. Fix alias.  
4. Re-verify.

### Part E — Artifact
Save `output/INF01_IO_MAP.md` complete.

---

## Pass criteria
- [ ] All aliases set  
- [ ] Verification notes  
- [ ] Wrong-alias RCA written  
- [ ] I/O map file saved  

## DT practice
Run one symptom through `DT-02-io-not-updating.md`.
