import { useNavigate } from 'react-router-dom';
import { useApp } from '../AppContext';
import { Button } from '../ui/button';
import { ArrowLeft, Target, Clock, Star } from 'lucide-react';

export default function TodaysMissionScreen() {
  const navigate = useNavigate();
  const { missions, setCurrentMission } = useApp();

  const todaysMission = missions.find(m => !m.completed) || missions[0];

  const handleStartMission = () => {
    setCurrentMission(todaysMission);
    navigate('/task-instruction');
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 pb-12">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-900 mb-6"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-gray-900 mb-2">Today's Mission</h1>
          <p className="text-gray-500">A small step toward big confidence</p>
        </div>
      </div>

      <div className="px-6 pb-6 -mt-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs ${
                todaysMission.difficulty === 'easy'
                  ? 'bg-green-100 text-green-700'
                  : todaysMission.difficulty === 'medium'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {todaysMission.difficulty}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
              {todaysMission.category}
            </span>
          </div>

          <h2 className="text-gray-900 mb-3">{todaysMission.title}</h2>
          <p className="text-gray-600 mb-6">{todaysMission.description}</p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <div className="text-sm">Estimated time</div>
                <div className="text-xs text-gray-500">5-10 minutes</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <div className="text-sm">Reward</div>
                <div className="text-xs text-gray-500">+10 confidence points</div>
              </div>
            </div>
          </div>

          <Button
            onClick={handleStartMission}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full h-12"
          >
            Start Mission
          </Button>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <div className="text-gray-900 mb-1">Tip</div>
              <p className="text-gray-600 text-sm">
                Take your time and remember - it's okay to feel nervous. That's part of the growth!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
