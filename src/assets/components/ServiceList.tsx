import React from 'react';
import '../css/ServiceList.css';

const ServiceList: React.FC = () => {
  return (
    <div className="service-list">
      <h2>Servicios</h2>
      <ul>
        <li>
          <input type="checkbox" id="service1" />
          <label htmlFor="service1">MATRÍCULA PERSONA JURÍDICA</label>
        </li>
        <li>
          <input type="checkbox" id="service2" />
          <label htmlFor="service2">MATRÍCULA PERSONA NATURAL</label>
        </li>
        {/* Añade más elementos según sea necesario */}
      </ul>
    </div>
  );
}

export default ServiceList;
