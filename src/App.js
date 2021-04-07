import './App.css';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker'
import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState(0);
  return (
    <div className="App">
      <ColorPicker 
      currentColor={color}
      setColor={color => setColor(color)} />
      <Canvas currentColor={color} />
    </div>
  );
}

export default App;
