import { Inter } from "next/font/google";
import "./globals.css";

// Google Font load
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
});

export const metadata = {
  title: "Sumon Mitra - Frontend Developer",
  description: "A creative Frontend Developer passionate about building expressive and engaging web solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-slate-900 text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}