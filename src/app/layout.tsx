import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Menu } from "./Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sequins and Embroidery",
  description: "Sequins and embroidery products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex p-6 py-4 items-center space-x-6">
          <h1 className="font-semibold">Sequin&Embroidery</h1>
          <Menu />
        </nav>
        {children}
      </body>
    </html>
  );
}
