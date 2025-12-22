import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { ArrowLeft, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export default function FeedbackScreen() {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState<string>('general');

  const handleSubmit = () => {
    if (!feedback.trim()) {
      toast.error('Please enter your feedback');
      return;
    }
    toast.success('Thank you for your feedback!');
    setFeedback('');
    setTimeout(() => navigate(-1), 1000);
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 pb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-900 mb-6"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-gray-900 mb-2">Feedback</h1>
        <p className="text-gray-500">We'd love to hear from you</p>
      </div>

      <div className="px-6 pb-6">
        <div className="space-y-6">
          <div>
            <label className="text-gray-900 mb-3 block">Category</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setCategory('general')}
                className={`p-3 rounded-xl border-2 transition-all ${
                  category === 'general'
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 bg-white text-gray-600'
                }`}
              >
                <div className="text-2xl mb-1">💬</div>
                <div className="text-xs">General</div>
              </button>
              <button
                onClick={() => setCategory('bug')}
                className={`p-3 rounded-xl border-2 transition-all ${
                  category === 'bug'
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 bg-white text-gray-600'
                }`}
              >
                <div className="text-2xl mb-1">🐛</div>
                <div className="text-xs">Bug</div>
              </button>
              <button
                onClick={() => setCategory('feature')}
                className={`p-3 rounded-xl border-2 transition-all ${
                  category === 'feature'
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 bg-white text-gray-600'
                }`}
              >
                <div className="text-2xl mb-1">✨</div>
                <div className="text-xs">Feature</div>
              </button>
            </div>
          </div>

          <div>
            <label className="text-gray-900 mb-3 block">Your Feedback</label>
            <Textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tell us what you think..."
              className="min-h-[200px] resize-none rounded-xl border-gray-200"
            />
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Feedback
          </Button>
        </div>
      </div>
    </div>
  );
}
