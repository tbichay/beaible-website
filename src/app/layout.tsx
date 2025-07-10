import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getThemeScript } from "@/lib/theme-script";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "beaible Consulting - KI-Beratung für die Zukunft",
  description: "Ich begleite kleine und mittlere Unternehmen bei ihrer KI-Transformation mit persönlicher Beratung aus dem Allgäu.",
  keywords: "KI Beratung, Künstliche Intelligenz, KI Transformation, Allgäu, Mittelstand, Digitalisierung, Change Management",
  authors: [{ name: "Christian Klose", url: "https://beaible-consulting.de" }],
  creator: "Christian Klose",
  publisher: "beaible Consulting",
  openGraph: {
    title: "beaible Consulting - KI-Beratung für die Zukunft",
    description: "Persönliche KI-Beratung für kleine und mittlere Unternehmen aus dem Allgäu",
    url: "https://beaible-consulting.de",
    siteName: "beaible Consulting",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://beaible-consulting.de/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "beaible Consulting - KI-Beratung für kleine und mittlere Unternehmen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "beaible Consulting - KI-Beratung für die Zukunft",
    description: "Persönliche KI-Beratung für kleine und mittlere Unternehmen aus dem Allgäu",
    images: ["https://beaible-consulting.de/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  verification: {
    // google: 'your-google-verification-code', // Add when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: getThemeScript(),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-accent-hover">
            Zum Hauptinhalt springen
          </a>
          {children}
        </Providers>
      </body>
    </html>
  );
}
