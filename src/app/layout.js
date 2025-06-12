import React from "react";
import "./globals.css";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "TinaSoft Nexus | Harare’s Leading ICT Company",
  description:
    "TinaSoft Nexus is Harare’s trusted ICT company offering expert software development, networking, server setups, CCTV, and tech support across Zimbabwe.",
  keywords: [
    "TinaSoft Nexus",
    "ICT Harare",
    "Software Development Zimbabwe",
    "CCTV installation Harare",
    "Networking services Harare",
    "Server setup Harare",
    "Printer maintenance Zimbabwe",
  ],
  openGraph: {
    title: "TinaSoft Nexus | Harare’s Leading ICT Company",
    description:
      "Expert IT and software solutions including networking, CCTV, server configuration, and repairs. Trusted by Harare’s businesses and homes.",
    url: "https://tinasoftnexus.co.zw",
    siteName: "TinaSoft Nexus",
    type: "website",
    locale: "en_ZW",
    images: [
      {
        url: "https://tinasoftnexus.co.zw/logo.png",
        width: 1200,
        height: 630,
        alt: "TinaSoft Nexus Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://tinasoftnexus.co.zw"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="TinaSoft Nexus" />
        <link rel="canonical" href="https://tinasoftnexus.co.zw" />
        <meta charSet="UTF-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "TinaSoft Nexus",
              image: "https://tinasoftnexus.co.zw/logo.png",
              "@id": "https://tinasoftnexus.co.zw",
              url: "https://tinasoftnexus.co.zw",
              telephone: "+263 71 247 1209",

              address: {
                "@type": "PostalAddress",
                streetAddress: "No. 4947 Springvale Park",
                addressLocality: "Ruwa",
                postalCode: "ZW002", // You can adjust the postal code if needed
                addressCountry: "ZW",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -17.8878, // Approximate for Ruwa
                longitude: 31.3269,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/tinasoftnexus",
                "https://www.linkedin.com/company/tinasoftnexus",
              ],
            }),
          }}
        />
      </head>
      <body className={oswald.className}>{children}</body>
    </html>
  );
}
