import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './components/AppContext';
import { Toaster } from './components/ui/sonner';
import SplashScreen from './components/screens/SplashScreen';
import Intro1Screen from './components/screens/Intro1Screen';
import Intro2Screen from './components/screens/Intro2Screen';
import Intro3Screen from './components/screens/Intro3Screen';
import SignUpScreen from './components/screens/SignUpScreen';
import LoginScreen from './components/screens/LoginScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import HomeDashboard from './components/screens/HomeDashboard';
import ProfileScreen from './components/screens/ProfileScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import FeedbackScreen from './components/screens/FeedbackScreen';
import NotificationsScreen from './components/screens/NotificationsScreen';
import HistoryScreen from './components/screens/HistoryScreen';
import StreaksScreen from './components/screens/StreaksScreen';
import TodaysMissionScreen from './components/screens/TodaysMissionScreen';
import TaskInstructionScreen from './components/screens/TaskInstructionScreen';
import UserFeelingScreen from './components/screens/UserFeelingScreen';
import TaskSelectionScreen from './components/screens/TaskSelectionScreen';
import SuggestionScreen from './components/screens/SuggestionScreen';
import TaskStatusScreen from './components/screens/TaskStatusScreen';
import PostTaskFeelingScreen from './components/screens/PostTaskFeelingScreen';
import TaskCompletionScreen from './components/screens/TaskCompletionScreen';
import WeeklyReviewScreen from './components/screens/WeeklyReviewScreen';

export default function App() {
  return (
    <Router>
      <AppProvider>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="w-full max-w-md">
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/intro1" element={<Intro1Screen />} />
              <Route path="/intro2" element={<Intro2Screen />} />
              <Route path="/intro3" element={<Intro3Screen />} />
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
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
        <Toaster />
      </AppProvider>
    </Router>
  );
}