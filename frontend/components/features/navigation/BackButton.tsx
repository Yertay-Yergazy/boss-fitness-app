import Link from "next/link";
import styles from "./BackButton.module.css";

export interface BackButtonProps {
  href: string;
}

/** Навигация назад через <Link href> — презентационный, без onClick (см. specs/04-components.md). */
export function BackButton({ href }: BackButtonProps) {
  return (
    <Link href={href} className={styles.button} aria-label="Назад">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M15 18l-6-6 6-6" stroke="#C9A227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
