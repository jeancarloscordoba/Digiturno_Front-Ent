import React, { useState, useEffect } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import ClientInfo from '../components/ClientInfo';
import ModuleStatus from '../components/ModuleStatus';
import ServiceList from '../components/ServiceList';
import WaitingClients from '../components/WaitingClients';
import '../css/Dashboard.css';
import { Modal, Button } from 'react-bootstrap';
import ModuleDistracted from '../components/ModuleDistracted';
import ModuleVisitors from '../components/ModuleVisitors';

const Dashboard: React.FC = () => {
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

  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="main-content">
        <div className="left-column">
          <ServiceList />
        </div>
        <div className="center-column">
          <ClientInfo onRequestDevice={requestHIDDevice} hid={hid} />
          <WaitingClients />
        </div>
        <div className="right-column">
          <ModuleStatus />
          <ModuleDistracted />
          <ModuleVisitors />
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

export default Dashboard;
