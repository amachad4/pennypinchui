import Link from "next/link";
import classes from "./PennyPinchButton.module.css";

interface PennyPinchButtonProps {
  text: string;
  type: "submit" | "cancel";
  disabled?: boolean;
}

export default function PennyPinchButton({
  disabled,
  text,
  type,
}: PennyPinchButtonProps) {
  if (type === "submit") {
    return (
      <button
        className={`${classes[`pennypinch-button`]} ${classes.primary}`}
        type={type}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
  return (
    <Link href="/">
      <button
        className={`${classes[`pennypinch-button`]} ${classes.danger}`}
        disabled={disabled}
      >
        {text}
      </button>
    </Link>
  );
}
