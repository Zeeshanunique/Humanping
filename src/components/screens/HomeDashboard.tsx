import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../AppContext';
import { Button } from '../ui/button';
import { Menu, Bell, Target, TrendingUp, Calendar } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '../ui/sheet';
import BottomNavigation from '../BottomNavigation';

export default function HomeDashboard() {
  const navigate = useNavigate();
  const { user, streak, missions } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  const completedMissions = missions.filter(m => m.completed).length;
  const todaysMission = missions.find(m => !m.completed);

  return (
    <div className="min-h-screen w-full bg-white pb-20">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 pb-32 rounded-b-[32px]">
        <div className="flex items-center justify-between mb-8">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button className="text-gray-900">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-white p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navigate to different sections of the app
              </SheetDescription>
              <div className="p-6">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-3">
                    <span className="text-xl">{user?.name.charAt(0) || 'A'}</span>
                  </div>
                  <h3 className="text-gray-900">{user?.name || 'Alex Johnson'}</h3>
                  <p className="text-gray-500 text-sm">{user?.email || 'alex@example.com'}</p>
                </div>

                <nav className="space-y-2">
                  <button
                    onClick={() => { navigate('/profile'); setMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Target className="w-5 h-5" />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={() => { navigate('/history/all'); setMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>History</span>
                  </button>
                  <button
                    onClick={() => { navigate('/streaks'); setMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>Streaks</span>
                  </button>
                  <button
                    onClick={() => { navigate('/settings'); setMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span className="text-lg">⚙️</span>
                    <span>Settings</span>
                  </button>
                  <button
                    onClick={() => { navigate('/feedback'); setMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span className="text-lg">💬</span>
                    <span>Feedback</span>
                  </button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          <button
            onClick={() => navigate('/notifications')}
            className="text-gray-900 relative"
          >
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-gray-900 mb-1">Hello, {user?.name?.split(' ')[0] || 'Alex'}! 👋</h2>
          <p className="text-gray-500">Ready to grow today?</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔥</span>
                </div>
                <div>
                  <div className="text-gray-900 text-2xl">{streak}</div>
                  <p className="text-gray-500 text-sm">Day streak</p>
                </div>
              </div>
            </div>
            <div className="flex-1 text-right">
              <div className="text-gray-900 text-2xl mb-1">{completedMissions}</div>
              <p className="text-gray-500 text-sm">Missions done</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-20 pb-24">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-white/80 mb-1">Today's Mission</div>
              <h3 className="text-white mb-2">{todaysMission?.title || 'Complete your daily mission'}</h3>
              <p className="text-white/90 text-sm">
                {todaysMission?.description || 'Start a new mission to build confidence'}
              </p>
            </div>
          </div>

          <Button
            onClick={() => navigate('/todays-mission')}
            className="w-full bg-white text-blue-600 hover:bg-gray-100 rounded-full h-11"
          >
            Start Mission
          </Button>
        </div>

        <div className="space-y-4">
          <h3 className="text-gray-900">Quick Actions</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/history/week')}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-gray-900 text-sm">History</div>
              <div className="text-gray-500 text-xs">View progress</div>
            </button>

            <button
              onClick={() => navigate('/streaks')}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 text-orange-600" />
              </div>
              <div className="text-gray-900 text-sm">Streaks</div>
              <div className="text-gray-500 text-xs">{streak} days</div>
            </button>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}