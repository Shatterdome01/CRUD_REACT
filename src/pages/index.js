import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../components/App';

const HomePage = () => {
  useEffect(() => {
    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
  }, []);

  return <div id="root"></div>; // Un contenedor para renderizar tu componente
};

export default HomePage;

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from '../App';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);

// root.render(
//     <>
//     <App />
//     </>
// );
