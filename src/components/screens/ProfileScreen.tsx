import { useNavigate } from 'react-router-dom';
import { useApp } from '../AppContext';
import { Button } from '../ui/button';
import { ArrowLeft, Award, Target, Calendar, Mail } from 'lucide-react';
import BottomNavigation from '../BottomNavigation';

export default function ProfileScreen() {
  const navigate = useNavigate();
  const { user, streak, missions } = useApp();

  const completedMissions = missions.filter(m => m.completed).length;
  const joinDate = user?.joinDate ? new Date(user.joinDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'November 2024';

  return (
    <div className="min-h-screen w-full bg-white pb-20">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 pb-12">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-900 mb-6"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-4">
            <span className="text-3xl">{user?.name.charAt(0) || 'A'}</span>
          </div>
          <h2 className="text-gray-900 mb-1">{user?.name || 'Alex Johnson'}</h2>
          <p className="text-gray-500 text-sm mb-4">{user?.email || 'alex@example.com'}</p>
          
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Joined {joinDate}</span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-xl">🔥</span>
            </div>
            <div className="text-gray-900 text-xl mb-1">{streak}</div>
            <div className="text-gray-500 text-xs">Day Streak</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-gray-900 text-xl mb-1">{completedMissions}</div>
            <div className="text-gray-500 text-xs">Completed</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-gray-900 text-xl mb-1">12</div>
            <div className="text-gray-500 text-xs">Badges</div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="text-gray-900">Recent Achievements</h3>
          
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-200 rounded-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <div className="text-gray-900">5 Day Streak</div>
                <div className="text-gray-500 text-sm">Keep it up!</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <div>
                <div className="text-gray-900">First Mission</div>
                <div className="text-gray-500 text-sm">Completed your first mission</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">💪</span>
              </div>
              <div>
                <div className="text-gray-900">Social Butterfly</div>
                <div className="text-gray-500 text-sm">10 missions completed</div>
              </div>
            </div>
          </div>
        </div>

        <Button
          onClick={() => navigate('/settings')}
          variant="outline"
          className="w-full rounded-full h-12 border-gray-300"
        >
          Edit Profile
        </Button>
      </div>

      <BottomNavigation />
    </div>
  );
}