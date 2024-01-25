import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

{/*Todo lo  uw creamos en React se traslada dentro del elemento con id Root  
   -Recordemos que en el index.html tenemos un elemento con id Root

   - Nuestro index.js esta llamando a ese elemento Root y le esta renderizando
     todo lo que pongamos en el Componente App.

*/}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

