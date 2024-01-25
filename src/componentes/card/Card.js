
import React, { useState } from 'react';
import './cards.css'; 

export const Card = () => {
  const [texto, setTextoState] = useState(true);

  const mostrar = () => {
    setTextoState(!texto);
  };


  return (
    <div className="card">np

  
      <button onClick={mostrar}>boton</button>
      {texto === true && <h1>Texto</h1>}
    </div>    
  );
};
