import { useNavigate } from 'react-router-dom';
import { useApp } from '../AppContext';
import { Button } from '../ui/button';
import { Calendar, TrendingUp, Star, ArrowLeft } from 'lucide-react';

export default function WeeklyReviewScreen() {
  const navigate = useNavigate();
  const { missions, streak } = useApp();

  const weekMissions = missions.filter(m => m.completed).slice(0, 5);
  const weeklyScore = weekMissions.length;

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 pb-12">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-900 mb-6"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-gray-900 mb-2">Weekly Review</h1>
          <p className="text-gray-500">Your progress this week</p>
        </div>
      </div>

      <div className="px-6 pb-6 -mt-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg mb-6">
          <div className="text-center mb-6">
            <div className="text-5xl mb-2">{weeklyScore}</div>
            <p className="text-gray-500">Missions completed</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🔥</div>
              <div className="text-gray-900 text-xl mb-1">{streak}</div>
              <div className="text-gray-500 text-sm">Day Streak</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">⭐</div>
              <div className="text-gray-900 text-xl mb-1">85%</div>
              <div className="text-gray-500 text-sm">Success Rate</div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <h3 className="text-gray-900">This Week's Missions</h3>

          {weekMissions.map((mission) => (
            <div
              key={mission.id}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">✓</span>
                </div>
                <div className="flex-1">
                  <div className="text-gray-900 mb-1">{mission.title}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{mission.date}</span>
                    {mission.postFeeling && (
                      <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded-full text-xs">
                        Felt {mission.postFeeling}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <h3 className="text-gray-900">Progress Insights</h3>
          </div>
          <p className="text-gray-700 mb-3">
            You completed {weeklyScore} missions this week! That's amazing progress. 
            {weeklyScore >= 5 ? " You're on fire! 🔥" : " Keep up the great work!"}
          </p>
          <p className="text-gray-600 text-sm">
            Remember: consistency is more important than perfection. Every mission builds your confidence.
          </p>
        </div>

        <Button
          onClick={() => navigate('/home')}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full h-12"
        >
          Continue Your Journey
        </Button>
      </div>
    </div>
  );
}
