import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Info, AlertCircle } from 'lucide-react';

export default function NotificationsScreen() {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Mission Completed! 🎉',
      message: 'You completed "Say hi to your neighbor"',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'green'
    },
    {
      id: 2,
      type: 'info',
      title: 'New Mission Available',
      message: 'Your daily mission is ready to start',
      time: '1 day ago',
      icon: Info,
      color: 'blue'
    },
    {
      id: 3,
      type: 'streak',
      title: '5 Day Streak! 🔥',
      message: 'Keep up the amazing work',
      time: '2 days ago',
      icon: AlertCircle,
      color: 'orange'
    },
    {
      id: 4,
      type: 'success',
      title: 'Achievement Unlocked',
      message: 'You earned the "Social Butterfly" badge',
      time: '3 days ago',
      icon: CheckCircle,
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 pb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-900 mb-6"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <div className="flex items-center justify-between">
          <h1 className="text-gray-900">Notifications</h1>
          <button className="text-blue-600 text-sm hover:underline">
            Mark all read
          </button>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-${notification.color}-100`}>
                    <Icon className={`w-5 h-5 text-${notification.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-900 mb-1">{notification.title}</div>
                    <p className="text-gray-500 text-sm mb-2">{notification.message}</p>
                    <div className="text-gray-400 text-xs">{notification.time}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500">No notifications</p>
          </div>
        )}
      </div>
    </div>
  );
}
