import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meet Keith",
  description: "Combining creativity with technical expertise, explore my project showcase to see how I transform complex challenges into elegant solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-theme="" className={montserrat.className}>
        <div className="mx-auto max-w-5xl text-2xl mb-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
