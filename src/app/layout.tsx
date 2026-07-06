import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ApexIQ | Institutional AI Investment Research Platform",
  description: "Autonomous multi-agent equity analyst built with LangGraph.js, Next.js 15, and Recharts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="font-sans h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

