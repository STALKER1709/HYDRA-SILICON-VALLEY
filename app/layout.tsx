import type { Metadata, Viewport } from "next";
import { Inter, Sora, Space_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap", weight: ["400", "500", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap", weight: ["400", "500", "600", "700", "800"] });
const spaceMono = Space_Mono({ subsets: ["latin"], variable: "--font-space-mono", display: "swap", weight: ["400", "700"] });

const siteName = "HYDRA SILICON VALLEY";
const siteDescription = "HYDRA SILICON VALLEY construit l'avenir de l'Afrique, secteur par secteur. Un écosystème panafricain engagé dans l'innovation, la technologie, l'éducation, la santé, l'agriculture et le développement durable.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hydra-silicon-valley.vercel.app"),
  title: { default: "HYDRA SILICON VALLEY | Building Africa's Future", template: "%s | HYDRA SILICON VALLEY" },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  keywords: ["HYDRA SILICON VALLEY", "Innovation africaine", "Technologie en Afrique", "Écosystème panafricain", "Développement durable", "Entrepreneuriat africain", "Transformation digitale", "Yaoundé", "Cameroun"],
  category: "Technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "fr_CM", url: "/", siteName,
    title: "HYDRA SILICON VALLEY | Building Africa's Future",
    description: siteDescription,
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: "HYDRA SILICON VALLEY" }],
  },
  twitter: { card: "summary_large_image", title: siteName, description: siteDescription, images: ["/icon-512.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, minimumScale: 1, themeColor: "#0B3D2E", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${sora.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body className="min-h-screen bg-hsv-sand font-sans text-hsv-charcoal antialiased">{children}</body>
    </html>
  );
}
