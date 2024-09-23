import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { Metadata } from "next";
const Footer = dynamic(() => import("./components/Footer"));
const Navbar = dynamic(() => import("./components/NavBar"));

import './globals.css';
const inter = Inter({ subsets: ['latin'] });
import { Inter } from 'next/font/google';

import { configDotenv } from "dotenv";
configDotenv();

export const metadata: Metadata = {
  title: 'nikoszz - Personal Website',
  description: 'Welcome to my website.',
  icons: "https://avatars.githubusercontent.com/u/53112175",
  openGraph: {
    title: 'nikoszz - Personal Website',
    description: 'Welcome to my website.'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="min-h-[100vh]">
      <body className={`${inter.className} min-h-[100vh]`}>
        <Suspense>
          <div className="min-h-screen flex flex-col justify-between">
            <Navbar />
            <div className="flex flex-col flex-1 p-20 sm:p-5 mt-16">
              <div className="flex-grow">
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </Suspense>
      </body>
    </html>
  )
}
