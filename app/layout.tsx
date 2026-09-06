import type { Metadata } from "next";
import { Quicksand, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
})

const source_sans_3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Apiario El Dulce Vuelo",
  description: "Miel y derivados de la colmena, directo del apiario a tu mesa",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${quicksand.variable} ${source_sans_3.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}
