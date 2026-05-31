import "./globals.css";
import { DM_Sans, Lora } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Prince Joshua Ngojo | Data Science & ML",
  description: "Portfolio of Prince Joshua Ngojo, a computer science student focused on data science, machine learning, and human-centered AI. Open to internships and research collaborations.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${lora.variable}`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
        />
      </head>
      <body className="page-shell">
        <Navbar />
        <div className="page-body">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
