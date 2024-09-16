import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <>
      <button
        type="button"
        name="Generate"
        onClick={() => setColor(randomColor())}
        className="generateButton"
      >
        Generate
      </button>
      <div className="colorBox" style={{ backgroundColor: color }}>
        Generated Color:
        <br /> <strong>{color}</strong>
      </div>
    </>
  );
}
