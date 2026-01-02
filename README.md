# HumanPing

A React Native mobile app designed to help users build confidence through small, daily social interactions.

## 🎯 Features

- **Daily Missions**: Get personalized daily challenges to improve social confidence
- **Streak Tracking**: Build and maintain your streak by completing missions
- **Progress Monitoring**: Track completed missions, badges, and achievements
- **Feedback System**: Share thoughts and report issues
- **User Profiles**: Manage your account and preferences
- **Dark Mode**: Toggle between light and dark themes (Status bar support)

## 🛠️ Tech Stack

### Frontend
- **React Native** with Expo
- **TypeScript**
- **React Navigation** (Stack & Bottom Tabs)
- **Expo Linear Gradient**
- **AsyncStorage** for local data persistence

### Backend
- **Supabase** (PostgreSQL + Auth + Edge Functions)
- **Edge Functions** (Deno runtime)
  - `humanping-auth`: User authentication and profile management
  - `generate-daily-mission`: Daily mission generation logic

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Supabase CLI (for local backend development)
- iOS Simulator (Mac) or Android Emulator

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

The app is configured to use the production Supabase instance. Environment variables are loaded from `.env`:

```env
EXPO_PUBLIC_SUPABASE_URL=your-supabase-url
EXPO_PUBLIC_SUPABASE_KEY=your-supabase-anon-key
```

### 3. Run the App

**For iOS:**
```bash
npm run ios
```

**For Android:**
```bash
npm run android
```

**For Web:**
```bash
npm run web
```

**For LAN (mobile device on same network):**
```bash
npm run start:lan
```

## 🔧 Backend Development

### Run Backend Locally

Open a **separate terminal** and run:

```bash
npm run backend
```

This starts:
- 📊 **Supabase Studio**: http://localhost:54323
- 🔗 **Local API**: http://localhost:54321
- ⚡ **Edge Functions**: Running locally

### Stop Backend

```bash
npm run backend:stop
```

### Deploy Edge Functions

```bash
# Deploy all functions
npx supabase functions deploy

# Deploy specific function
npx supabase functions deploy humanping-auth
npx supabase functions deploy generate-daily-mission
```

### Database Migrations

```bash
# Push migrations to production
npx supabase db push

# Create new migration
npx supabase migration new migration_name

# Reset local database
npx supabase db reset
```

## 📱 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🏗️ Project Structure

```
HumanPing/
├── src/
│   ├── components/
│   │   ├── screens/          # All screen components
│   │   ├── ui/               # Reusable UI components
│   │   ├── AppContext.tsx    # Global state management
│   │   └── AppWrapper.tsx    # Theme wrapper
│   ├── contexts/
│   │   └── ThemeContext.tsx  # Dark mode context
│   ├── services/
│   │   └── supabase-services.ts  # API service layer
│   ├── hooks/
│   │   └── useTimeUntilMidnight.ts
│   └── lib/
│       └── supabase-client.ts
├── supabase/
│   ├── functions/            # Edge Functions
│   │   ├── humanping-auth/
│   │   └── generate-daily-mission/
│   └── migrations/           # Database migrations
├── App.tsx                   # App entry point
├── package.json
└── README.md
```

## 🗄️ Database Schema

### Main Tables
- **profiles**: User profiles with streak and mission counts
- **missions**: Daily missions assigned to users
- **feedback**: User feedback submissions
- **notification_preferences**: User notification settings
- **mission_templates**: Pre-defined mission templates

## 🔐 Authentication

The app uses Supabase Auth with JWT tokens:
- Email/password authentication
- Session management via `humanping-auth` Edge Function
- Automatic profile creation on signup

## 🎨 Screens

### Main Tabs
- **Home**: Dashboard with today's mission and stats
- **History**: Past missions and weekly reviews
- **Profile**: User profile, achievements, and settings

### Additional Screens
- Today's Mission
- Mission Flow (Instruction → Feeling → Task → Completion)
- Settings
- Edit Profile
- Feedback
- Help & Support
- Notifications
- Streaks

## 🌐 API Endpoints

### Edge Functions

**Profile Management:**
```
GET /functions/v1/humanping-auth/profile
POST /functions/v1/humanping-auth/register
```

**Mission Generation:**
```
POST /functions/v1/generate-daily-mission
Body: { "testMode": boolean }
```

## 🐛 Troubleshooting

### Common Issues

**1. Mission not appearing after completion:**
- Check console logs for mission generation errors
- Try the "Check for New Mission" button on Today's Mission screen
- Verify Edge Function logs in Supabase Dashboard

**2. Streak resets on refresh:**
- Fixed! Streak now persists in both state and user profile

**3. Feedback submission fails:**
- Check that feedback type is 'general', 'bug', or 'feature'
- Verify user is logged in

**4. LAN connection not working:**
- Update IP in `package.json` → `start:lan` script
- Run `ipconfig getifaddr en0` (Mac) to get current IP

### View Logs

**App Logs:**
```bash
# Check terminal running Expo
```

**Edge Function Logs:**
- Visit Supabase Dashboard → Edge Functions → Select function → Logs

**Database Logs:**
- Visit Supabase Dashboard → Database → Logs

## 📝 Development Notes

### Mission Generation Logic
1. User completes a mission
2. Streak is calculated based on consecutive daily completions
3. New mission is generated immediately (not next day)
4. Missions are prioritized: incomplete → completed

### Streak Calculation
- Counts consecutive days with completed missions
- Updates both `streak` state and `user.streak` object
- Persists to database `profiles` table

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Team

- Developer: [Your Name]
- Project: HumanPing

## 📞 Support

For issues or questions:
- Create an issue in the repository
- Use the in-app Feedback feature
- Email: support@humanping.app

---

**Built with ❤️ using React Native, Expo, and Supabase**
