import type { Metadata } from "next";
import { dir } from 'i18next'
import { Inter, DM_Sans } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Precious Guide",
  description: "Stress free travel",
};

const languages = ['en', 'pl']

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {lng: string}
}) {
  
  return (
    <html lang={params.lng} dir={dir(params.lng)}>
      <body className={`${dmSans.className} h-full`}>{children}</body>
    </html>
  );
}
