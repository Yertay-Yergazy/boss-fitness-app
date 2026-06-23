"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Card.module.css";

export interface CardProps {
  variant?: "default" | "elevated" | "hero" | "danger" | "subtle";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  goldAccent?: boolean;
  interactive?: boolean;
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}

export function Card({
  variant = "default",
  padding = "md",
  goldAccent = false,
  interactive = false,
  children,
  onClick,
  style,
}: CardProps) {
  return (
    <div
      className={cn(
        styles.card,
        styles[variant],
        styles[`padding-${padding}`],
        goldAccent && styles.goldAccent,
        interactive && styles.interactive,
      )}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
}
