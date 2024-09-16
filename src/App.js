import './App.css';
import randomColor from 'randomcolor';

// import logo from './logo.svg';

// import myRandomColor from './myRandomColor';

export default function App() {
  let color = randomColor();
  // console.log(color);
  return (
    <>
      <button
        type="button"
        onClick={() =>
          randomColor({
            hue: 'blue',
          })
        }
        className="generateButton"
      >
        Generate
      </button>
      <div className="colorBox" style={{ backgroundColor: color }}>
        {color}
      </div>

      {/* <myRandomColor /> */}
    </>
  );
}
