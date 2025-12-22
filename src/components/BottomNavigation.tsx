import { useNavigate, useLocation } from 'react-router-dom';
import { Home, History, User } from 'lucide-react';

export default function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 z-50">
      <div className="max-w-md mx-auto px-6 py-4">
        <div className="flex items-center justify-around">
          {/* Home Button */}
          <button
            onClick={() => navigate('/home')}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/home')
                ? 'text-blue-600'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isActive('/home') ? 'bg-blue-50' : ''
              }`}
            >
              <Home className="w-5 h-5" />
            </div>
            <span className="text-xs">Home</span>
          </button>

          {/* History Button */}
          <button
            onClick={() => navigate('/history/all')}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/history')
                ? 'text-blue-600'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isActive('/history') ? 'bg-blue-50' : ''
              }`}
            >
              <History className="w-5 h-5" />
            </div>
            <span className="text-xs">History</span>
          </button>

          {/* Profile Button */}
          <button
            onClick={() => navigate('/profile')}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/profile')
                ? 'text-blue-600'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isActive('/profile') ? 'bg-blue-50' : ''
              }`}
            >
              <User className="w-5 h-5" />
            </div>
            <span className="text-xs">Me</span>
          </button>
        </div>
      </div>
    </div>
  );
}
