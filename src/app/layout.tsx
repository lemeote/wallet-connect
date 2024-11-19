// src/app/layout.tsx

import { headers } from "next/headers";
import { Inter as FontSans, Old_Standard_TT as FontSerif } from "next/font/google";
import "@rainbow-me/rainbowkit/styles.css";

import NavBar from './components/Navbar';
import Providers from './Providers';
import { ThemeProvider } from './context/ThemeContext';
import { cn } from "@/lib/utils";
import './globals.css';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"], // Specify the weights for Inter
});

const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"], // Specify the weights for Old Standard TT
});

const cookie = headers().get("cookie");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={fontSerif.variable}>
      <body className={cn("min-h-screen bg-background font-serif antialiased")}>
        <Providers cookie={cookie}>
          <ThemeProvider>
            <NavBar />
            <main className="content-with-navbar-padding">
              {children}
            </main>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
