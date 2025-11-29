import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "./components/layout/Footer";

const danaFont = localFont({
  src: [
    {
      path: "../public/fonts/Dana-Hairline.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Dana-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Dana-UltraLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Dana-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Dana-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Dana-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Dana-DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Dana-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Dana-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Dana-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-dana",
  display: "swap",
});

export const metadata: Metadata = {
  title: "هم‌تپش",
  description: "هم‌تپش",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={danaFont.variable}>
      {/* <header></header> */}
      <body className={danaFont.className}>{children}</body>
      <Footer />
    </html>
  );
}
