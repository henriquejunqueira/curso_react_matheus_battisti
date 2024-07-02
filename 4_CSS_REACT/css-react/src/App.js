import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState('Henrique');

  const redTitle = true;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>

      {/* CSS de Componente. Obs: tem problema de vazamento de código css */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>

      {/* Inline CSS */}
      <p
        style={{
          color: 'magenta',
          padding: '25px',
          borderTop: '2px solid red',
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      {/* <p style={{ color: 'blue', padding: '25px', borderTop: '2px solid red' }}>
        Este elemento foi estilizado de forma inline
      </p> */}

      {/* CSS Inline Dinâmico */}
      <h2 style={n < 10 ? { color: 'purple' } : { color: 'pink' }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: 'purple' } : { color: 'pink' }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === 'Henrique'
            ? { color: 'green', backgroundColor: '#000' }
            : null
        }
      >
        Teste nome
      </h2>

      {/* Classe dinâmica */}
      <h2 className={redTitle ? 'red-title' : 'title'}>
        Este título vai ter classe dinâmica
      </h2>

      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
