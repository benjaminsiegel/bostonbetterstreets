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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
