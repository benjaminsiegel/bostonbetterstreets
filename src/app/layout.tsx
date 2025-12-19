import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Boston Better Streets Coalition | Fighting for Safer Streets",
  description:
    "We are a grassroots coalition demanding Boston deliver on its promises for safer streets, better bike lanes, and accessible public transit for everyone.",
  keywords: [
    "Boston",
    "street safety",
    "bike lanes",
    "pedestrian safety",
    "Hyde Park Avenue",
    "Vision Zero",
    "complete streets",
    "traffic calming",
  ],
  openGraph: {
    title: "Boston Better Streets Coalition",
    description:
      "Fighting for safer streets in Boston. Join 700+ residents demanding action.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
