import React, { useState } from 'react';
import '../css/WaitingClients.css';
import clientsData from "../../clientsData.json";
import GenericComponent from './GenericComponent';

interface Client{
  id:number;
  cedula: number;
  nombre: string;
  tipoCliente: string;
  estado: string;
}

const WaitingClients: React.FC = () => {
  const [clientes, setClientes] = useState<Client[]>(clientsData.clientsData)
  return (
    <GenericComponent title="Clientes en Espera" rightComponent={<div className="number-client"></div>}>
      <section className="waiting-clients">
        <ul>
          {clientes.map((cliente)=>(
            <li>{cliente.nombre} - {cliente.estado}</li>
          ))}
        </ul>
      </section>
    </GenericComponent>
  );
}

export default WaitingClients;
