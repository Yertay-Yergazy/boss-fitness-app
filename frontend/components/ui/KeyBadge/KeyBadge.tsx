"use client";

import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import styles from "./KeyBadge.module.css";

export interface KeyBadgeProps {
  number: number | string;
  state?: "free" | "taken" | "selected";
  onClick?: () => void;
  style?: CSSProperties;
}

export function KeyBadge({ number, state = "free", onClick, style }: KeyBadgeProps) {
  return (
    <div
      className={cn(styles.badge, styles[state])}
      onClick={state === "taken" ? undefined : onClick}
      style={style}
    >
      {number}
    </div>
  );
}
