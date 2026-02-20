import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../lib/store';
import { LiveDashboard } from '../components/LiveDashboard';

export function Dashboard() {
  const { isAuthenticated, user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-dark">Welcome back, {user?.name}</h1>
        <p className="text-sm text-neutral">{user?.farmName ? `Managing ${user.farmName}` : 'Here is your farm overview'}</p>
      </div>
      
      <div className="-mx-4 sm:mx-0">
        <LiveDashboard />
      </div>
    </div>
  );
}
