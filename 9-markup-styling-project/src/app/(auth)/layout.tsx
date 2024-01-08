// import Link from "next/link";
import type { PropsWithChildren } from "react";

export default function ValidationLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
