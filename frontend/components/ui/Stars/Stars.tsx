import type { CSSProperties } from "react";
import styles from "./Stars.module.css";

export interface StarsProps {
  rating: number;
  style?: CSSProperties;
}

export function Stars({ rating, style }: StarsProps) {
  return (
    <div className={styles.stars} style={style}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < Math.floor(rating) ? styles.on : styles.off}>
          ★
        </span>
      ))}
    </div>
  );
}
