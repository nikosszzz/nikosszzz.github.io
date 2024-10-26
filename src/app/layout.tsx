import dynamicLoad from "next/dynamic";
import React, { Suspense } from "react";
import { Metadata } from "next";
import { Inter } from 'next/font/google';

const Footer = dynamicLoad(() => import("./components/Footer"));
const Navbar = dynamicLoad(() => import("./components/NavBar"));

import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'nikoszz - Personal Website',
  description: 'Welcome to my website.',
  icons: "https://avatars.githubusercontent.com/u/53112175"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Suspense>
            <Navbar />
            <main className="flex-grow flex flex-col px-5 pt-5 mt-16">
              {children}
            </main>
            <Footer />
          </Suspense>
        </div>
      </body>
    </html>
  );
}