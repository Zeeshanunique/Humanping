import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ArrowLeft, Mail, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export default function ForgotPasswordScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    setSent(true);
    toast.success('Password reset link sent!');
  };

  if (sent) {
    return (
      <div className="h-screen w-full bg-white flex flex-col items-center justify-center px-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        
        <h2 className="text-gray-900 text-center mb-2">Check your email</h2>
        <p className="text-gray-500 text-center mb-8 max-w-sm">
          We've sent a password reset link to {email}
        </p>

        <Button
          onClick={() => navigate('/login')}
          className="w-full max-w-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12"
        >
          Back to Login
        </Button>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-white flex flex-col">
      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-900 hover:text-gray-600 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 flex flex-col px-8 pt-8">
        <div className="mb-12">
          <h1 className="text-gray-900 mb-2">Forgot Password</h1>
          <p className="text-gray-500">
            Enter your email and we'll send you a reset link
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <div className="space-y-2 mb-8">
            <Label htmlFor="email" className="text-gray-700">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-12 rounded-lg border-gray-200"
              />
            </div>
          </div>

          <div className="mt-auto pb-8">
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12"
            >
              Send Reset Link
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
