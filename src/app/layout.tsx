import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "우리 결혼합니다",
  description: "소중한 분들께 전하는 소식",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="blossom"></div>
        <div className="blossom"></div>
        <div className="blossom"></div>
        <div className="blossom"></div>
        <div className="blossom"></div>
        <div className="blossom"></div>
        {children}
      </body>
    </html>
  );
}
