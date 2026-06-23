import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Badge.module.css";

export interface BadgeProps {
  status?: "active" | "expiring" | "expired" | "inactive" | "success" | "info";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  children: ReactNode;
  style?: CSSProperties;
}

export function Badge({ status = "info", size = "md", dot = false, children, style }: BadgeProps) {
  return (
    <span className={cn(styles.badge, styles[status], styles[size])} style={style}>
      {dot && <span className={styles.dot} />}
      {children}
    </span>
  );
}
