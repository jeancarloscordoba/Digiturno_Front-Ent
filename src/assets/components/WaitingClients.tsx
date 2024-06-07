import React from 'react';
import '../css/WaitingClients.css';

const WaitingClients: React.FC = () => {
  return (
    <div className="waiting-clients">
      <h3>Clientes en espera</h3>
      <ul>
        <li>Cliente 1</li>
        <li>Cliente 2</li>
        {/* Añade más elementos según sea necesario */}
      </ul>
    </div>
  );
}

export default WaitingClients;
