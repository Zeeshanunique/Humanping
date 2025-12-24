import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppProvider } from './src/components/AppContext';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
// CSS import removed for web compatibility - styles handled by NativeWind/Tailwind

import SplashScreen from './src/components/screens/SplashScreen';
import Intro1Screen from './src/components/screens/Intro1Screen';
import Intro2Screen from './src/components/screens/Intro2Screen';
import Intro3Screen from './src/components/screens/Intro3Screen';
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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeDashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="HistoryTab"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" size={size} color={color} />
          ),
        }}
        initialParams={{ period: 'all' }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <AppProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Intro1" component={Intro1Screen} />
          <Stack.Screen name="Intro2" component={Intro2Screen} />
          <Stack.Screen name="Intro3" component={Intro3Screen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="Main" component={MainTabs} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Feedback" component={FeedbackScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="Streaks" component={StreaksScreen} />
          <Stack.Screen name="TodaysMission" component={TodaysMissionScreen} />
          <Stack.Screen name="TaskInstruction" component={TaskInstructionScreen} />
          <Stack.Screen name="UserFeeling" component={UserFeelingScreen} />
          <Stack.Screen name="TaskSelection" component={TaskSelectionScreen} />
          <Stack.Screen name="Suggestion" component={SuggestionScreen} />
          <Stack.Screen name="TaskStatus" component={TaskStatusScreen} />
          <Stack.Screen name="PostTaskFeeling" component={PostTaskFeelingScreen} />
          <Stack.Screen name="TaskCompletion" component={TaskCompletionScreen} />
          <Stack.Screen name="WeeklyReview" component={WeeklyReviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

