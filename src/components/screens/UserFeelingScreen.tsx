import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../AppContext';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';

export default function UserFeelingScreen() {
  const navigate = useNavigate();
  const { currentMission, updateMission } = useApp();
  const [selectedFeeling, setSelectedFeeling] = useState<string>('');

  const feelings = [
    { emoji: '😰', label: 'Nervous', value: 'nervous' },
    { emoji: '😟', label: 'Anxious', value: 'anxious' },
    { emoji: '😐', label: 'Neutral', value: 'neutral' },
    { emoji: '🙂', label: 'Calm', value: 'calm' },
    { emoji: '😊', label: 'Confident', value: 'confident' }
  ];

  const handleContinue = () => {
    if (currentMission && selectedFeeling) {
      updateMission(currentMission.id, { feeling: selectedFeeling });
    }
    navigate('/task-selection');
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 pb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-900 mb-6"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-gray-900 mb-2">How do you feel?</h1>
        <p className="text-gray-500">Let us know your current state</p>
      </div>

      <div className="flex-1 px-6 pb-6">
        <p className="text-gray-600 mb-6">
          It's helpful to acknowledge your emotions before starting. There are no wrong answers!
        </p>

        <div className="space-y-3">
          {feelings.map((feeling) => (
            <button
              key={feeling.value}
              onClick={() => setSelectedFeeling(feeling.value)}
              className={`w-full p-4 rounded-xl border-2 transition-all ${
                selectedFeeling === feeling.value
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{feeling.emoji}</div>
                <div className="flex-1 text-left">
                  <div className="text-gray-900">{feeling.label}</div>
                </div>
                {selectedFeeling === feeling.value && (
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6">
        <Button
          onClick={handleContinue}
          disabled={!selectedFeeling}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12 disabled:opacity-50"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
