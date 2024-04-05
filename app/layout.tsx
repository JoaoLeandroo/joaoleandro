import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: [
  "100",
  "300",
  "400",
  "500",
  "700",
  "900"
] });

export const metadata: Metadata = {
  title: "JoaoLeandro - Desenvolvedor Front-End",
  description: "em desenvolvimento...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
