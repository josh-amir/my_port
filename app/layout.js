import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata = {
  title: "Prince Joshua Ngojo. | AI/ML Researcher",
  description: "Personal portfolio of Prince Joshua Ngojo., AI/ML researcher and CS student from the Philippines."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${garamond.variable} bg-white font-sans text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}


