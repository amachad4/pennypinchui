import styles from "./PennyPinchInput.module.css";

interface PennyPinchInputProps {
  type: "email" | "password" | "text" | "number";
  name: string;
  placeholder?: string;
  classes?: string
}

export default function PennyPinchInput({
  type,
  name,
  placeholder,
  classes
}: PennyPinchInputProps) {
  return (
    <input
      className={`${styles["pennypinch-input"]} ${classes}`}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
}
