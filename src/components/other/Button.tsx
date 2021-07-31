import * as React from "react";

export default function Button({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) {
  return <button className={type}>{children}</button>;
}
