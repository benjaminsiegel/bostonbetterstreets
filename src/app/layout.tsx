import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Boston Better Streets Coalition | Fighting for Safer Streets",
  description:
    "A resident-led coalition organizing Boston to deliver safer, lower-stress streets for everyone who walks, uses mobility devices, rides transit, bikes, or drives.",
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
      "We seek to make public support for safer streets impossible for City Hall to ignore.",
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
