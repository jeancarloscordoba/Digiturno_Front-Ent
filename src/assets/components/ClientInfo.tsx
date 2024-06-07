import '../css/ClientInfo.css';
import React, { useState, useEffect } from 'react';
import { Modal} from 'react-bootstrap';

const messages: { [key: number]: string } = {
  0: "No calificado",
  1: "Malo",
  2: "Regular",
  3: "Bueno",
  4: "Excelente",
};

interface ClientInfoProps {
  onRequestDevice: () => void;
  hid: HIDDevice | null;
}

const ClientInfo: React.FC<ClientInfoProps> = ({ onRequestDevice, hid }) => {
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<string | null>(null);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleHIDInput = async () => {
    if (hid) {
      await hid.open();
      const handleInputReport = (event: Event) => { //Se agrego por el de abajo
      //hid.oninputreport = (event) => {  
        const { data } = event as HIDInputReportEvent; //se agrego "as HIDInputReportEvent"
        const arr = new Int8Array(data.buffer);
        const option: number = arr[0];
        setData(messages[option]);
        console.log(messages[option]);
        hid.oninputreport = null; // Se desactiva la escucha 
        handleClose();
      };
      hid.oninputreport = handleInputReport;
    }
  };

  const startQualification = async () => {
    if (!hid) {
      onRequestDevice();
      return;
    }
    handleShow();

    // Solo se confiura la entrada HID aquí
    await handleHIDInput();

    // Escribir 0 al dispositivo HID cuando el tiempo de calificación haya terminado
    const timeout = 15000;
    setTimeout(async () => {
      if (hid) {
        const reportId = 0x00; // Ajusta el reportId según sea necesario
        const data = new Uint8Array([0]);
        await hid.sendReport(reportId, data);
        console.log("Sent 0 to HID device");
      }
      handleClose();
    }, timeout);
  };

  const transferData = async () => {
    if (!hid) {
      onRequestDevice();
      return;
    }
    handleShow();

    // Solo configurar la entrada HID aquí 
    await handleHIDInput();
  };

  return (
    <div className="client-info">
      <h3>Cliente en atención</h3>
      <div className="client-details">
        <p><strong>Información del cliente:</strong></p>
        <p>C.C.</p>
      </div>
      <div className="buttons">
        <button className="btn green" onClick={startQualification}>Atendido</button>
        <button className="btn orange" onClick={transferData}>Transferencia</button>
      </div>
      <div className="timer">
        <p>Hora de inicio: 00:00:00</p>
        <p>Tiempo transcurrido: 00:00:00</p>
      </div>
      
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Procesando</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esperando calificación...</Modal.Body>
        <Modal.Footer>
          {/* Se elimina el botón de cierre */}
        </Modal.Footer>
      </Modal>

      {data !== null && (
        <p>
          Datos recibidos del dispositivo: {data}
        </p>
      )}
    </div>
  );
}

export default ClientInfo;
