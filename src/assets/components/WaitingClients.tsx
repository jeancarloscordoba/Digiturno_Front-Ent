import React from 'react';
import '../css/WaitingClients.css';
import GenericComponent from './GenericComponent';
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';

interface Client{ //Se definen el tipo de variables que resivira del .json
  id:number;
  cedula: number;
  nombre: string;
  tipoCliente: string;
  estado: string;
}

interface WaitingClientsProps {
  cliente?: Client;
  numberClientsWaiting: number; //Añade cantidad clientes espera
  onDistract: () => void;  // Se manda un parametro (onDistract) como propiedad (props), para recibir una función. 
  onUploadClient: (cliente: Client) => void;  // La propiedad onUploadClient aceptara objetos de tipo Client. 
}

const WaitingClients: React.FC<WaitingClientsProps> = ({ cliente, numberClientsWaiting, onDistract, onUploadClient }) => { // Se añadió los props
  // const [numberClients, setNumberClients ] = useState<number>();  

  return (
    <GenericComponent title="Clientes en Espera" rightComponent={<div className="number-client-waiting">{numberClientsWaiting}</div>} customClass="generic-component-waiting-clients">
      {cliente&&(
        <section className="waiting-clients">
          <div className="container-cliente-espera">
            <p>{cliente.nombre}</p>  
          </div>

          <div className="container-buttons">
            <button className="llamar-pantalla">
                <i className="fas fa-bullhorn"></i>
            </button>
            
            <button className="mandar-distraidos" onClick={onDistract}> {/* Se añadió onClick para mandar el primer cliente*/}
                <i className="fas fa-frown"></i>
            </button>
 
            <button className="subir-cliente" onClick={() => onUploadClient(cliente)}> {/* Llama la función con el objeto del cliente */}
                <i className="fas fa-upload"></i>
            </button>
          </div>
        </section>
        )}
    </GenericComponent>
  );
}

export default WaitingClients;
