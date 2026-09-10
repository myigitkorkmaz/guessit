import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";
import Navbar from "@/components/Navbar";
import AuthModal from "@/components/AuthModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GuessIt — Every number is a game.",
  description: "A hub of number-guessing games — any fact in the world with a numerical value becomes a game.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} data-theme="dark">
      <body
        className="flex min-h-full flex-col bg-background font-sans text-foreground"
        suppressHydrationWarning
      >
        <AuthProvider>
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <AuthModal />
        </AuthProvider>
      </body>
    </html>
  );
}
