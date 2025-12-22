import { useNavigate, useParams } from 'react-router-dom';
import { useApp } from '../AppContext';
import { ArrowLeft, CheckCircle2, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import BottomNavigation from '../BottomNavigation';

export default function HistoryScreen() {
  const navigate = useNavigate();
  const { period = 'all' } = useParams();
  const { missions } = useApp();

  const completedMissions = missions.filter(m => m.completed);

  return (
    <div className="min-h-screen w-full bg-white pb-20">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 pb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-900 mb-6"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-gray-900 mb-4">Mission History</h1>
        
        <Tabs value={period} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white">
            <TabsTrigger value="all" onClick={() => navigate('/history/all')}>All Time</TabsTrigger>
            <TabsTrigger value="week" onClick={() => navigate('/history/week')}>Week</TabsTrigger>
            <TabsTrigger value="month" onClick={() => navigate('/history/month')}>Month</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="px-6 pb-6">
        <div className="mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-center">
              <div className="text-gray-900 text-4xl mb-1">{completedMissions.length}</div>
              <p className="text-gray-500">Missions Completed</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {completedMissions.map((mission) => (
            <div
              key={mission.id}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="text-gray-900 mb-1">{mission.title}</div>
                  <p className="text-gray-500 text-sm mb-2">{mission.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{mission.date}</span>
                    </div>
                    {mission.location && (
                      <div className="flex items-center gap-1">
                        <span>📍</span>
                        <span>{mission.location}</span>
                      </div>
                    )}
                  </div>
                  {mission.postFeeling && (
                    <div className="mt-2 inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">
                      Felt {mission.postFeeling}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {completedMissions.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500">No completed missions yet</p>
              <p className="text-gray-400 text-sm mt-1">Start your first mission to see your history</p>
            </div>
          )}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}