import type { Metadata, Viewport } from "next";
import { fontBody, fontDisplay, fontHeading } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOSS FITNESS",
  description: "Премиальный фитнес-клуб BOSS FITNESS — чек-ин, тренеры, абонементы",
};

// viewportFit: "cover" — растягивает страницу под вырез/закругления экрана,
// дальше используем env(safe-area-inset-*) в globals.css/компонентах.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${fontDisplay.variable} ${fontHeading.variable} ${fontBody.variable}`}>
      <body>{children}</body>
    </html>
  );
}
