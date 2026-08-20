import "./globals.css";
import React from 'react';

export const metadata = {
  title: "Vite + React to Next.js",
  description: "Converted to Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/blanka" rel="stylesheet" />
      </head>
      <body style={{ background: '#ffffff', color: '#0a0d14', overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
