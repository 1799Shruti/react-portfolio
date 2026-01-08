import { useState } from "react";
import "./App.css";
import StudentTable from "./Table";
import DigitalClock from "./Clock";
import { BrowserRouter, Routes, Route, Link } from "react-router";

function App() {
  const [val, setVal] = useState("");
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
    console.log("Selected Color:", value);
  };

  return (
    <BrowserRouter>
      <div>
        <h1>Hello</h1>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <h1>{val}</h1>
        <button onClick={() => setVal("")}>Clear Input</button>

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

        <StudentTable />
        <DigitalClock color={selectedColor} />

        <div>
          <Link to="/">Home</Link> <br />
          <Link to="/about">About Us</Link>
          <br />
          <Link to="/contact">Contact Us</Link>
        </div>

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About Us</h1>} />
          <Route path="/contact" element={<h1>Contact Us</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
