import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    console.log('Montaje');

    window.addEventListener('mousemove', e => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);

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
        }}
      ></div>
      <h1>
        X: {position.x}, Y: {position.y}
      </h1>
    </>
  );
}

export default App;
