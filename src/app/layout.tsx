import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import { ThemeProvider } from "next-themes";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

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
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <div className="container">
          <ThemeProvider
            themes={["light", "dark"]}
            defaultTheme="light"
            enableSystem={true}
          >
            <Header />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
