import classes from "./PennyPinchInput.module.css";

interface PennyPinchInputProps {
  type: "email" | "password" | "text" | "number";
  name: string;
  placeholder?: string;
}

export default function PennyPinchInput({
  type,
  name,
  placeholder,
}: PennyPinchInputProps) {
  return (
    <input
      className={classes.input}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
}
