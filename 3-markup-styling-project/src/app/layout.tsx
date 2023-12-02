import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "SevenOaks Church",
  description: "this is SevenOaks Church",
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
