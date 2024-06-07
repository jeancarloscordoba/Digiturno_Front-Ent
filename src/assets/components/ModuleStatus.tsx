import React from 'react';
import '../css/ModuleStatus.css';

const ModuleStatus: React.FC = () => {
  return (
    <div className="module-status">
      <h2>Estado Módulo</h2>
      <p><span className="status green"></span> LIBRE</p>
      <p><span className="status red"></span> OCUPADO</p>
      <p><span className="status yellow"></span> AUSENTE</p>
    </div>
  );
}

export default ModuleStatus;
