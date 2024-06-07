import React, { useState, useEffect } from 'react';
import InfoDisplay from '../components/InfoDisplay';
import logo from '../img/logo.png';
import '../css/Pantalla.css';

const Pantalla: React.FC = () => {
  const [data, setData] = useState<{ user: string; module: string }[]>([]);

  useEffect(() => {
    // Aquí puedes agregar la lógica para obtener los datos del backend
    // Por ejemplo, usando fetch o axios para obtener los datos y actualizar el estado
  }, []);

  return (
    <div className="pantalla">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="info-section">
        <div className="info-headers">
          <span className="info-header-user">Usuarios</span>
          <span className="info-header-module">Módulo</span>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <InfoDisplay key={index} />
        ))}
      </div>
    </div>
  );
}

export default Pantalla;
