import React, {useState} from "react";


const LiveInput = () => {
  // live input
  const [value, setValue] = useState("hello");

  const changeInputValue = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>
      <p>{value}</p>
      <input type="text" onChange={changeInputValue} value={value} />
    </div>

  )
}


export default LiveInput;