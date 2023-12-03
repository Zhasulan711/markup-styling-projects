import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Flexbox",
  description: "Flexbox practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
