import type { Metadata } from "next";
import "./globals.css";
import NavbarMain from "@/components/common/navbar/NavbarMain";
import { Inter } from "next/font/google";
import Footer from "@/components/common/footer/Footer";
import "swiper/css/bundle";
import Compare from "@/components/common/compare/Compare";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "254Outfit - Kenya's Fashion Marketplace",
  description:
    "254Outfit is a premier e-commerce platform for outfit shopping in Kenya, offering a seamless experience with secure payments, real-time order tracking, and a wide range of trendy fashion items.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 antialiased`}>
        <NavbarMain />
        <main className="flex items-start justify-center">
          <div className="w-full max-w-8xl">{children}</div>
        </main>
        <Footer />
        <Compare/>
      </body>
    </html>
  );
}
