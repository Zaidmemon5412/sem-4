import  { useState } from "react";
import './UsStyle.css'

function Us2() {
  const [show, setShow] = useState(false);

 return (
  <div className="us-container">
    <button onClick={() => setShow(!show)}>
      {show ? "Hide" : "Show"}
    </button>

    {show && <h2>Welcome to React JS</h2>}
  </div>
);
}

export default Us2;