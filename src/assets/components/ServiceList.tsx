import React from 'react';
import '../css/ServiceList.css';
import '../components/GenericComponent';
import GenericComponent from '../components/GenericComponent';

const ServiceList: React.FC = () => {
  return (
    <GenericComponent title="Servicios" customClass="generic-component-service-list">
      <section className="service-list">
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
    </GenericComponent>
  );
}

export default ServiceList;
