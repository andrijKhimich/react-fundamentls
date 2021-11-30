import React, {useState} from "react";

const App = () => {

  let count = 0;

  const [number, setCount] = useState(count);

  const incrementCount = () => {
    setCount(number + 1);
    console.log(number);
  }

  const decrementCount = () => {
    setCount(number - 1);
    console.log(number);
  }

  return (
    <div className="App">
      <button onClick={incrementCount}>-</button>
      <p>{number}</p>
      <button onClick={decrementCount}>+</button>
    </div>
  );
}

export default App;
