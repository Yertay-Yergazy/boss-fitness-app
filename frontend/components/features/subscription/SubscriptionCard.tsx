import type { CSSProperties } from "react";
import { Badge } from "@/components/ui/Badge/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar/ProgressBar";
import { GoldArcs } from "@/components/features/decor/GoldArcs";
import { QRCodeSVG } from "@/components/features/decor/QRCodeSVG";
import styles from "./SubscriptionCard.module.css";

export interface SubscriptionCardProps {
  type?: "unlimited" | "limited" | "single";
  status?: "active" | "expiring" | "expired";
  planName?: string;
  dateTo?: string;
  sessionsUsed?: number;
  sessionsTotal?: number;
  clientId?: string;
  showQR?: boolean;
  style?: CSSProperties;
}

const STATUS_LABEL: Record<NonNullable<SubscriptionCardProps["status"]>, string> = {
  active: "● Активен",
  expiring: "● Скоро истекает",
  expired: "● Истёк",
};

/** Презентационный (см. specs/04-components.md) — действие "продлить" живёт на странице, не внутри карточки. */
export function SubscriptionCard({
  type = "unlimited",
  status = "active",
  planName = "СТАНДАРТ · БЕЗЛИМИТ",
  dateTo,
  sessionsUsed,
  sessionsTotal,
  clientId = "BF-2024-001",
  showQR = true,
  style,
}: SubscriptionCardProps) {
  return (
    <div className={styles.card} style={style}>
      <GoldArcs style={{ top: "-80px", right: "-80px" }} />
      <div className={styles.header}>
        <div>
          <div className={styles.planName}>{planName}</div>
          <div className={styles.clientId}>BOSS FITNESS · {clientId}</div>
        </div>
        <Badge status={status} size="sm">
          {STATUS_LABEL[status]}
        </Badge>
      </div>
      <div className={styles.footer}>
        {type === "limited" && sessionsUsed !== undefined && sessionsTotal !== undefined ? (
          <div className={styles.progressArea}>
            <ProgressBar current={sessionsUsed} total={sessionsTotal} />
          </div>
        ) : (
          dateTo && (
            <div>
              <div className={styles.dateLabel}>Действует до</div>
              <div className={styles.dateValue}>{dateTo}</div>
            </div>
          )
        )}
        {showQR && (
          <div className={styles.qrBox}>
            <QRCodeSVG size={56} />
          </div>
        )}
      </div>
    </div>
  );
}
