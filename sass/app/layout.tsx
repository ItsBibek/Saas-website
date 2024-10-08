import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bibek Saas App",
  description: "Generated by Bibek",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
