import Navbar from "@/Components/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/app/Context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
  <link rel="icon" href="https://example.com/myicon.png" type="image/png" />
</Head>

      <body className="transition-colors duration-500">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
