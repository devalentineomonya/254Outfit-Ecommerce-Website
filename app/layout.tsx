import type { Metadata } from "next";
import "./globals.css";
import NavbarMain from "@/components/common/navbar/NavbarMain";
import { Inter } from "next/font/google";
import { SidebarProvider } from "@/context/sidebarContext";
import Footer from "@/components/common/footer/Footer";
import "swiper/css/bundle";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-gray-50 antialiased`}>
        <SidebarProvider>
          <NavbarMain />
          <main className="flex items-start justify-center">
            <div className="w-full max-w-8xl">{children}</div>
          </main>
          <Footer/>
        </SidebarProvider>
      </body>
    </html>
  );
}
