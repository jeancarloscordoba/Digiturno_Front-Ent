import React from 'react';
import '../css/WaitingClients.css';

const WaitingClients: React.FC = () => {
  return (
    <section className="waiting-clients">
      <header>
        <h1>Clientes en espera</h1>
      </header>
      <main>
          <ul>
            <li>Cliente 1</li>
            <li>Cliente 2</li>
            {/* Añade más elementos según sea necesario */}
          </ul>
      </main>
    </section>
  );
}

export default WaitingClients;
