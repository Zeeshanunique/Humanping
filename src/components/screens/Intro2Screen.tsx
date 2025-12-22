import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Smile } from 'lucide-react';

export default function Intro2Screen() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 flex flex-col">
      <div className="flex justify-end p-8">
        <button
          onClick={() => navigate('/signup')}
          className="text-gray-900 hover:text-gray-600 transition-colors"
        >
          Skip
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-16">
        <div className="relative w-64 h-64 mb-12">
          <div className="absolute inset-0 bg-green-300/30 rounded-full blur-[32px]" />
          <div className="relative bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl w-full h-full flex items-center justify-center shadow-lg">
            <Smile className="w-20 h-20 text-green-400" strokeWidth={1.5} />
          </div>
        </div>

        <h2 className="text-gray-800 text-center mb-4 max-w-xs">
          Do it often, before it feels easy
        </h2>
        
        <p className="text-gray-500 text-center max-w-sm">
          Repeated exposure to small social situations builds lasting confidence over time.
        </p>
      </div>

      <div className="px-8 pb-12">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-8 h-2 bg-blue-600 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
        </div>

        <Button 
          onClick={() => navigate('/intro3')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
