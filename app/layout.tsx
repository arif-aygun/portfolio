import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@fontsource/jetbrains-mono";
import "./globals.css";
import { ReactLenis } from "@/components/lenis-provider";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Arif Aygun | Full Stack Developer",
  description: "Backend Infrastructure & Full Stack Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-void text-paper selection:bg-acid selection:text-void`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
