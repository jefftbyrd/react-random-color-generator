import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <>
      <button
        type="button"
        className="generateButton"
        onClick={() => setColor(randomColor())}
      >
        Generate
      </button>
      <div className="colorBox" style={{ backgroundColor: color }}>
        Generated Color: {color}
      </div>
    </>
  );
}
