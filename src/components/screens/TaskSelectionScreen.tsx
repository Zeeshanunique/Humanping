import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../AppContext';
import { Button } from '../ui/button';
import { ArrowLeft, MapPin } from 'lucide-react';

export default function TaskSelectionScreen() {
  const navigate = useNavigate();
  const { currentMission, updateMission } = useApp();
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const locations = [
    { icon: '🏠', label: 'At home', value: 'home' },
    { icon: '☕', label: 'Local cafe', value: 'cafe' },
    { icon: '🏪', label: 'Store/Shop', value: 'store' },
    { icon: '🏃', label: 'Park/Outside', value: 'park' },
    { icon: '🏢', label: 'Work/School', value: 'work' },
    { icon: '🌆', label: 'Other public place', value: 'other' }
  ];

  const handleContinue = () => {
    if (currentMission && selectedLocation) {
      const locationLabel = locations.find(l => l.value === selectedLocation)?.label || selectedLocation;
      updateMission(currentMission.id, { location: locationLabel });
    }
    navigate('/suggestion');
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

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-gray-900">Where are you?</h1>
            <p className="text-gray-500 text-sm">Select your location</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 pb-6">
        <p className="text-gray-600 mb-6">
          This helps us understand the context of your mission
        </p>

        <div className="grid grid-cols-2 gap-3">
          {locations.map((location) => (
            <button
              key={location.value}
              onClick={() => setSelectedLocation(location.value)}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedLocation === location.value
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="text-3xl mb-2">{location.icon}</div>
              <div className="text-gray-900 text-sm">{location.label}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6">
        <Button
          onClick={handleContinue}
          disabled={!selectedLocation}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12 disabled:opacity-50"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
