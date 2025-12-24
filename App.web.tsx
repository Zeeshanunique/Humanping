import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './src/components/AppContext';
import { StatusBar } from 'expo-status-bar';
import { Toaster } from './src/components/ui/sonner';
import './src/index.css';
import './src/styles/globals.css';

import SplashScreen from './src/components/screens/SplashScreen';
import Intro1Screen from './src/components/screens/Intro1Screen';
import Intro2Screen from './src/components/screens/Intro2Screen';
import Intro3Screen from './src/components/screens/Intro3Screen';
import Intro4Screen from './src/components/screens/Intro4Screen';
import SignUpScreen from './src/components/screens/SignUpScreen';
import LoginScreen from './src/components/screens/LoginScreen';
import ForgotPasswordScreen from './src/components/screens/ForgotPasswordScreen';
import HomeDashboard from './src/components/screens/HomeDashboard';
import ProfileScreen from './src/components/screens/ProfileScreen';
import SettingsScreen from './src/components/screens/SettingsScreen';
import FeedbackScreen from './src/components/screens/FeedbackScreen';
import NotificationsScreen from './src/components/screens/NotificationsScreen';
import HistoryScreen from './src/components/screens/HistoryScreen';
import StreaksScreen from './src/components/screens/StreaksScreen';
import TodaysMissionScreen from './src/components/screens/TodaysMissionScreen';
import TaskInstructionScreen from './src/components/screens/TaskInstructionScreen';
import UserFeelingScreen from './src/components/screens/UserFeelingScreen';
import TaskSelectionScreen from './src/components/screens/TaskSelectionScreen';
import SuggestionScreen from './src/components/screens/SuggestionScreen';
import TaskStatusScreen from './src/components/screens/TaskStatusScreen';
import PostTaskFeelingScreen from './src/components/screens/PostTaskFeelingScreen';
import TaskCompletionScreen from './src/components/screens/TaskCompletionScreen';
import WeeklyReviewScreen from './src/components/screens/WeeklyReviewScreen';
import MissionsCompletedScreen from './src/components/screens/MissionsCompletedScreen';

export default function App() {
  return (
    <AppProvider>
      <StatusBar style="auto" />
      <Router>
        <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '28rem' }}>
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/intro1" element={<Intro1Screen />} />
              <Route path="/intro2" element={<Intro2Screen />} />
              <Route path="/intro3" element={<Intro3Screen />} />
              <Route path="/intro4" element={<Intro4Screen />} />
              <Route path="/signup" element={<SignUpScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
              <Route path="/home" element={<HomeDashboard />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/settings" element={<SettingsScreen />} />
              <Route path="/feedback" element={<FeedbackScreen />} />
              <Route path="/notifications" element={<NotificationsScreen />} />
              <Route path="/history/:period" element={<HistoryScreen />} />
              <Route path="/streaks" element={<StreaksScreen />} />
              <Route path="/todays-mission" element={<TodaysMissionScreen />} />
              <Route path="/task-instruction" element={<TaskInstructionScreen />} />
              <Route path="/user-feeling" element={<UserFeelingScreen />} />
              <Route path="/task-selection" element={<TaskSelectionScreen />} />
              <Route path="/suggestion" element={<SuggestionScreen />} />
              <Route path="/task-status" element={<TaskStatusScreen />} />
              <Route path="/post-task-feeling" element={<PostTaskFeelingScreen />} />
              <Route path="/task-completion" element={<TaskCompletionScreen />} />
              <Route path="/weekly-review" element={<WeeklyReviewScreen />} />
              <Route path="/missions-completed" element={<MissionsCompletedScreen />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
        <Toaster />
      </Router>
    </AppProvider>
  );
}

