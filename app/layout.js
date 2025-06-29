import { Outfit } from 'next/font/google';
import "./globals.css";
import NavBar from '@/app/(Frontend)/pages/NavBar';
import Footer from '@/app/(Frontend)/pages/Footer';
import { Toaster } from 'react-hot-toast';
<<<<<<< HEAD
import { AuthProvider } from '@/app/(Frontend)/pages/context/AuthContext';
=======
import AuthProvider from '@/app/(Frontend)/pages/context/AuthContext';
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef

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
<<<<<<< HEAD

=======
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
      <AuthProvider>
        <body>
          <NavBar />
          {children}
<<<<<<< HEAD
          <Toaster position="top-center" />
=======
          <Toaster position="top-right" />
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
