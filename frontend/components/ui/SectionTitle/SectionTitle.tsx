import type { ReactNode } from "react";
import styles from "./SectionTitle.module.css";

export interface SectionTitleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <div className={styles.title}>{children}</div>;
}
