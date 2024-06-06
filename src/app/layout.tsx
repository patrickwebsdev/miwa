import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/features/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export const metadata: Metadata = {
  title: {
    template: "MIWA | %s",
    default: "MIWA | Poda y servicios forestales",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-white min-h-[100vh]">
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
