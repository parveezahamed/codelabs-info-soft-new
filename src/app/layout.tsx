import type { Metadata, Viewport } from "next";
import { DM_Sans, Geist_Mono, Instrument_Serif, Syne } from "next/font/google";
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";
import { site } from "@/config/site";

const syne = Syne({
  variable: "--font-display-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Technology consulting & IT services`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${instrumentSerif.variable} ${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#060608] text-zinc-100">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
