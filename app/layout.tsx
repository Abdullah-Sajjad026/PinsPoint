import type { Metadata } from "next";
import { Manrope } from "next/font/google";
// import { AuthContextProvider } from "@/contexts/auth-context";
import { Footer, Header } from "@/components/layout";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Providers } from "@/providers/providres";

const appFont = Manrope({
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "PinsPoint",
  description: "Pinup your findings of the web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={appFont.className}>
        <Providers>
          <div className="flex flex-col justify-between min-h-screen max-h-max">
            <Header />
            <main className="main-content flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>

      {/* <Toaster /> */}
    </html>
  );
}
