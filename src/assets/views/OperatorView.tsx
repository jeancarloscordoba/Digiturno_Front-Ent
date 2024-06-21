import React, { useState, useEffect } from 'react';
import OperatorViewHeader from '../components/OperatorViewHeader';
import ClientInfo from '../components/ClientInfo';
import ModuleStatus from '../components/ModuleStatus';
import ServiceList from '../components/ServiceList';
import WaitingClients from '../components/WaitingClients';
import '../css/OperatorView.css';
import { Modal, Button } from 'react-bootstrap';
import ModuleDistracted from '../components/ModuleDistracted';
import ModuleInfo from '../components/ModuleInfo';
import testUser from "../../testUser.json"; //Se importa para usarse aquí


interface Distracted {
  id: number;
  cedula: number;
  nombre: string;
  tipoCliente: string;
  estado: string;
}

interface Client{ //Se definen el tipo de variables que resivira del .json
  id: number;
  cedula: number;
  nombre: string;
  tipoCliente: string;
  estado: string;
}


const OperatorView: React.FC = () => {
  //Estados para mostrar distraidos 
  const [distraidos, setDistraidos ] = useState<Distracted[]>([]); 

  //Estado para mostrar clientes en espera
  const [clientes, setClientes] = useState<Client[]>(testUser.testUser);

  //Estado para almacenar el cliente en atención 
  const [clienteEnAtencion, setClienteEnAtencion] = useState<Client | null>(null); 

  const [hid, setHid] = useState<HIDDevice | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const requestDevice = async () => {
      try {
        const devices = await navigator.hid.getDevices();
        if (devices.length > 0) {
          setHid(devices[0]);
          console.log("HID Device Connected");
        } else {
          setShowModal(true);
        }
      } catch (err) {
        console.error("Error connecting to HID device:", err);
        setShowModal(true);
      }
    };

    requestDevice();

    const handleDisconnect = (event: HIDConnectionEvent) => {
      if (event.device === hid) {
        setHid(null);
        setShowModal(true);
      }
    };

    navigator.hid.addEventListener('disconnect', handleDisconnect);

    return () => {
      navigator.hid.removeEventListener('disconnect', handleDisconnect);
    };
  }, [hid]);

  const requestHIDDevice = async () => {
    try {
      const hidDevices = await navigator.hid.requestDevice({
        filters: [{ vendorId: 0x461 }],
      });
      setHid(hidDevices[0]);
      setShowModal(false);
    } catch (err) {
      alert("No ha seleccionado ningún puerto serial.");
    }
  };

  // Se actualiza el estado de distraidos con el cliente pasado
  //Definición: Toma el primer cliente y descompone el remainingClients para queden cada nombre por separado; y 
  //setDistraidos descompone todos los distraidos y 
  const handleDistract = () => {
    if (clientes.length > 0) {
      const [firsClient, ...remainingClients ] = clientes;
      setDistraidos([...distraidos, firsClient]); //Se agrega el primer clienre (firsClient) a distraidos
      setClientes(remainingClients);  //Actualiza la lista de clientes.
    }
  };

  // Nueva función para manejar la subida del cliente
  const handleUploadClient = (cliente: Client) => {
    const [firsClient, ...remainingClients ] = clientes;
    setClienteEnAtencion(cliente);
    setClientes(remainingClients);
  }; 

  return (
    <div className="dashboard">
      <OperatorViewHeader />
      <div className="main-content">
        <div className="left-column">
          <ModuleInfo />
          <ServiceList />
        </div>
        <div className="center-column">
          <ClientInfo onRequestDevice={requestHIDDevice} hid={hid} clienteEnAtencion ={clienteEnAtencion }
          />
          {clientes.length > 0? ( 
            <WaitingClients 
            cliente={clientes[0]} 
            numberClientsWaiting={clientes.length} //Se añade el prop en la instancia de WaitingClients
            onDistract={handleDistract} 
            onUploadClient={handleUploadClient} // Pasa solo el primer cliente
            /> 
          ) : ( 
            <WaitingClients // Si no hay clientes no muestrara clientes, pero si el fondo.
            numberClientsWaiting={0} //Se añade el prop en la instancia de WaitingClients
            onDistract={handleDistract} 
            onUploadClient={handleUploadClient} 
            /> 
          )
        }
        </div>
        <div className="right-column">
          <ModuleStatus />
          <ModuleDistracted 
          distraidos={distraidos} 
          numberDistractedClients={distraidos.length} //Se añade el prop en la instancia de ModuleDistracted
          /> 
        </div>
      </div>
      
      <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Conectar Dispositivo Calificador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Es necesario conectar el dispositivo calificador para continuar.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={requestHIDDevice}>Conectar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OperatorView;
