"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Button.module.css";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = true,
  disabled = false,
  icon,
  children,
  onClick,
  style,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(styles.button, styles[variant], styles[size], fullWidth && styles.fullWidth)}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {icon}
      {children}
    </button>
  );
}
