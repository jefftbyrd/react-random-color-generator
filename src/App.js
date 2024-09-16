import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <>
      <button type="button" onClick={() => setColor(randomColor())}>
        Generate
      </button>
      <div className="colorBox" style={{ backgroundColor: color }}>
        Generated Color:
        <br /> <strong>{color}</strong>
      </div>
    </>
  );
}
