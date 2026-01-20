import { useState } from "react";
import Counter from "../components/counter1";

const CounterPage = () => {
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <div>
        <Counter count={count} handleClick={handleClick} />
        <Counter count={count} handleClick={handleClick} />
      </div>
      <div>{/* <Counter /> */}</div>
    </>
  );
};
export default CounterPage;
