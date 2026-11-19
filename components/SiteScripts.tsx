"use client";
import Script from "next/script";

// All interactivity (loader, cursor, theme toggle, parallax, carousels,
// video player, Idea Lab, CV modal ...) lives in /public/site.js and runs
// once the page has hydrated.
export default function SiteScripts() {
  return <Script src="/site.js" strategy="afterInteractive" />;
}
