import { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_email');
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return <Dashboard onLogout={handleLogout} />;
  }

  return <LoginScreen onLoginSuccess={() => setIsAuthenticated(true)} />;
}
