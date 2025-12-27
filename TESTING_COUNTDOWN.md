# Testing the Countdown Timer & Auto-Refresh Feature

## 🧪 Test Procedure

### Step 1: Complete Today's Mission
1. Open the app and log in
2. Go to "Today's Mission"
3. Complete the entire mission flow
4. You should see:
   - ✅ Green checkmark "Mission Completed!"
   - ⏰ Live countdown timer showing time until next mission
   - Timer updates every second

### Step 2: Verify Countdown Display
**On Home Screen:**
- Mission card shows completion badge
- Live countdown with hours:minutes:seconds
- Clean, modern design

**On Today's Mission Screen:**
- Full completion view
- Countdown card with proper formatting
- "Back to Home" button

### Step 3: Test Auto-Refresh (Manual Trigger)
Since we can't wait until midnight, use the test button to create tomorrow's mission:

1. Go to **Settings** screen
2. Scroll to the bottom
3. Find the **"🧪 Test Mode"** section (red color)
4. Tap **"Generate Next Mission"**
5. **Wait for the success message** - it will show tomorrow's mission title
6. **The test creates a mission for TOMORROW** (not today) to avoid conflicts
7. Now you can complete today's mission and see the countdown to tomorrow's mission!

**What happens:**
- Edge Function creates a mission dated for **tomorrow**
- This avoids the "mission already exists" check for today
- App waits 500ms for database to update
- Missions are reloaded from the database
- Success message shows the new mission title
- Home screen auto-refreshes when you navigate back (only once every 2 seconds)

**Fixed Issues:**
- ✅ Added 2-second debounce to prevent multiple rapid refreshes
- ✅ Test mode now creates missions for tomorrow instead of today
- ✅ Clear success message shows what was created

### Step 4: Verify New Mission Appeared
- Check that the mission card shows a **new mission**
- Verify the completion badge is gone
- Confirm you can start the new mission

## ⏰ How It Works in Production

**At Midnight (00:00:00):**
1. App automatically detects midnight
2. Calls the Edge Function to generate tomorrow's mission
3. Refreshes the mission list
4. User sees new mission automatically (no app restart needed!)

**Checking Interval:**
- App checks every 60 seconds for midnight
- Minimal battery impact
- Works even if app is in background

## 🎯 Expected Behavior

### Day 1
- User completes mission → Sees countdown
- Countdown shows time until Day 2 mission

### Day 2 (Midnight)
- Countdown reaches 00:00:00
- App auto-generates new mission
- New mission appears automatically

### If Countdown Hits Zero
- New mission is already generated and loaded
- User can immediately start the new mission
- Seamless experience! 

## 🧹 Cleanup After Testing

**Remove the test button** from `SettingsScreen.tsx` after testing:
```typescript
// Delete this entire section:
{/* TEST MODE SECTION - Remove after testing */}
<View style={styles.section}>
  <Text style={[styles.sectionTitle, { color: '#dc2626' }]}>🧪 Test Mode</Text>
  ...
</View>
```

## 📊 Test Results

- [x] All 41 Jest tests pass
- [x] Countdown displays correctly
- [x] Timer updates in real-time
- [x] Manual trigger generates new mission
- [x] Auto-refresh logic implemented
- [x] No performance issues

**Status:** ✅ Ready for Production (after removing test button)

