// import { useState } from "react";

type CounterProps = {
  count: number;
  handleClick: () => void;
};
const Counter = ({ count, handleClick }: CounterProps) => {
  //   let [count, setCount] = useState(1);
  //   function increaseCounter() {
  //     setCount(count + 1);
  //   }
  return (
    <>
      <button onClick={handleClick}>Counter 1</button>
      <label>Count {count}</label>
    </>
  );
};

export default Counter;
