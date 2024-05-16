import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
// components


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: "Meet Keith",
    description: "Combining creativity with technical expertise, explore my project showcase to see how I transform complex challenges into elegant solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={montserrat.className}>
            <Navbar />
            {children}
        </body>
    </html>
  );
}