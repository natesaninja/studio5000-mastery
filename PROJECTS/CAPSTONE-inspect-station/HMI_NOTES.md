# Capstone — operator interface considerations

Even without a PanelView, design as if ops will use a screen tomorrow.

## Screens (logical)

### 1. Main / overview
- Mode (Off / Manual / Auto)  
- State name / number  
- Product present  
- Last inspect result  
- Active fault banner  

### 2. Manual
- Device buttons (momentary where safe)  
- Permissive indicators (guard, e-stop OK)  
- Warning: Manual still respects safety/process permissives  

### 3. Alarms
- List ALM_ bits with plain language  
- First-out if you implement it  
- Reset only when conditions allow  

### 4. Config (maintenance level)
- Timeouts, debounce  
- Not on operator main screen without authority  

## Tag contract for HMI
| HMI object | PLC tag | Direction |
|------------|---------|-----------|
| Mode selector | | HMI → PLC |
| Start | | HMI → PLC |
| Reset | | HMI → PLC |
| State display | | PLC → HMI |
| Alarm banner | | PLC → HMI |

## Operator messages (write exact text)
| Situation | Message |
|-----------|---------|
| Guard open | |
| Fault timeout | |
| Reject confirm missing | |
| Ready for Auto | |

## What we will NOT put on HMI
- Fake safety reset that bypasses hardware  
- Hidden force toggles  
- Engineer-only debug without security note  

## Color / stack light mapping (optional)
| Color | Meaning |
|-------|---------|
| Green | |
| Red | |
| Amber | |
