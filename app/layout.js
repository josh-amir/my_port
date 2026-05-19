import "./globals.css";
import { Roboto, Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SplashScreen from "../components/SplashScreen";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Prince Joshua Ngojo. | AI/ML Researcher",
  description: "Personal portfolio of Prince Joshua Ngojo., AI/ML researcher and CS student from the Philippines.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${roboto.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </head>
      <body className="page-shell">
        <SplashScreen />
        <Navbar />
        <div className="page-body">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
