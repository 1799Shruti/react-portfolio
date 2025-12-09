import { useState } from "react";
import "./App.css";
import StudentTable from "./Table";
import DigitalClock from "./Clock";

function App() {
  // const [count, setCount] = useState(0)
  var [val, setVal] = useState();
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Black",
    "Purple",
    "Orange",
  ];

  const [selectedColor, setSelectedColor] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedColor(value);
    console.log("Selected Color:", value); // print value
  };
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
      <div style={{ padding: "20px" }}>
        <h3>Select a Color</h3>

        <select value={selectedColor} onChange={handleChange}>
          <option value="">-- Choose Color --</option>

          {colors.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>

        <h4>Selected Color: {selectedColor}</h4>
      </div>
      <StudentTable></StudentTable>
      <DigitalClock color={selectedColor}></DigitalClock>
    </div>
  );
}

export default App;
