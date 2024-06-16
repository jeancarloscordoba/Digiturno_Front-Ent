import React, {useState} from 'react';
import GenericComponent from './GenericComponent';
import '../css/ModuleStatus.css';

const ModuleStatus : React.FC = () => {
  const [estado, setEstado]=useState<string>("EN LINEA");

  return (
   < GenericComponent title="Estado Modulo" rightComponent={<div id="estado" >{estado}</div>}>
        <section className="module-status-content">
          <div className="radio-option">
            <label htmlFor="estado1">EN LINEA</label>
            <input type='radio' name="estado" id="estado1" onChange={()=>{setEstado("EN LINEA"); 
              document.getElementById("estado")?.classList.remove("verde","rojo","amarillo");
              document.getElementById("estado")?.classList.add("verde")}
            }/>
          </div>
          <div className="radio-option">
            <label htmlFor="estado2">OCUPADO</label>
            <input type='radio' name="estado" id="estado2" onChange={()=>{setEstado("OCUPADO");
              document.getElementById("estado")?.classList.remove("verde","rojo","amarillo");
              document.getElementById("estado")?.classList.add("rojo")}
            }/>
          </div>
          <div className="radio-option">
            <label htmlFor="estado3">AUSENTE</label>
            <input type='radio' name="estado" id="estado3" onChange={()=>{setEstado("AUSENTE");
              document.getElementById("estado")?.classList.remove("verde","rojo","amarillo");
              document.getElementById("estado")?.classList.add("amarillo")}
            }/>
          </div>
        </section>
      </GenericComponent>
  );}

export default ModuleStatus;
