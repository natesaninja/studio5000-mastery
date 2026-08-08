# DT-03 — Can’t download / can’t go online

**Use for:** First connect to Emulate, CompactLogix trainer, or cell PLC.

```
│
├─ See controller in communications browser (Who Active)?
│  NO → cable, IP/subnet, switch, USB driver, wrong path, controller power (DT-1.2)
│  YES ↓
│
├─ Correct controller selected (name / path / physical label match)?
│  NO → STOP. Verify identity. Packaging halls often have lookalike panels.
│  YES ↓
│
├─ Revision / firmware / project type mismatch messages?
│  → align Studio version options, firmware, or project controller type
│
├─ Controller keyswitch / mode blocking action?
│  → PROG/REM/RUN rules for your hardware; site procedure
│
├─ Someone else online with exclusive access?
│  → coordinate
│
├─ Emulate-specific: virtual chassis/controller running?
│  NO → start Emulate first
│
└─ Corrupted path / stale driver?
   → refresh path; restart comms service as last resort
```

## Before every production download
1. Panel label  
2. Controller name in project  
3. Path in browser  
4. Authorization  
5. Known ACD backup  
