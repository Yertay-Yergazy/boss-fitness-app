import type { CSSProperties } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import styles from "./Avatar.module.css";

export interface AvatarProps {
  src?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  border?: "gold" | "strong" | "white" | "none";
  style?: CSSProperties;
}

function initialsOf(name?: string): string {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  return parts.slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "").join("");
}

export function Avatar({ src, name, size = "md", border = "none", style }: AvatarProps) {
  const sizeClass = size === "2xl" ? styles.size2xl : styles[size];
  return (
    <div className={cn(styles.avatar, sizeClass, styles[`border-${border}`])} style={style}>
      {src ? (
        <Image src={src} alt={name ?? "avatar"} fill className={styles.image} sizes="120px" />
      ) : (
        initialsOf(name)
      )}
    </div>
  );
}
