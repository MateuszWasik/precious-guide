import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Precious Guide",
  description: "Stress free travel",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body className={`${dmSans.className} h-full`}>{children}</body>
    </html>
  );
}
