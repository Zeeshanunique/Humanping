import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Target, CheckCircle2 } from 'lucide-react';

export default function Intro3Screen() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-blue-600 flex flex-col items-center justify-center px-8 relative overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
        <Target className="w-16 h-16 text-white" strokeWidth={1.5} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-md">
        <h1 className="text-white text-center mb-16">
          Go do your HumanPing!
        </h1>

        <div className="w-full space-y-4 mb-12">
          <Button
            onClick={() => navigate('/signup')}
            className="w-full bg-white text-blue-600 hover:bg-gray-100 rounded-full h-12 flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            Get Started
          </Button>

          <Button
            onClick={() => navigate('/login')}
            variant="outline"
            className="w-full bg-transparent text-white border-2 border-white hover:bg-white/10 rounded-full h-12"
          >
            I have an account
          </Button>
        </div>

        <p className="text-white/70 text-center text-sm">
          Join thousands building social confidence, one small action at a time
        </p>
      </div>

      <div className="px-8 pb-12">
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-white/40 rounded-full" />
          <div className="w-2 h-2 bg-white/40 rounded-full" />
          <div className="w-8 h-2 bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
}
