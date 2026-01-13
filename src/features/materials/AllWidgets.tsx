import { Button, RadioGroup } from "@/shared/components";
import { useState } from "react";
import styles from "./AllWidgets.module.css";

function AllWidgets() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleClick = () => {
    console.log("Button Clicked!");
  };

  const radioOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <div className={styles.container}>
      <h1>UI Components</h1>

      <section className={styles.section}>
        <h2>Button Variants</h2>
        <div className={styles.buttonGroup}>
          <Button label="Primary" onClick={handleClick} />
          <Button label="Secondary" variant="secondary" onClick={handleClick} />
          <Button label="Outline" variant="outline" onClick={handleClick} />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Button Sizes</h2>
        <div className={styles.buttonGroup}>
          <Button label="Small" size="sm" />
          <Button label="Medium" size="md" />
          <Button label="Large" size="lg" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Radio Group</h2>
        <RadioGroup
          name="demo"
          options={radioOptions}
          value={selectedOption}
          onChange={setSelectedOption}
        />
        <p>Selected: {selectedOption}</p>
      </section>
    </div>
  );
}

export default AllWidgets;
