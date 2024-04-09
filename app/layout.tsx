import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({ subsets: ["latin"], weight: [
  "100",
  "300",
  "400",
  "500",
  "700",
  "900"
] });

export const metadata: Metadata = {
  title: "JoaoLeandro - Desenvolvedor Web",
  description: "João Leandro - Desenvolvedor Junior Frontend Engineer",
  keywords: [
    "Desenvolvimento Web",
    "Frontend",
    "Javascript",
    "Nextjs",
    "Reactjs",
    "typescript",
    "Tailwind css"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${font.className} bg-gradient-to-r from-slate-900 to-indigo-950`}>{children}</body>
    </html>
  );
}
