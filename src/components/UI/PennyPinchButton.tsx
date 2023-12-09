import Link from "next/link";
import classes from "./PennyPinchButton.module.css";
import type { Url } from "next/dist/shared/lib/router/router";

interface PennyPinchButtonMainProps {
  text: string;
  disabled?: boolean;
}

interface PennyPinchButtonCancelProps {
  type: "cancel";
  href: Url;
}

interface PennyPinchButtonSubmitProps {
  type: 'submit';
  href?: never;
}

export default function PennyPinchButton({
  disabled,
  text,
  type,
  href
}: PennyPinchButtonMainProps & (PennyPinchButtonCancelProps | PennyPinchButtonSubmitProps)) {
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
    <Link href={href}>
      <button
        className={`${classes[`pennypinch-button`]} ${classes.danger}`}
        disabled={disabled}
      >
        {text}
      </button>
    </Link>
  );
}
