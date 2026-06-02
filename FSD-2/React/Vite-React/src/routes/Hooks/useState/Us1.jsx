import { useState } from "react";
import '../UsStyle.css'

function Us1() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

return (
  <div className="us-container">
    <h2 className="counter">{count}</h2>

    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);
}

export default Us1;