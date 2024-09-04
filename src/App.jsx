import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [enabledFollow, setEnabledFollow] = useState(false);

  useEffect(() => {
    console.log('Montaje');
    const handleMouseMove = e => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    if (enabledFollow) window.addEventListener('mousemove', handleMouseMove);

    // Funcion que se ejecuta cuando se desmonta el componente (CLOSURE)
    return () => {
      console.log('Desmontaje');
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [enabledFollow]);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          border: '1px solid black',
          borderRadius: '50%',
          pointerEvents: 'none',
          top: '-50px',
          left: '-50px',
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: enabledFollow ? '1' : '0',
          transition: 'opacity 0.5s',
        }}
      ></div>
      <h1
        style={{
          opacity: enabledFollow ? '1' : '0',
          transition: 'opacity 0.5s',
        }}
      >
        X: {position.x}, Y: {position.y}
      </h1>
      <button onClick={() => setEnabledFollow(!enabledFollow)}>
        {enabledFollow ? 'Desactivar' : 'Activar'} Seguimiento
      </button>
    </>
  );
}

export default App;
