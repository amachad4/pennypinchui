import type { FormHTMLAttributes, ReactNode } from "react";

interface PennyPinchFormProps {
  children: ReactNode;
  method?: "GET" | "POST" | "PATCH" | "DELETE";
}

export default function PennyPinchForm({
  children,
  method,
}: PennyPinchFormProps) {
  return <form method={method ?? "GET"}>{children}</form>;
}
