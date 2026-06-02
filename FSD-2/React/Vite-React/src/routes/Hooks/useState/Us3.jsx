
import { useState } from 'react';
import '../UsStyle.css'

function Us3() {
    const [text,setText] = useState('L.J University')
    const [color,setColor] = useState('red')
    const [show,setShow] = useState(true)
    const changeText = () =>{
        setText(
            text === 'L.J University'?'Welcome Student':'L.J University'
        )
    }
    const changeColor = () =>{
        setColor(color === 'red'?'blue':'red')
    }
    const toggleShow =() =>{
        setShow(!show)
    }
    return (
  <div className="us-container">
    <h2 style={{ color }}>{text}</h2>

    {show && <h2>React JS Hooks</h2>}

    <button onClick={changeText}>
      Change Text
    </button>

    <button onDoubleClick={changeColor}>
      Change Color
    </button>

    <button onClick={toggleShow}>
      {show ? "Hide" : "Show"}
    </button>
  </div>
);
}

export default Us3;