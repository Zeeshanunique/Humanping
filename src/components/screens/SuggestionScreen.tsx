import { useNavigate } from 'react-router-dom';
import { useApp } from '../AppContext';
import { Button } from '../ui/button';
import { ArrowLeft, Lightbulb, RefreshCw } from 'lucide-react';

export default function SuggestionScreen() {
  const navigate = useNavigate();
  const { currentMission } = useApp();

  const suggestions = [
    'Start with a friendly smile and make eye contact',
    'Use a casual greeting like "Hi" or "Good morning"',
    'Keep it brief - you don\'t need a long conversation',
    'A simple nod and smile counts as success too'
  ];

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 pb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-900 mb-6"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-gray-900">Suggestions</h1>
            <p className="text-gray-500 text-sm">Here are some tips</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 pb-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-6">
          <h3 className="text-gray-900 mb-1">{currentMission?.title}</h3>
          <p className="text-gray-600 text-sm">{currentMission?.description}</p>
        </div>

        <h3 className="text-gray-900 mb-4">Ways to approach this:</h3>

        <div className="space-y-3 mb-6">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-200 rounded-xl"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm">
                {index + 1}
              </div>
              <p className="text-gray-700 flex-1">{suggestion}</p>
            </div>
          ))}
        </div>

        <button className="w-full flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 py-3">
          <RefreshCw className="w-4 h-4" />
          <span>Get more suggestions</span>
        </button>
      </div>

      <div className="px-6 pb-6 space-y-3">
        <Button
          onClick={() => navigate('/task-status')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12"
        >
          I'm Ready to Start
        </Button>
        <Button
          onClick={() => navigate('/task-status')}
          variant="outline"
          className="w-full rounded-full h-12 border-gray-300"
        >
          Skip Suggestions
        </Button>
      </div>
    </div>
  );
}
