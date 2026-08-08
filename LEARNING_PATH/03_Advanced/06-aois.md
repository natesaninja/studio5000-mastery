# 3.6 — Add-On Instructions (AOIs)

## Learning objectives

- Create an AOI with In / Out / InOut parameters
- Implement a motor starter AOI (perm, fault, reset)
- Test AOIs before mass deployment
- Know when *not* to make an AOI

**Time:** 6–8 h | **Prereq:** 3.5  
**Lab:** `../../LABS/03-advanced/LAB-3.6-motor-aoi.md`

---

## Electrician map

AOI ≈ **standard control module / typical circuit** you drop in repeatedly with consistent behavior.

---

## Parameter mindset

| Direction | Use |
|-----------|-----|
| Input | Commands, permissives, config |
| Output | Status, alarms |
| InOut | Large structures / UDT instance |

---

## When not to AOI

- One-off logic  
- You don’t understand the internals (black boxes at 2 a.m. hurt)  
- Site forbids AOIs without approval  

---

## Teach-back

> “Instance vs definition — what’s the difference when an AOI ‘doesn’t work’?”

## Next

→ [3.7 Messaging / produce-consume](07-messaging-produce-consume.md)
