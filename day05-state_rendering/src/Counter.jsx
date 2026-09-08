import React, { useState } from "react";
const Counter = () => {
  let [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <h1>Make a Counter </h1>
      <h1>Count - {count} </h1>
      <button
        className="p-1 border-2 rounded-2xl bg-gray-500 cursor-pointer"
        onClick={() => {
          //   setCount((prev)=>{
          //     return prev+1;
          //   });
          //   setCount((prev) => prev+1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);

            setCount(count + 1);


        //   setCount(count + 1);
        //   setCount(count + 1);
        //   setCount(count + 1);
        //   setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
