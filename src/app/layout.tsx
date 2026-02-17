import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kjeldsberg Eiendomsforvaltning | Totalleverandør av drift og forvaltning",
  description: "Vi skaper trygghet for eierne og trivsel for leietakerne. Totalleverandør av drift og forvaltning innen eiendom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${openSans.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
