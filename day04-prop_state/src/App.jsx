import React, { useState } from "react";

const App = () => {
  // before return we write javascript
  // let count = 10;
  // const btn = document.querySelector("#btn");
  // console.log(btn);

  // this is giving us null because we cant select the virtual dom element with the real dom method;

  // useState
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count - {count} </h1>
      {/* Inline events */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default App;
