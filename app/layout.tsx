import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Linkedin, Mail } from "lucide-react";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollNavigation from "@/components/ScrollNavigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahith Gujja | Portfolio",
  description: "High-end minimalist portfolio of Mahith Gujja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-white transition-colors duration-500 font-light`}>
        <CustomCursor />

        {/* Left Sidebar Fixed Icons */}
        <div className="fixed left-0 top-0 h-full w-16 md:w-24 flex flex-col justify-end pb-12 items-center gap-8 z-50 pointer-events-none mix-blend-difference text-white">
          <a href="https://www.linkedin.com/in/mahithgujja/" target="_blank" rel="noopener noreferrer" className="pointer-events-auto hover:text-neutral-400 transition-colors">
            <Linkedin size={20} strokeWidth={1.5} />
          </a>

          <div className="group relative pointer-events-auto flex items-center justify-center">
            <a href="mailto:mahithgujja@gmail.com" className="hover:text-neutral-400 transition-colors">
              <Mail size={20} strokeWidth={1.5} />
            </a>
            {/* Tooltip */}
            <span className="absolute left-8 bg-black/80 text-white text-xs whitespace-nowrap px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none backdrop-blur-sm">
              mahithgujja@gmail.com
            </span>
          </div>
        </div>

        {/* Right Sidebar Fixed Navigation */}
        <ScrollNavigation />

        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
