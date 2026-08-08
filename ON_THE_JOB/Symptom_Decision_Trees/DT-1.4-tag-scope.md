# DT-1.4 — Tag missing / wrong scope / alias confusion

```
START: Tag error, HMI missing point, or "two names" confusion
│
├─ Exact name match (underscore, INF01 vs INFR01)?
│  NO → rename/typo
│  YES ↓
│
├─ Scope: Controller vs Program
│  HMI/MSG needs controller-scoped interface tags
│  YES ↓
│
├─ Is it an Alias?
│  YES → open Alias For path; valid module/bit?
│        Remember: alias is NOT a separate copy
│  NO → base tag; who writes it (OTE/OTL/MOV)?
│
├─ Online monitor showing ?
│  Bad connection / not online / wrong controller
│
└─ Duplicate names in different scopes?
   → Qualify mentally: Program.Tag vs Controller.Tag
```
