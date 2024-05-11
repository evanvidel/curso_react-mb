import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState('Matheus');

  const redTitle = false;

  return (
    <div className='App'>
      {/* css global */}
      <h1>React com CSS</h1>
      {/* css de component */}
      <MyComponent />
      <p>Este paragrafro é do App.js</p>
      {/* inline css */}
      <p
        style={{ color: 'white', padding: '25px', borderTop: '2px solid red' }}
      >
        Este eleemnto foi estilizado de forma inline
      </p>
      {/* css inline dinâmico */}
      <h2 style={n < 10 ? { color: 'purple' } : { color: 'pink' }}>
        CSS dinamico
      </h2>
      <h2 style={n > 10 ? { color: 'purple' } : { color: 'pink' }}>
        CSS dinamico
      </h2>
      <h2
        style={
          name === 'Matheus'
            ? {
                color: 'green',
                backgroundColor: '#000',
                padding: '10px',
                borderRadius: '10px',
              }
            : null
        }
      >
        Teste nome
      </h2>
      {/* classe dinâmica */}

      <h2 className={redTitle ? 'red-title' : 'title'}>
        Este título vai ter classe dinâmica
      </h2>
      {/* css module */}
      <Title />
    </div>
  );
}

export default App;
