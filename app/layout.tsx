import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beginner ML Papers ? Curated Top 5",
  description: "A curated list of 5 beginner-friendly machine learning papers with summaries, why they matter, and how to read them.",
  metadataBase: new URL("https://agentic-4ce98997.vercel.app"),
  openGraph: {
    title: "Beginner ML Papers ? Curated Top 5",
    description: "A curated list of 5 beginner-friendly machine learning papers with summaries and links.",
    url: "https://agentic-4ce98997.vercel.app",
    siteName: "Beginner ML Papers",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Beginner ML Papers ? Curated Top 5",
    description: "A curated list of 5 beginner-friendly machine learning papers with summaries and links."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
