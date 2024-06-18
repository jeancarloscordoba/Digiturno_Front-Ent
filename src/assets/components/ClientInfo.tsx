import '../css/ClientInfo.css';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { Modal} from 'react-bootstrap';
import GenericComponent from './GenericComponent';

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
    <GenericComponent title="Cliente en Atención">
      <section className="client-info">
        <div className="parte-1">

          <div className="parte-1-2"> 
            <div className="parte-info-1-2-1">
              <span className="client-information">Información del Cliente:</span>
              <span className="c-c">C.C.</span>
            </div>
          </div>

          <div className="button-container-1-3">
            <button className="button attended" onClick={startQualification}>
              <i className="fas fa-check"></i> 
                ATENDIDO
            </button>
            <button className="button transfer" onClick={transferData}>
              <i className="fas fa-exchange-alt"></i> 
                TRANSFERIR
            </button>
          </div>

          <Modal show={show} backdrop="static" keyboard={false}>
            <Modal.Header>
              <Modal.Title>Procesando</Modal.Title>
            </Modal.Header>
            <Modal.Body>Esperando calificación...</Modal.Body>
            <Modal.Footer>
              {/* Se elimina el botón de cierre */}
            </Modal.Footer>
          </Modal>

          {data !== null && (
            <div className="calification-1-4">
              <p>Datos recibidos del dispositivo: <strong>{data}</strong></p>
            </div>
            )
          }
        </div>

        <div className="parte-2">
          <div className="time-section">
            <p className="text">Hora de Inicio:</p>
            <p className="time">00:00:00</p>  
          </div>

          <div className="time-section">
            <p className="text">Tiempo transcurrido:</p>
            <p className="time">00:00:00</p>
          </div>
        </div>
      </section>  
    </GenericComponent>
  );
}

export default ClientInfo;
