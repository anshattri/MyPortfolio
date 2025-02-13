import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Responsive from "@/components/Home/Navbar/responsive";

const font = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "portfolio project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <Responsive />
        {children}
      </body>
    </html>
  );
}
