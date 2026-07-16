import type { Metadata } from "next";
import "./globals.css";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexoratechholdings.com"),

  title: {
    default: "Nexora Technologies Holdings LLC",
    template: "%s | Nexora Technologies Holdings LLC",
  },

  description:
    "Technology infrastructure for industries that matter. Nexora develops, owns and commercialises enterprise software, artificial intelligence and digital platforms serving regulated industries worldwide.",

  applicationName: "Nexora Technologies Holdings",

  keywords: [
    "technology holding company",
    "enterprise software",
    "artificial intelligence",
    "CareAxis",
    "Nexora AI",
    "Delaware",
    "healthcare technology",
    "compliance software",
    "governance",
    "digital transformation",
  ],

  authors: [
    {
      name: "Nexora Technologies Holdings LLC",
      url: "https://nexoratechholdings.com",
    },
  ],

  creator: "Nexora Technologies Holdings LLC",

  publisher: "Nexora Technologies Holdings LLC",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/brand/favicon.ico" },
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/brand/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexoratechholdings.com",
    siteName: "Nexora Technologies Holdings LLC",

    title: "Nexora Technologies Holdings LLC",

    description:
      "Technology infrastructure for industries that matter.",

    images: [
      {
        url: "/brand/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Nexora Technologies Holdings LLC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexora Technologies Holdings LLC",
    description: "Technology infrastructure for industries that matter.",
    images: ["/brand/og-image-1200x630.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}