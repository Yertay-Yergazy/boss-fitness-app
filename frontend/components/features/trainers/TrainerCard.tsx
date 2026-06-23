import type { CSSProperties } from "react";
import Image from "next/image";
import { Stars } from "@/components/ui/Stars/Stars";
import styles from "./TrainerCard.module.css";

export interface TrainerCardProps {
  name: string;
  specialty: string;
  rating?: number;
  imageSrc?: string;
  variant?: "list" | "grid";
  style?: CSSProperties;
}

/** Презентационный — навигация к профилю тренера оборачивается снаружи в <Link> (см. specs/04-components.md). */
export function TrainerCard({ name, specialty, rating, imageSrc, variant = "list", style }: TrainerCardProps) {
  if (variant === "grid") {
    return (
      <div className={styles.grid} style={style}>
        {imageSrc && <Image src={imageSrc} alt={name} fill className={styles.photoGrid} sizes="50vw" />}
        <div className={styles.gridOverlay}>
          <div className={styles.gridName}>{name}</div>
          <div className={styles.gridSpecialty}>{specialty}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.list} style={style}>
      <div className={styles.photoList}>
        {imageSrc && <Image src={imageSrc} alt={name} fill sizes="64px" />}
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.specialty}>{specialty}</div>
        {typeof rating === "number" && <Stars rating={rating} style={{ marginTop: 0 }} />}
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={styles.chevron}>
        <path d="M9 18l6-6-6-6" stroke="rgba(201,162,39,0.5)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  );
}
