
import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";

import Link from "next/link";

import Image from "next/image";



const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });



export const metadata: Metadata = {

  title: "Escapade On Wheels | Best Travel Agent in Kolkata",

  description: "Plan your dream Domestic and International Tour with Escapade On Wheels. Discover exciting destinations and personalized travel experiences.",

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

        <footer className="bg-gray-900 text-white">

          <div className="container mx-auto px-6 py-16">

            <div className="grid md:grid-cols-4 gap-12">

              <div>

                <h3 className="text-2xl font-bold text-primary">EscapadeOnWheels</h3>

                <p className="text-gray-400 mt-4">Discover the best travel agent in Kolkata for domestic and international tours.</p>

              </div>

              <div>

                <h3 className="text-lg font-bold">Quick Links</h3>

                <ul className="mt-4 space-y-2">

                  <li><Link href="/holidays/domestic" className="text-gray-400 hover:text-primary transition-colors">Domestic Tours</Link></li>

                  <li><Link href="/holidays/international" className="text-gray-400 hover:text-primary transition-colors">International Tours</Link></li>

                  <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</Link></li>

                  <li><Link href="/login" className="text-gray-400 hover:text-primary transition-colors">Login</Link></li>

                </ul>

              </div>

              <div>

                <h3 className="text-lg font-bold">Contact Us</h3>

                <ul className="mt-4 space-y-2 text-gray-400">

                  <li className="flex items-start"><span className="mr-2">📍</span> P-143, BLOCK A, LAKE TOWN, KOLKATA - 700 089</li>

                  <li className="flex items-center"><span className="mr-2">📧</span> <a href="mailto:escapadeonwheels@gmail.com" className="hover:text-primary">escapadeonwheels@gmail.com</a></li>

                  <li className="flex items-center"><span className="mr-2">📞</span> <a href="tel:+918240630431" className="hover:text-primary">+91 82406 30431</a></li>

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

            <div className="mt-16 border-t border-gray-800 pt-8 text-center text-gray-500">

              <p>&copy; {new Date().getFullYear()} Escapade On Wheels. All rights reserved.</p>

            </div>

          </div>

        </footer>

      </body>

    </html>

  );

}



