import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Uzaylı'dan notlar",
  description: "Bir uzaylının blogu; burada muhtemelen yazılım, felsefe, mitoloji ve tarih üzerine dayalı içerikler bulacaksınız",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
