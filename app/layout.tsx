import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.brand} — ${site.tagline}`,
  description: "Ikan hias Discus berkualitas, dikirim ke seluruh Indonesia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${geistSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
