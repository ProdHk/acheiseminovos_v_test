import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Achei seminovos",
  description: "Prod.hk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <div className="w-full h-full min-h-screen flex flex-col bg-zinc-200">

          {children}
        </div>
      </body>
    </html>
  );
}
