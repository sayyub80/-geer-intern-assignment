import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nakash Jewels',
  description: 'Exquisite jewelry collections for every occasion',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-bold text-amber-600">
                Nakash Jewels
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-800 hover:text-amber-600 transition">
                  Home
                </Link>
                <Link href="/products" className="text-gray-800 hover:text-amber-600 transition">
                  Products
                </Link>
                <Link href="/about" className="text-gray-800 hover:text-amber-600 transition">
                  About
                </Link>
                <Link href="/contact" className="text-gray-800 hover:text-amber-600 transition">
                  Contact
                </Link>
              </nav>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-600 hover:text-amber-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="p-2 text-gray-600 hover:text-amber-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Nakash Jewels</h3>
                <p className="text-gray-400">
                  Exquisite jewelry collections crafted with passion and precision.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                  <li><Link href="/products" className="text-gray-400 hover:text-white transition">Products</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white transition">FAQ</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition">Shipping</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition">Returns</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                <address className="text-gray-400 not-italic">
                  <p>123 Jewelry Street</p>
                  <p>Diamond District, NY 10001</p>
                  <p className="mt-2">Email: info@nakashjewels.com</p>
                  <p>Phone: (212) 555-0123</p>
                </address>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} Nakash Jewels. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}