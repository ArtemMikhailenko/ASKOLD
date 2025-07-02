import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "$ASKOLD - Ancient Rus Meme Coin on Solana | Official Website",
  description: "Join the legendary Prince Askold's journey in the crypto realm. $ASKOLD is a deflationary Solana-based memecoin with 3% tax, holder rewards, and strong community. Buy $ASKOLD now on Jupiter & Raydium.",
  keywords: [
    "$ASKOLD",
    "ASKOLD token",
    "Solana memecoin", 
    "Prince Askold",
    "Ancient Rus",
    "Kyivan Rus",
    "SPL token",
    "deflationary crypto",
    "Jupiter exchange",
    "Raydium",
    "crypto investment",
    "meme coin",
    "DeFi",
    "blockchain",
    "Solana ecosystem"
  ],
  authors: [{ name: "$ASKOLD Team" }],
  creator: "$ASKOLD Team",
  publisher: "$ASKOLD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.askold.online"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "$ASKOLD - Ancient Rus Meme Coin on Solana",
    description: "Manage your portfolio like a true prince. Join the first meme coin dedicated to legendary Prince Askold, who united the lands and treasures of ancient Rus.",
    url: "https://www.askold.online",
    siteName: "$ASKOLD",
    images: [
      {
        url: "/logo500.png",
        width: 500,
        height: 500,
        alt: "$ASKOLD Token Logo - Ancient Rus Meme Coin",
      },
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Prince Askold - Legendary Varangian Ruler",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "$ASKOLD - Ancient Rus Meme Coin on Solana",
    description: "Join Prince Askold's legendary journey in crypto. Deflationary Solana token with holder rewards. 1000x potential! 🏰⚔️",
    site: "@askoldcoin",
    creator: "@askoldcoin",
    images: ["/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo500.png", sizes: "500x500", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/logo500.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "cryptocurrency",
  classification: "DeFi, Cryptocurrency, Meme Token",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#b39243" },
    { media: "(prefers-color-scheme: dark)", color: "#130c18" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    // Add your verification codes here when you get them
    // google: "your-google-site-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-site-verification-code",
  },
  other: {
    "crypto-token": "$ASKOLD",
    "blockchain": "Solana",
    "contract-address": "5itemFgavrdSuJDwJVERQwR2q9pQAQHqWUZ6rV1ViDBq",
    "token-standard": "SPL",
    "launch-year": "2025",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for crypto/DeFi */}
        <meta name="application-name" content="$ASKOLD" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="$ASKOLD" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#b39243" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Structured Data for Crypto */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "$ASKOLD",
              description: "Ancient Rus Meme Coin on Solana Blockchain",
              url: "https://www.askold.online",
              logo: "https://www.askold.online/logo500.png",
              sameAs: [
                "https://twitter.com/askoldcoin",
                "https://solscan.io/token/5itemFgavrdSuJDwJVERQwR2q9pQAQHqWUZ6rV1ViDBq"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["English", "Russian", "Ukrainian"]
              },
              foundingDate: "2025",
              industry: "Cryptocurrency, DeFi, Blockchain"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}