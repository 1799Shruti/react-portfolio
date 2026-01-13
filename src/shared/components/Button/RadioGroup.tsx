import styles from "./RadioGroup.module.css";

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  direction?: "horizontal" | "vertical";
}

export function RadioGroup({
  name,
  options,
  value,
  onChange,
  direction = "vertical",
}: RadioGroupProps) {
  return (
    <div className={`${styles.group} ${styles[direction]}`}>
      {options.map((option) => (
        <label key={option.value} className={styles.label}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className={styles.input}
          />
          <span className={styles.text}>{option.label}</span>
        </label>
      ))}
    </div>
  );
}

export default RadioGroup;
