import { ReactNode } from "react";

interface CanProps {
  children: ReactNode;
  permissions: string[];
  role: string[];
}

export function Can({ children, permissions, role }: CanProps) {
  return <>{children}</>;
}
