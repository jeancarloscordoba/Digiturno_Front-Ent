import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './assets/views/LoginPage';
import OperatorView from './assets/views/OperatorView';
import Pantalla from './assets/views/Pantalla';
import './App.css';


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/operator-view" element={isLoggedIn ? <OperatorView /> : <Navigate to="/login" />} />
        <Route path="/pantalla" element={<Pantalla />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

