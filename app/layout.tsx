import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanjim Imtial — Product Manager & Growth Strategist",
  icons: { icon: "/assets/avatar.jpg" },
  description: "Product Manager, Growth Strategist & AI Systems Builder — Building scalable digital products and monetization engines.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Runs before paint so the saved theme (dark by default) never flashes.
const themeScript = "try{if('scrollRestoration' in history)history.scrollRestoration='manual'}catch(e){}window.scrollTo(0,0);try{const t=localStorage.getItem('ti_theme3');if(t)document.documentElement.dataset.theme=t}catch(e){}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=DM+Sans:opsz,wght@9..40,400..700&family=Caveat:wght@500;700&family=Mrs+Saint+Delafield&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
