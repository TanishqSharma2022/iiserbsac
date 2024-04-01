import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";


import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Armageddon 2024",
  description: `ARMAGEDDON is hosted by the Indian Institute of Science Education and
  Research (IISER) Bhopal. ARMAGEDDON, as the name suggests, is not just an event;
  it's a battleground for the brightest minds, a place where intellect meets
  innovation, and creativity knows no bounds.`,
  openGraph: {
    title: 'Armageddon 2024',
    description: 'Armageddon is annual tech fest of IISER Bhopal',
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
  {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
  <meta name="viewport" content="width=1024" />   */}
</head>

      
      <body suppressHydrationWarning={true} className={inter.className} >
      <Header/>
        {children}
        <Footer/>
        </body>
       

    </html>
  );
}
