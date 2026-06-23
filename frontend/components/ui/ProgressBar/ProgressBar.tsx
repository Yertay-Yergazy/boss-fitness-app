import type { CSSProperties } from "react";
import styles from "./ProgressBar.module.css";

export interface ProgressBarProps {
  current: number;
  total: number;
  showLabel?: boolean;
  style?: CSSProperties;
}

export function ProgressBar({ current, total, showLabel = true, style }: ProgressBarProps) {
  const percent = total > 0 ? Math.min(100, (current / total) * 100) : 0;
  return (
    <div className={styles.wrapper} style={style}>
      {showLabel && (
        <div className={styles.labelRow}>
          <span>Использовано занятий</span>
          <span className={styles.labelValue}>
            {current} / {total}
          </span>
        </div>
      )}
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
