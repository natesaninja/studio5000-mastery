# Studio 5000 Mastery

**Two purposes:**

1. **Learning guide** — industrial electrician novice → expert Logix programmer  
2. **On-the-job reference** — open while troubleshooting real machines  

**Phone site (GitHub Pages):** https://natesaninja.github.io/studio5000-mastery/  
**GitHub repo:** https://github.com/natesaninja/studio5000-mastery  
**Phone tips:** [PHONE.md](PHONE.md)

---

## Jump now

| Situation | Open |
|-----------|------|
| **On your phone / browser** | [00_START_HERE.md](00_START_HERE.md) via the site (`index.html`) |
| **Machine down at work** | [**ON_THE_JOB/**](ON_THE_JOB/README.md) |
| **Studying / building skill** | [**LEARNING_PATH/**](LEARNING_PATH/README.md) |
| First time here | [**00_START_HERE.md**](00_START_HERE.md) |
| Full map of both purposes | [**MASTER_OUTLINE.md**](MASTER_OUTLINE.md) |

### At work — 3 clicks

1. [Finding_the_Problem_Area.md](ON_THE_JOB/Finding_the_Problem_Area.md)  
2. [What_to_Check_First.md](ON_THE_JOB/What_to_Check_First.md)  
3. [Symptom_Decision_Trees/](ON_THE_JOB/Symptom_Decision_Trees/)  

### Phone / GitHub Pages

| Step | Action |
|------|--------|
| 1 | Open the **Pages** URL for this repo (Settings → Pages, or link in the repo About) |
| 2 | **Add to Home Screen** for app-like use |
| 3 | Use top nav **Job aid** or the menu button |
| 4 | Search for symptoms (`won’t start`, `force`, `major fault`) |

Local preview (from this folder):

```bash
npx --yes serve -l 3000
```

Then open `http://localhost:3000` on your phone (same Wi‑Fi) or PC.

---

## Structure

```
studio5000-mastery/
├── 00_START_HERE.md
├── MASTER_OUTLINE.md
├── ON_THE_JOB/                 ← job aid (trees, tools, check-first, codes)
├── LEARNING_PATH/              ← progressive modules + Retention/
├── LABS/
├── PROJECTS/                   ← minis → CAPSTONE → P5 recovery
└── RESOURCES/                  ← quizzes, templates, detailed outline
```

---

## Learning path (summary)

| Phase | Focus | Gate |
|-------|--------|------|
| Foundation | Scan, tags, I/O, ladder, online | P1 |
| Intermediate | Timers, analog, trends, online edit | P2 |
| Advanced | Languages, UDT/AOI, messaging | P3 |
| Expert | Safety, multi-CPU, triage | CAPSTONE + P5 |

High retention: **lab + quiz + teach-back + spaced flashcards** every phase.  
Details: [LEARNING_PATH/README.md](LEARNING_PATH/README.md) · [LEARNING_PATH/Retention/](LEARNING_PATH/Retention/)

---

## Who it’s for

Electricians who know schematics, motors, sensors, relays, VFDs — and need Studio 5000 / ControlLogix / CompactLogix fluency and floor-grade troubleshooting.

---

## Safety

Site LOTO and authorization always apply. This material is educational; use licensed software and official Rockwell documentation for firmware-specific codes.
