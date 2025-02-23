import type { Metadata } from "next";
import "./globals.css";
import NavbarMain from "@/components/common/navbar/NavbarMain";
import { Inter } from "next/font/google";
import { SidebarProvider } from "@/context/sidebarContext";
import Footer from "@/components/common/footer/Footer";
import "swiper/css/bundle";

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
        <SidebarProvider>
          <NavbarMain />
          <main className="flex items-start justify-center min-h-screen">
            <div className="w-full max-w-8xl">{children}</div>
          </main>
          <Footer />
        </SidebarProvider>
      </body>
    </html>
  );
}
