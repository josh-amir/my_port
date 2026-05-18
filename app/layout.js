import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </head>
      <body className="page-shell">
        <Navbar />
        <div className="page-body">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
