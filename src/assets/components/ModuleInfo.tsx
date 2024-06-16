import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../css/ModuleInfo.css";

const ModuleInfo: React.FC = () => {
    return (
        <div className="module-info">
            <div className="icon-computer">
                <i className="fas fa-desktop"></i>
            </div>

            <div className="module">
                <span className="module-name"> Modulo </span>
                <span className="module-num"> 6 </span>
            </div>
        </div>
    );
}

export default ModuleInfo;