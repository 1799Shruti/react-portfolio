import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  var [val, setVal] = useState();
  return (
    <div>
      <h1>Hello</h1>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <h1>{val}</h1>
      <button
        onClick={() => {
          setVal("");
        }}
      >
        Clear Input
      </button>
    </div>
  );
}

export default App;
