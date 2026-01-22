
import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";

import Link from "next/link";

import Image from "next/image";



const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });



export const metadata: Metadata = {

  title: "Thomas Cook",

  description: "Your next adventure is just a click away. Unforgettable journeys, meticulously planned.",

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {

  return (

    <html lang="en">

      <body className={`min-h-screen flex flex-col font-sans ${poppins.variable} bg-background text-foreground`}>

        <Header />

        <main className="flex-grow">

          {children}

        </main>

        <footer className="bg-gray-800 text-white">

          <div className="container mx-auto px-6 py-16">

            <div className="grid md:grid-cols-4 gap-12">

              <div>

                <h3 className="text-2xl font-bold text-primary">Thomas Cook</h3>

                <p className="text-gray-400 mt-4">Don't just book it, Thomas Cook it.</p>

              </div>

              <div>

                <h3 className="text-lg font-bold">Quick Links</h3>

                <ul className="mt-4 space-y-2">

                  <li><Link href="/tours" className="text-gray-400 hover:text-primary transition-colors">Holidays</Link></li>

                  <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>

                  <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>

                  <li><Link href="/login" className="text-gray-400 hover:text-primary transition-colors">Login</Link></li>

                </ul>

              </div>

              <div>

                <h3 className="text-lg font-bold">Contact Us</h3>

                <ul className="mt-4 space-y-2 text-gray-400">

                  <li>Email: support@thomascook.com</li>

                  <li>Phone: +1 (555) 123-4567</li>

                </ul>

              </div>

              <div>

                <h3 className="text-lg font-bold">Follow Us</h3>

                <div className="flex space-x-4 mt-4">

                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">

                    <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />

                  </a>

                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">

                    <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />

                  </a>

                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">

                    <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />

                  </a>

                </div>

              </div>

            </div>

            <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-500">

              <p>&copy; {new Date().getFullYear()} Thomas Cook. All rights reserved.</p>

            </div>

          </div>

        </footer>

      </body>

    </html>

  );

}



