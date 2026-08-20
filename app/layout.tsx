import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono-face",
});

const siteUrl = "https://perpendikular.com";
const description =
  "Perpendikular challenges assumptions, explores opposing perspectives, detects blind spots, and turns complex questions into decisions you can defend.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Perpendikular — AI that sees every angle",
    template: "%s — Perpendikular",
  },
  description,
  applicationName: "Perpendikular",
  keywords: [
    "decision intelligence",
    "AI decision making",
    "multi-perspective analysis",
    "contradiction detection",
    "blind spot analysis",
    "structured reasoning",
    "decision graph",
  ],
  authors: [{ name: "Perpendikular" }],
  creator: "Perpendikular",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Perpendikular",
    title: "Perpendikular — AI that sees every angle",
    description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perpendikular — AI that sees every angle",
    description,
    creator: "@perpendikular",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/apple-icon",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#08090b" },
  ],
  colorScheme: "dark light",
};

/** Applies the stored theme before first paint to avoid a flash. */
const themeScript = `(function(){try{var s=localStorage.getItem("pk-theme");var d=s?s==="dark":!window.matchMedia("(prefers-color-scheme: light)").matches;document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:border focus:border-border focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
