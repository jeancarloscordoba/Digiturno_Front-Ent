import React from 'react';
import '../css/ServiceList.css';

const ServiceList: React.FC = () => {
  return (
    <section className="service-list">
      <header>
        <h1>Servicios</h1>
      </header>
      <main>
        <ul>
          <li>
            <input type="checkbox" />
            <label htmlFor="service1">MATRÍCULA PERSONA JURÍDICA</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="service2">MATRÍCULA PERSONA NATURAL</label>
          </li>
          {/* Añade más elementos según sea necesario */}
        </ul>
      </main>
    </section>
  );
}

export default ServiceList;
