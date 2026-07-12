import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pink Pulse AI — Bitcoin Probability Forecasts",
  description:
    "AI-assisted, data-driven Bitcoin move probability forecasts. Not financial advice — probability, not certainty.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-pulse-charcoal bg-pulse-radial min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
