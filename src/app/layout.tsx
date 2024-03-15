import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";
import { roboto } from "./const/fonts";


export const metadata: Metadata = {
  title: "CSyD Union",
  description: "Club Social y Deportivo Union - Maipu - Buenos Aires - Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Providers>
          {children}  
        </Providers>  
      </body>
    </html>
  );
}
