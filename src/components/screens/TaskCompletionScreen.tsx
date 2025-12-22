import { useNavigate } from 'react-router-dom';
import { useApp } from '../AppContext';
import { Button } from '../ui/button';
import { Trophy, Sparkles, Share2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export default function TaskCompletionScreen() {
  const navigate = useNavigate();
  const { currentMission, updateMission, incrementStreak } = useApp();

  const handleComplete = () => {
    if (currentMission) {
      updateMission(currentMission.id, {
        completed: true,
        date: new Date().toISOString().split('T')[0]
      });
      incrementStreak();
    }
    toast.success('Mission completed! 🎉');
    navigate('/home');
  };

  const handleShare = () => {
    toast.success('Sharing functionality coming soon!');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-600 to-purple-600 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
          <Trophy className="w-16 h-16 text-yellow-500" />
        </div>

        <h1 className="text-white mb-3">Mission Complete!</h1>
        <p className="text-white/90 max-w-sm mx-auto">
          You did it! Every small step builds your confidence.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-sm w-full mb-8">
        <div className="text-center mb-6">
          <div className="text-white/70 text-sm mb-2">Today's Mission</div>
          <h3 className="text-white mb-3">{currentMission?.title}</h3>
          <div className="flex items-center justify-center gap-6">
            <div>
              <div className="text-white text-2xl mb-1">+10</div>
              <div className="text-white/70 text-xs">Points</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div>
              <div className="text-white text-2xl mb-1">🔥</div>
              <div className="text-white/70 text-xs">Streak</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {currentMission?.feeling && (
            <div className="bg-white/10 rounded-xl p-3">
              <div className="text-white/70 text-xs mb-1">Before</div>
              <div className="text-white capitalize">{currentMission.feeling}</div>
            </div>
          )}
          {currentMission?.postFeeling && (
            <div className="bg-white/10 rounded-xl p-3">
              <div className="text-white/70 text-xs mb-1">After</div>
              <div className="text-white capitalize">{currentMission.postFeeling}</div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 max-w-sm w-full mb-8">
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-yellow-300" />
          <p className="text-white text-sm">
            You're building confidence one mission at a time. Keep going!
          </p>
        </div>
      </div>

      <div className="space-y-3 w-full max-w-sm">
        <Button
          onClick={handleComplete}
          className="w-full bg-white text-blue-600 hover:bg-gray-100 rounded-full h-12"
        >
          Back to Home
        </Button>
        <Button
          onClick={handleShare}
          variant="outline"
          className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full h-12"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share Achievement
        </Button>
      </div>
    </div>
  );
}
