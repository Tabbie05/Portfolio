// app/layout.js
import "./globals.css";
import Navbar from "@/Components/Navbar";
import { ThemeProvider } from "@/app/Context/ThemeContext";

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my developer portfolio",
  icons: {
    icon: "/TS.jpg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="transition-colors duration-500">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
