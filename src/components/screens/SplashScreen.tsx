import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "../../imports/svg-wmx0afot45";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/intro1');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-[120px] h-[120px] mx-auto mb-8">
          <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-[20px]" />
          <svg className="relative w-full h-full" fill="none" viewBox="0 0 120 120">
            <path d={svgPaths.p7372600} stroke="#111827" strokeWidth="2" />
            <path d={svgPaths.p2c337f80} stroke="#111827" strokeWidth="2" />
            <line x1="55" y1="60" x2="65" y2="60" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          HumanPing
        </h1>
        <p className="text-gray-500">
          Tiny nudges. Real connection.
        </p>
      </div>
    </div>
  );
}
