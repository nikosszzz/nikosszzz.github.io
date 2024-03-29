import dynamic from "next/dynamic";
const Footer = dynamic(() => import("./components/Footer"));
const Navbar = dynamic(() => import("./components/NavBar"));
import './globals.css';
import { Inter } from 'next/font/google';
import { Suspense } from "react";
import { Metadata } from "next";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'nikoszz - Personal Website',
  description: 'Welcome to my website.',
  icons: "https://avatars.githubusercontent.com/u/53112175",
  openGraph: {
    title: 'nikoszz - Personal Website',
    description: 'Welcome to my website.',
    images: [{
      url: "https://avatars.githubusercontent.com/u/53112175"
    }]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
