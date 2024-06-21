import React from 'react';  // Eliminado useState
import '../css/ModuleDistracted.css';
import GenericComponent from './GenericComponent';

interface Distracted {
    id: number; 
    cedula: number;
    nombre: string;
    tipoCliente: string;  
    estado: string;
}

interface ModuleDistractedProps {
    distraidos: Distracted[];
    numberDistractedClients: number;
}

/* En React, la manera correcta de pasar y recibir props en un componente 
funcional es a través de un objeto de props, no directamente*/

const ModuleDistracted: React.FC<ModuleDistractedProps> = ({ distraidos, numberDistractedClients }) => {

    return (
        <GenericComponent title="Distraidos" rightComponent={<div className="number-distracted-clients">{numberDistractedClients}</div>} customClass="generic-component-module-distracted"> 
        <section className="module-distracted">
            <ul>
                {distraidos.map(distraido => (
                    <li key={distraido.id}>
                        {distraido.nombre}
                    </li>
                ))}
            </ul>
        </section>
        </GenericComponent>
    );
}

export default ModuleDistracted; 
