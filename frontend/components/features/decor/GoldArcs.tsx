import type { CSSProperties } from "react";

export interface GoldArcsProps {
  style?: CSSProperties;
}

/** Декоративные золотые дуги (фон карточек). Перенесено из ui_kits/mobile_app/app-shared.jsx без изменений. */
export function GoldArcs({ style }: GoldArcsProps) {
  return (
    <svg
      width="280"
      height="280"
      viewBox="0 0 280 280"
      style={{ position: "absolute", pointerEvents: "none", ...style }}
    >
      <circle cx="140" cy="140" r="120" fill="none" stroke="#C9A227" strokeWidth="1.5" strokeDasharray="8 5" opacity=".18" />
      <circle cx="140" cy="140" r="96" fill="none" stroke="#F5D77A" strokeWidth="1" strokeDasharray="4 8" opacity=".12" />
      <circle cx="140" cy="140" r="142" fill="none" stroke="#C9A227" strokeWidth=".75" strokeDasharray="14 4" opacity=".10" />
      <path d="M 50 140 A 90 90 0 0 1 140 50" fill="none" stroke="#C9A227" strokeWidth="2.5" strokeLinecap="round" opacity=".22" />
      <path d="M 230 140 A 90 90 0 0 1 140 230" fill="none" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" opacity=".14" />
    </svg>
  );
}
