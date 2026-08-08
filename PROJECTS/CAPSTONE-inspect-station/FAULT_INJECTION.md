# Capstone fault injection plan

Inject **one at a time**. Restore clean between faults. Log RCA in `RCA_LOG.md`.

| # | Fault to inject | How you inject | Tree to use | Done |
|---|-----------------|----------------|-------------|------|
| 1 | | | | ☐ |
| 2 | | | | ☐ |
| 3 | | | | ☐ |
| 4 | | | | ☐ |

## Suggested set
1. Wrong divert alias  
2. State transition never true (inspect bits both false forever)  
3. Timeout PRE too small (nuisance trip)  
4. Force on product present  
5. Sequence routine not JSR’d  

## Rules
- No shotgun multi-edits  
- Max 15 minutes isolate each before consulting notes  
- Forces removed after each  
