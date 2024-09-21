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
    <head>
    <link rel="icon" href="https://doc.rust-lang.org/stable/book/img/ferris/not_desired_behavior.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Old+Turkic&display=swap" rel="stylesheet" />
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
