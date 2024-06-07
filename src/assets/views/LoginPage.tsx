import React from 'react';
import LoginContainer from '../components/LoginContainer';
import '../css/LoginPage.css';
import { useNavigate } from 'react-router-dom';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <LoginContainer onLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;