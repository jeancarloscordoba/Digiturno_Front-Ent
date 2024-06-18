import React from 'react'; 
import "../css/GenericComponent.css";

interface GenericComponentProps {
    title: string;
    rightComponent?: React.ReactNode;
    children: React.ReactNode;
  }
  
  const GenericComponent: React.FC<GenericComponentProps> = ({ title, rightComponent, children }) => {
    return (
      <div className="generic-component">
        <header className="generic-header">
          <h1>{title}</h1>
          <div className="right-component">{rightComponent}</div> {/*Mirar para quitar div*/}
        </header>
        <main className="generic-content">
          {children}
        </main>
      </div>
    );
  }
  
  export default GenericComponent;