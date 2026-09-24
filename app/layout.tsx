import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Providers from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANIM3FITS",
  description: "Ecommerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[conic-gradient(from_200deg_at_50%_50%,#00c2ff,#8e2de2,#ff6a88,#00c2ff)] bg-[length:200%_200%] animate-nb17-bg motion-reduce:animate-none min-h-svh`}>
        <Providers>
          <Navbar />
          <main className="pt-28 px-4">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
