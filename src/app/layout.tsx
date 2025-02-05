import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mohd Shoaib - Web Developer",
  description:
    "Mohd Shoaib is a full stack web developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-900 text-gray-100"
        )}
      >
        <Toaster/>
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-900 text-gray-100 flex-1 overflow-y-auto">
          <div className="flex-1  min-h-screen lg:rounded-tl-xl border border-transparent  overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
        
      </body>
    </html>
  );
}
