import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./header"; // Import your Header component
import { Inter, Playfair_Display } from "next/font/google";

//import PortfolioPage from "./components/Portfolio"; // Import

const geistSans = localFont({
  src: "./fonts/Lora-Regular.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Poppins-Regular.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Vitalis Capital",
  description: "Vitalis Capital - Investment Management and Financial Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <Header />
        {/* Include the main content (children) here */}
        <main>
          {children} {/* This will render the page content */}
        </main>
        {/* Add the PortfolioPage at a specific route */}
        {/* <PortfolioPage />{" "} */}
        {/* This will load the Portfolio content when you visit /portfolio */}
      </body>
    </html>
  );
}
