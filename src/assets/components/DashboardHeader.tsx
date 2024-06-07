import React from 'react';
import '../css/DashboardHeader.css';

const DashboardHeader: React.FC = () => {
  return (
    <div className="dashboard-header">
      <h1>Bienvenido a Tu turno Operador</h1>
      <button className="logout-button">Cerrar Sesión</button>
    </div>
  );
}

export default DashboardHeader;
