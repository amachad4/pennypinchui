import type { FormHTMLAttributes, ReactNode } from "react";

interface PennyPinchFormProps {
  children: ReactNode;
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  action?: string;
}

export default function PennyPinchForm({
  action,
  children,
  method,
}: PennyPinchFormProps) {
  return (
    <form method={method ?? "GET"} action={action}>
      {children}
    </form>
  );
}
