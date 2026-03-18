import ShopPageClient from "./_components/ShopPageClient";
// SEO metadata
export const metadata = {
  title: "TinaSoft Nexus Shop | Best ICT Products in Zimbabwe",
  description:
    "Shop the latest ICT products and solutions from TinaSoft Nexus. Explore laptops, software, and networking equipment in Zimbabwe.",
  keywords: [
    "TinaSoft Nexus Shop",
    "ICT products Zimbabwe",
    "Buy laptops Harare",
    "Networking solutions Zimbabwe",
    "Software solutions Harare",
    "Laptops in Harare",
  ],
  openGraph: {
    title: "TinaSoft Nexus Shop | Best ICT Products in Zimbabwe",
    description:
      "Browse and buy high-quality ICT products and solutions from TinaSoft Nexus in Zimbabwe.",
    url: "https://tinasoftnexus.co.zw/shop",
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
};

export default function Page() {
  return <ShopPageClient />;
}
