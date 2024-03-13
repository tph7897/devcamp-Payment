import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PAYMENT",
  description: "patment next app",
  icons: {
    icon: "https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-credit-card-commercial-element-cardfinancial-elementai-illustration-png-image_595759.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid place-items-center my-6">{children}</div>
      </body>
    </html>
  );
}
