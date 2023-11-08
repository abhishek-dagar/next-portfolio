import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/scss/index.scss";
import { UIProviders } from "@/components/providers/NEXTUI";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhishek dagar",
  description:
    "I&apos;m a software engineer with expertise in creating top-notch digital experiences. My current focus is on developing products that are accessible and centered around user needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
      <body className={inter.className}>
        <UIProviders>{children}</UIProviders>
      </body>
    </html>
  );
}
