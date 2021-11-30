import React, { useState } from "react";

const Counter = () => {
  // functions to modify count
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
    <div>
      <p>{number}</p>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
      <hr />
    </div>
  )
}

export default Counter;