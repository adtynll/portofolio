import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import PageLoader from "@/components/PageLoader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Adit | Cyber Security Researcher",
  description: "Portfolio of Adit, Cyber Security Researcher and Bug Hunter.",
};