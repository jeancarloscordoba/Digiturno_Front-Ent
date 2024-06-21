import React, {useState, useEffect} from 'react';
import GenericComponent from './GenericComponent';
import '../css/ModuleStatus.css';

const ModuleStatus : React.FC = () => {
  const [estado, setEstado]=useState<string>("EN LINEA");

  useEffect(() => {
    document.getElementById("estado1")?.click();
    document.getElementById("estado")?.classList.add("colorEstado1");
  }, []);

  return (
   < GenericComponent title="Estado Modulo" rightComponent={<div id="estado">{estado}</div>} customClass="generic-component-module-status">
        <section className="module-status-content">
          <div className="radio-option">
            <input type='radio' name="estado" id="estado1" onChange={()=>{setEstado("EN LINEA"); 
              document.getElementById("estado")?.classList.remove("colorEstado1","colorEstado2","colorEstado3");
              document.getElementById("estado")?.classList.add("colorEstado1")}
            }/>
            <label htmlFor="estado1">EN LINEA</label>
          </div>

          <div className="radio-option">
            <input type='radio' name="estado" id="estado2" onChange={()=>{setEstado("OCUPADO");
              document.getElementById("estado")?.classList.remove("colorEstado1","colorEstado2","colorEstado3");
              document.getElementById("estado")?.classList.add("colorEstado2")}
            }/>
            <label htmlFor="estado2">OCUPADO</label>
          </div>
          
          <div className="radio-option">
            <input type='radio' name="estado" id="estado3" onChange={()=>{setEstado("AUSENTE");
              document.getElementById("estado")?.classList.remove("colorEstado1","colorEstado2","colorEstado3");
              document.getElementById("estado")?.classList.add("colorEstado3")}
            }/>
            <label htmlFor="estado3">AUSENTE</label>
          </div>
        </section>
      </GenericComponent>
  );}

export default ModuleStatus;
