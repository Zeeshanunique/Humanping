import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowLeft, Clock, CheckCircle2 } from 'lucide-react';

export default function TaskStatusScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 pb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-900 mb-6"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-gray-900 mb-2">Mission in Progress</h1>
        <p className="text-gray-500">Take your time</p>
      </div>

      <div className="flex-1 px-6 pb-6 flex flex-col items-center justify-center">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-8 animate-pulse">
          <Clock className="w-16 h-16 text-white" />
        </div>

        <h2 className="text-gray-900 text-center mb-4">
          Take a deep breath
        </h2>
        <p className="text-gray-600 text-center max-w-sm mb-8">
          When you're ready, go ahead and complete the mission. Remember, there's no rush - this is your journey.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-sm">
          <h3 className="text-gray-900 mb-3">Tips while you wait:</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex gap-2">
              <span>•</span>
              <span>Take slow, deep breaths</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Remind yourself this is for growth</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>It's okay to feel nervous</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>You can do this!</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-6 pb-6">
        <Button
          onClick={() => navigate('/post-task-feeling')}
          className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full h-12"
        >
          <CheckCircle2 className="w-5 h-5 mr-2" />
          I Did It!
        </Button>
      </div>
    </div>
  );
}
