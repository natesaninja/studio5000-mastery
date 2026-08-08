# 2.8 — Arrays, strings intro, HMI-ready tags

## Learning objectives

- Use simple DINT/REAL arrays
- Apply a site-ready naming standard for HMI
- Prefer controller-scoped HMI interface tags
- Separate CMD / STS / ALM / CFG namespaces

**Time:** 4–5 h | **Prereq:** 2.4  
**Lab:** `../../LABS/02-intermediate/LAB-2.8-hmi-tagset.md`  
**Template:** `../../RESOURCES/templates/tag-naming-standard.md`

---

## Electrician map

| Idea | Tag design |
|------|------------|
| Terminal strip of similar signals | Array |
| Points landed for operators | HMI interface tags |
| Wire numbers only electricians love | Internal tags (still named well) |

---

## Suggested prefixes

| Prefix | Meaning |
|--------|---------|
| `CMD_` | Command from HMI/ops |
| `STS_` | Status to HMI |
| `ALM_` | Alarm bits |
| `CFG_` | Setpoints / config |
| `RAW_` | Unscaled |
| `EU_` | Engineering units |

Example: `CMD_PMP01_Start`, `STS_PMP01_Running`, `ALM_PMP01_Fault`, `EU_TNK01_Level_Gal`

---

## Teach-back

> “Why shouldn’t HMI bits be buried as program-scoped obscure names?”

## Next

→ [2.9 Intermediate troubleshooting](09-intermediate-troubleshoot.md)
