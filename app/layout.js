import { Outfit } from 'next/font/google';
import "./globals.css";
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import { ClerkProvider } from '@clerk/nextjs';
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Your App',
  description: 'Your description',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" className={outfit.variable}>
      <body>
          <NavBar />
          {children}
          <Footer />
        </body>
    </html>
    </ClerkProvider>
  );
}