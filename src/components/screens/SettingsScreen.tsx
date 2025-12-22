import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../AppContext';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { ArrowLeft, ChevronRight, Bell, Moon, Volume2, Lock, HelpCircle, LogOut } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export default function SettingsScreen() {
  const navigate = useNavigate();
  const { logout } = useApp();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [sounds, setSounds] = useState(true);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 pb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-900 mb-6"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-gray-900">Settings</h1>
      </div>

      <div className="px-6 pb-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-gray-900 mb-3">Preferences</h3>
            <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-200">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-gray-900">Notifications</div>
                    <div className="text-gray-500 text-sm">Daily reminders</div>
                  </div>
                </div>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>

              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <Moon className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-gray-900">Dark Mode</div>
                    <div className="text-gray-500 text-sm">Theme preference</div>
                  </div>
                </div>
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              </div>

              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-gray-900">Sounds</div>
                    <div className="text-gray-500 text-sm">App sounds</div>
                  </div>
                </div>
                <Switch checked={sounds} onCheckedChange={setSounds} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 mb-3">Account</h3>
            <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-200">
              <button
                onClick={() => toast.info('Privacy settings coming soon')}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-gray-500" />
                  <div className="text-left">
                    <div className="text-gray-900">Privacy</div>
                    <div className="text-gray-500 text-sm">Manage data</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button
                onClick={() => navigate('/feedback')}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-gray-500" />
                  <div className="text-left">
                    <div className="text-gray-900">Help & Support</div>
                    <div className="text-gray-500 text-sm">Get assistance</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full rounded-full h-12 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
}
