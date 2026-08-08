# Template — UDT_Motor (suggested members)

```
UDT_Motor
├── Cmd
│   ├── Start      BOOL
│   ├── Stop       BOOL
│   ├── Reset      BOOL
│   └── Manual     BOOL
├── Sts
│   ├── Running    BOOL
│   ├── Ready      BOOL
│   └── ModeAuto   BOOL
├── Alm
│   ├── Fault      BOOL
│   └── CommFault  BOOL
└── Cfg
    ├── StartDelay_ms  DINT
    └── PermissiveMask DINT (optional)
```

Wire AOI InOut to an instance of this UDT.
