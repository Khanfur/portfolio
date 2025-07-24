import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Brandon's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
