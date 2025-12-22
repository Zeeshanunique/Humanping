import { useNavigate } from 'react-router-dom';
import { useApp } from '../AppContext';
import { ArrowLeft, Flame, Calendar, TrendingUp } from 'lucide-react';
import BottomNavigation from '../BottomNavigation';

export default function StreaksScreen() {
  const navigate = useNavigate();
  const { streak } = useApp();

  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const completedDays = [true, true, true, true, true, false, false];

  return (
    <div className="min-h-screen w-full bg-white pb-20">
      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 pb-12">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-900 mb-6"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Flame className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-gray-900 mb-2">{streak} Day Streak</h1>
          <p className="text-gray-500">Keep it going!</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {weekDays.map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-gray-500 text-xs mb-2">{day}</div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${
                    completedDays[index]
                      ? 'bg-gradient-to-br from-orange-400 to-red-500 text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {index + 18}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="space-y-4">
          <h3 className="text-gray-900">Statistics</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <Flame className="w-5 h-5 text-orange-600" />
              </div>
              <div className="text-gray-900 text-2xl mb-1">{streak}</div>
              <div className="text-gray-500 text-sm">Current Streak</div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-gray-900 text-2xl mb-1">12</div>
              <div className="text-gray-500 text-sm">Longest Streak</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-6 h-6 text-orange-600" />
              <h3 className="text-gray-900">This Week</h3>
            </div>
            <p className="text-gray-600 mb-4">
              You've completed 5 missions this week. Just 2 more days to complete a full week!
            </p>
            <div className="w-full bg-white rounded-full h-2">
              <div
                className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full transition-all"
                style={{ width: '71%' }}
              />
            </div>
            <p className="text-gray-500 text-sm mt-2">5 of 7 days</p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-gray-900 mb-2">Streak Goal</h3>
              <p className="text-gray-600 mb-3">
                Complete missions for 30 consecutive days to unlock the "Unstoppable" badge
              </p>
              <div className="text-gray-500 text-sm">
                {30 - streak} days to go
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}