# Missing Screens & Features Analysis

## Comparison: Figma Design vs Current Implementation

### ✅ **COMPLETED SCREENS** (23/27)
All major screens exist, but some need design updates to match Figma.

---

## 🔴 **MISSING SCREENS** (4 screens)

### 1. **Intro-4 Screen** (`4.intro-4`)
- **Figma Reference**: Frame `9:1959` - "4.intro-4"
- **Status**: ❌ Missing
- **Content**: 
  - Title: "Small actions build confidence"
  - Subtitle: "Feel more connected to the world around you, without anxiety."
  - Back button (not Skip)
  - 4-dot pagination indicator
  - "Get Started" button
- **Current**: We have `Intro3Screen.tsx` but it doesn't match this design
- **Action**: Create `Intro4Screen.tsx` or update `Intro3Screen.tsx` to match Figma

### 2. **Mission's Completed / Achievement Screen** (`10. Mission's Completed`)
- **Figma Reference**: Frame `4:450` - "10. Mission's Completed"
- **Status**: ❌ Missing
- **Content**:
  - Header: "Your Achievement"
  - Total Completed: Large number (48) with "Small actions taken"
  - Stats cards: "This Month" (12) and "This Week" (4)
  - Milestones section:
    - First Hello (Completed first mission) ✅
    - Week Warrior (7 day streak) ✅
    - Social Butterfly (50 missions completed) ✅
- **Current**: Achievements shown in ProfileScreen but not as dedicated screen
- **Action**: Create `MissionsCompletedScreen.tsx` or `AchievementScreen.tsx`

### 3. **Hamburger Menu Screen** (`9. ham_menu`)
- **Figma Reference**: Frame `2:304` - "9. ham_menu"
- **Status**: ⚠️ Partial (Modal exists, but not matching Figma design)
- **Content**:
  - Side drawer overlay
  - HumanPing logo at top
  - Menu items: Dashboard, Profile, History, Settings, Feedback
  - Log Out button at bottom
- **Current**: Modal drawer exists in `HomeDashboard.tsx` but design differs
- **Action**: Update drawer design to match Figma

### 4. **Dedicated History Tab Views**
- **Figma Reference**: Frames `6:809`, `6:907`, `6:1005` - History with tabs
- **Status**: ⚠️ Partial (Screen exists but tabs may not match exactly)
- **Content**: Tab buttons for "All Time", "Last week", "Last month"
- **Action**: Verify tab implementation matches Figma design

---

## 🟡 **MISSING FEATURES** (Design & Functionality Gaps)

### **Sign-Up Screen** (`5. Sign-up`)
- ❌ Missing "Confirm Password" field (Figma shows it)
- ❌ Missing "Name" field at top (Figma shows Name field before Email)
- ⚠️ Current order: Email → Password → (missing Confirm Password)
- **Action**: Add Confirm Password field and reorder fields to match Figma

### **Home Dashboard** (`8.Home_dashboard`)
- ❌ Missing date display: "Thursday, December 18" (Figma shows it)
- ❌ Missing "Last" mission card (shows "View history" link)
- ⚠️ Mission card design differs from Figma
- ⚠️ Stats cards layout differs (Figma shows 2 cards side-by-side)
- **Action**: Update layout and add missing elements

### **Profile Screen** (`11. Profile`)
- ❌ Missing "Notification Preferences" link (Figma shows it in Account section)
- ⚠️ Stats display differs (Figma shows Missions and Day Streak in cards)
- **Action**: Add Notification Preferences navigation link

### **Settings Screen** (`12. Settings`)
- ✅ Context Preferences exist (At Work, At Home, In Public)
- ✅ Privacy & Data section exists
- ✅ Log Out button exists
- ⚠️ Design may need minor adjustments

### **Today's Mission Screen** (`19. Today's_Mission`)
- ❌ Missing "Daily Challenge" badge/label
- ❌ Missing "Safe" and "Anywhere" badges (Figma shows them)
- ❌ Missing "Why this helps" section with explanation text
- ⚠️ Current design differs significantly
- **Action**: Update to match Figma layout exactly

### **Task Instruction Screen** (`20. Task_Instruction`)
- ⚠️ Design may differ slightly
- ✅ Has "Are you ready?" question
- ✅ Has Yes/Maybe Later buttons
- **Action**: Verify design matches Figma

### **Task Status Screen** (`24. task_status`)
- ❌ Missing "Back to Home" button at top (Figma shows it)
- ⚠️ Layout may differ
- **Action**: Add back button and verify layout

### **Post Task Feeling Screen** (`25. how_user_felt_after_task`)
- ⚠️ Design exists but may need verification
- ✅ Has emoji buttons (Good, Neutral, Awkward)
- ✅ Has optional note field
- **Action**: Verify exact design matches

### **Task Completion Screen** (`26. Task_completion`)
- ⚠️ Design exists but may differ from Figma
- ✅ Has "Great Job!" message
- ✅ Has completion message
- ✅ Has buttons (Back to Dashboard, Share Achievement)
- **Action**: Verify exact design matches

### **Weekly Review Screen** (`27. This_Week_mission_completed_review`)
- ⚠️ Screen exists but may need design verification
- ✅ Has week summary
- ✅ Has progress (6/7 completed, 85%)
- ✅ Has "Most Common Feeling" section
- **Action**: Verify exact design matches Figma

---

## 🟢 **DESIGN TOKENS TO EXTRACT**

### Colors
- Need to verify exact color values from Figma
- Current implementation uses Tailwind colors which may differ

### Typography
- Font sizes and weights need verification
- Line heights and spacing

### Spacing
- Padding and margin values
- Component spacing

### Components
- Button styles
- Input field styles
- Card styles
- Badge styles

---

## 📋 **PRIORITY IMPLEMENTATION ORDER**

### **High Priority** (Core Missing Features)
1. ✅ Add "Confirm Password" to Sign-Up screen
2. ✅ Create Intro-4 screen or update Intro-3
3. ✅ Create Mission's Completed / Achievement screen
4. ✅ Update Home Dashboard to match Figma (date, Last mission card)
5. ✅ Add "Notification Preferences" link to Profile screen

### **Medium Priority** (Design Updates)
6. ✅ Update Today's Mission screen design (badges, "Why this helps")
7. ✅ Update Hamburger Menu drawer design
8. ✅ Add "Back to Home" button to Task Status screen
9. ✅ Verify and update Task Completion screen design

### **Low Priority** (Polish)
10. ✅ Extract and apply design tokens
11. ✅ Verify all screens match Figma exactly
12. ✅ Add missing micro-interactions

---

## 📝 **NOTES**

- Most screens exist but need design refinements
- Navigation structure is correct
- Missing screens are mostly variations or dedicated views
- Focus should be on matching Figma design exactly


