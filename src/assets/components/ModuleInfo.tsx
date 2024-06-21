import React from "react";
import "../css/ModuleInfo.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../components/GenericComponent'; 
import GenericComponent from "../components/GenericComponent";

const ModuleInfo: React.FC = () => {
    return (    
        <GenericComponent customClass="generic-component-module-info">
            <section className="module-info">
                <div className="icon-computer">
                    <i className="fas fa-desktop"></i>
                </div>

                <div className="module">
                    <p className="module-name"> Modulo </p>
                    <p className="module-num"> 6 </p>
                </div>
            </section>
        </GenericComponent>
    );
}

export default ModuleInfo;