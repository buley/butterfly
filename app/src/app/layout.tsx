import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import GTMBody from "./components/GTMBody"; // Import GTMBody component
import GTMHead from "./components/GTMHead"; // Import GTMHead component

/*
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

import "react-bootstrap"; // Import React Bootstrap
import "react-bootstrap/Modal"; // Import Bootstrap Modal
import "react-bootstrap/Carousel"; // Import Bootstrap Carousel
import "react-bootstrap/Accordion"; // Import Bootstrap Accordion
import "react-bootstrap/Alert"; // Import Bootstrap Alert
import "react-bootstrap/Tooltip"; // Import Bootstrap Tooltip
import "react-bootstrap/Popover"; // Import Bootstrap Popover
import "react-bootstrap/Dropdown"; // Import Bootstrap Dropdown
import "react-bootstrap/DropdownButton"; // Import Bootstrap DropdownButton
import "react-bootstrap/Offcanvas"; // Import Bootstrap Offcanvas
import "react-bootstrap/Spinner"; // Import Bootstrap Spinner
import "react-bootstrap/Toast"; // Import Bootstrap Toast
import "react-bootstrap/ToastContainer"; // Import Bootstrap ToastContainer
import "react-bootstrap/ToastHeader"; // Import Bootstrap ToastHeader
import "react-bootstrap/ToastBody"; // Import Bootstrap ToastBody
import "react-bootstrap/ModalHeader"; // Import Bootstrap ModalHeader
import "react-bootstrap/ModalBody"; // Import Bootstrap ModalBody
import "react-bootstrap/ModalFooter"; // Import Bootstrap ModalFooter
import "react-bootstrap/ModalTitle"; // Import Bootstrap ModalTitle
import "react-bootstrap/ModalDialog"; // Import Bootstrap ModalDialog
*/

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sackett Ranch Monarch Butterfly Recovery Center",
  authors: [
    {
      name: "Sackett Ranch Monarch Butterfly Recovery Center",
      url: "https://butterflyrecoverycenter.com",
    },
  ],
  description: "Sackett Ranch Monarch Butterfly Recovery Center",
  keywords: [
    "Sackett Ranch",
    "Monarch Butterfly",
    "Recovery Center",
    "Conservation",
    "Nature",
  ],
  openGraph: {
    title: "Sackett Ranch Monarch Butterfly Recovery Center",
    description: "Sackett Ranch Monarch Butterfly Recovery Center",
    url: "https://butterflyrecoverycenter.com",
    siteName: "Sackett Ranch",
    images: [
      {
        url: "/path/to/image.jpg",
        width: 800,
        height: 600,
        alt: "Sackett Ranch Monarch Butterfly Recovery Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@center_twitter_handle",
    title: "Sackett Ranch Monarch Butterfly Recovery Center",
    description: "Sackett Ranch Monarch Butterfly Recovery Center",
    images: ["/path/to/image.jpg"],
    creator: "@center_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
    other: {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  },
  manifest: "/public/site.webmanifest",
  appleWebApp: {
    title: "Sackett Ranch Butterfly Recovery Center",
    statusBarStyle: "default",
    capable: true,
  },
  themeColor: "#ffffff",
  metadataBase: new URL("https://butterflyrecoverycenter.com"),
  verification: {
    google: "your-google-site-verification-code",
    other: {
      name: "google-site-verification",
      url: "your-google-site-verification-code",
    },
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
        <title>Sackett Ranch Monarch Butterfly Recovery Center</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Sackett Ranch Monarch Butterfly Recovery Center" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Sackett Ranch Monarch Butterfly Recovery Center" />
        <meta name="copyright" content="Sackett Ranch Monarch Butterfly Recovery Center" />
        <meta name="application-name" content="Sackett Ranch Monarch Butterfly Recovery Center" />
        <meta name="apple-mobile-web-app-title" content="Sackett Ranch" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/path/to/tile-image.png" />
        <meta name="msapplication-config" content="/path/to/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="og:title" content="Sackett Ranch Monarch Butterfly Recovery Center" />
        <meta name="keywords" content="Sackett Ranch, Monarch Butterfly, Recovery Center, Conservation, Nature" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@center_twitter_handle" />
        <meta name="twitter:title" content="Sackett Ranch Monarch Butterfly Recovery Center" />
        <meta name="twitter:description" content="Sackett Ranch Monarch Butterfly Recovery Center" />
        <meta name="twitter:image" content="/path/to/image.jpg" />
        <meta name="twitter:creator" content="@center_twitter_handle" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="your-google-site-verification-code" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* Shopify Buy Button JS SDK */}
        <script async src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"></script>
        <script async src="https://sdks.shopifycdn.com/buy-button-storefront/latest/buybutton-storefront.min.js"></script>
        <GTMHead /> {/* Render GTMHead component */}
        <GTMHead />

      </head>
      <body className={montserrat.className}>
        <GTMBody />
        {children}
      </body>
    </html>
  );
}
