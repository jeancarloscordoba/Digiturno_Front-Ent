import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/DashboardHeader.css';

const DashboardHeader: React.FC = () => {
  return (
    <nav className="dashboard-header">
      <div className='section-left'>
        <span className="img-logo">
          <img title="Logo-ccv" src="https://ccvalledupar.org.co/wp-content/uploads/2022/02/cropped-MARCA-CCV-MARCA-PAIS-1.png" alt="Logo CCV" />
        </span>

        <span className="user-info">
          <p className="user-name"><strong>Tiziana Valentina Cañate Banderas</strong> te encuentras <span className="user-status">EN LINEA</span></p>
          <p className="user-time-info"><small>Ultima conexion desde las 5:40 pm - 12.06.2014</small></p>
        </span>
      </div>

      <div className="section-right">
        <span className="section-right-title">Bienvenido a Tu turno <strong>Operador</strong></span>
        {/* <span><button className="logout-button">Cerrar Sesión</button></span> */}
        <button className="logout-button"><i className="fas fa-sign-out-alt"></i><span>Cerrar Sesión</span></button>
      </div>
    </nav>
  );
}

export default DashboardHeader;
