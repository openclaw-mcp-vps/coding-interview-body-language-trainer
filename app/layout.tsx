import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interview Body Language Trainer",
  description: "Practice coding interviews with real-time webcam feedback on body language, eye contact, and speaking pace."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1d6dd0fb-0ed5-4a2a-b579-e2488dd5fc26"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
