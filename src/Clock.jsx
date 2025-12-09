import React, { useState, useEffect } from "react";

export default function DigitalClock(data) {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  // Format time
  const formattedTime = time.toLocaleTimeString();

  return (
    <div
      style={{
        fontSize: "32px",
        fontWeight: "bold",
        fontFamily: "monospace",
        padding: "20px",
        textAlign: "center",
        color: data.color || "pink",
      }}
    >
      {formattedTime}
    </div>
  );
}
