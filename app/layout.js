import { Outfit } from 'next/font/google';
import "./globals.css";
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './pages/context/AuthContext';

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
    <html lang="en" className={outfit.variable}>
      <AuthProvider>
        <body>
          <NavBar />
          {children}
          <Toaster position="top-right" />
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
