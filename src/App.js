import React, {useState} from "react";
import ClassCounter from "./Components/ClassCounter";
import Counter from "./Components/Counter";

const App = () => {


  // live input

  const [value, setValue] = useState("hello");

  const changeInputValue = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="App">
      <Counter />
      <ClassCounter/>
      <p>{value}</p>
      <input type="text" onChange={changeInputValue} value={value} />
    </div>
  );
}

export default App;
