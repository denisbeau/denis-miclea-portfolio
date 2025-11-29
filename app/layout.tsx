import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denis Miclea - Portfolio",
  description: "Computer Science Student | Full-Stack Developer | Creative Technologist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

