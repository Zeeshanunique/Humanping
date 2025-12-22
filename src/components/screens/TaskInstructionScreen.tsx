import { useNavigate } from 'react-router-dom';
import { useApp } from '../AppContext';
import { Button } from '../ui/button';
import { ArrowLeft, ListChecks } from 'lucide-react';

export default function TaskInstructionScreen() {
  const navigate = useNavigate();
  const { currentMission } = useApp();

  const instructions = [
    'Find a comfortable moment when you feel ready',
    'Take a deep breath and center yourself',
    'Approach the situation with a friendly smile',
    'Remember: everyone appreciates genuine kindness',
    'It\'s okay if it feels awkward - that\'s normal!'
  ];

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 pb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-900 mb-6"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <ListChecks className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-gray-900">Instructions</h1>
            <p className="text-gray-500 text-sm">Follow these steps</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 pb-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
          <h3 className="text-gray-900 mb-2">{currentMission?.title}</h3>
          <p className="text-gray-600 text-sm">{currentMission?.description}</p>
        </div>

        <div className="space-y-3 mb-6">
          {instructions.map((instruction, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl"
            >
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600">
                {index + 1}
              </div>
              <p className="text-gray-700 flex-1">{instruction}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
          <p className="text-green-800 text-sm">
            <span className="text-lg mr-2">✨</span>
            Remember: Growth happens outside your comfort zone. You've got this!
          </p>
        </div>
      </div>

      <div className="px-6 pb-6">
        <Button
          onClick={() => navigate('/user-feeling')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12"
        >
          I'm Ready
        </Button>
      </div>
    </div>
  );
}
