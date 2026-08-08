# Cheatsheet — Status bits & common structures

## TIMER (TON / TOF / RTO)
| Member | Meaning |
|--------|---------|
| `.PRE` | Preset (ms typical) |
| `.ACC` | Accumulated |
| `.EN` | Rung condition enabling |
| `.TT` | Timing |
| `.DN` | Done |

**TS tip:** `.DN` never true → rung not staying true, PRE=0, or wrong timer type (TON clears ACC when false).

## COUNTER (CTU / CTD)
| Member | Meaning |
|--------|---------|
| `.PRE` | Preset |
| `.ACC` | Count |
| `.CU` / `.CD` | Count up/down enable semantics |
| `.DN` | ACC ≥ PRE (typical CTU done) |
| `.OV` / `.UN` | Overflow / underflow |

**TS tip:** Free-running counts → missing ONS on field sensor.

## MSG
| Member | Meaning |
|--------|---------|
| `.EN` | Enabled / active semantics |
| `.DN` | Success done |
| `.ER` | Error |
| `.ERR` / `.EXERR` | Error codes |
| `.EW` | Waiting on network (see version help) |

**TS tip:** `.ER` → path, tag, size, target offline (FC-04).

## Digital I/O mental model
| See | Bit idea |
|-----|----------|
| Input image | What PLC thinks DI is |
| Output image | What PLC commands DO to be |
| Force | Override image/behavior |

## Connection / module (online properties)
| Status idea | Meaning |
|-------------|---------|
| Running / OK | Connection good |
| Faulted | See FC-02 / FC-06 |
| Inhibited | Won’t connect by design/setting |
| Timed out | Lost device |

## OTE / OTL reminders
| Inst | Status idea |
|------|-------------|
| OTE | Follows rung each scan (non-retentive coil behavior) |
| OTL | Stays 1 until OTU |
| OTU | Clears latch |

## One-shot
| Inst | Idea |
|------|------|
| ONS | True one scan on rising edge of storage pair |

## Compare / math quick fails
| Issue | Look for |
|-------|----------|
| Always alarm | SP wrong units |
| Never alarm | Compare direction inverted |
| Math “weird” | INT truncate; DIV by 0 major risk |

## Controller mode (conceptual)
| Mode | Logic execution |
|------|-----------------|
| Run / Remote Run | Executing (if not faulted) |
| Program | Not running user logic as in production |
| Faulted | Major fault path |

Confirm live in Studio; don’t trust rumor.
