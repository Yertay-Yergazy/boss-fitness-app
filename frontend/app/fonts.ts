import { Anton, Inter, Montserrat } from "next/font/google";

/**
 * next/font/google самостоятельно скачивает и хостит шрифты на этапе сборки
 * (никаких внешних запросов к fonts.googleapis.com в браузере) и генерирует
 * CSS-переменную с готовым font-family + подобранным fallback-шрифтом.
 * Имена переменных совпадают с tokens/typography.css для совместимости.
 */
export const fontDisplay = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const fontHeading = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const fontBody = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});
