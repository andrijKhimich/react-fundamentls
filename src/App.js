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
      <button onClick={decrementCount}>-</button>
      <p>{number}</p>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
