import type { Metadata } from "next";
import {
  Poppins,
  Plus_Jakarta_Sans,
  Playfair_Display,
  DM_Mono,
  Barlow_Condensed,
} from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { CurrencyProvider } from "@/context/CurrencyContext";
import Script from "next/script";
import ToastContainer from "@/components/Toast";

/* ── Fonts ── */
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-condensed",
});

/* ── Metadata ── */
export const metadata: Metadata = {
  title: {
    default: "INGLU",
    template: "%s | INGLU",
  },
  description: "The Fastest Growing Global Youth Community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-848Y13XWYR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-848Y13XWYR');
          `}
        </Script>
      </head>

      <body
        className={` ${poppins.variable} ${plusJakartaSans.variable} ${playfair.variable} ${dmMono.variable} ${barlowCondensed.variable} relative antialiased`}
      >
        <AuthProvider>
          <CartProvider>
            <Header />
            <CurrencyProvider>{children}</CurrencyProvider>
            <ToastContainer />

            {/* Razorpay Script */}
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />

            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
