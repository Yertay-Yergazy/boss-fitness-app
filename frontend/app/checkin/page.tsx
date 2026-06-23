"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BackButton, QRCodeSVG } from "@/components/features";
import { scan } from "@/lib/api/checkin";
import { cn } from "@/lib/cn";
import styles from "./page.module.css";

type Phase = "idle" | "scanning" | "checking";

const STATUS_TEXT: Record<Phase, string> = {
  idle: "Наведи на QR-код у входа",
  scanning: "Сканируем...",
  checking: "● Проверяем абонемент...",
};

export default function CheckinPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (phase === "scanning") {
      const t = setTimeout(() => setPhase("checking"), 1800);
      return () => clearTimeout(t);
    }
    if (phase === "checking") {
      scan().then(() => router.push("/checkin/keys"));
    }
  }, [phase, router]);

  return (
    <div className="screen">
      <div className="screenContent" style={{ display: "flex", flexDirection: "column" }}>
        <div className={styles.topBar}>
          <BackButton href="/" />
          <div className={styles.topTitle}>ЧЕК-ИН</div>
          <div className={styles.topBarSpacer} />
        </div>

        <div className={styles.center}>
          <div className={styles.statusText}>{STATUS_TEXT[phase]}</div>

          <div className={styles.scanner}>
            <div className={cn(styles.scannerInner, phase !== "idle" && styles.scannerInnerActive)}>
              {phase !== "idle" && (
                <div className={styles.scannerQrGhost}>
                  <QRCodeSVG size={160} />
                </div>
              )}
              {phase === "scanning" && <div className={styles.scanLine} />}
              {phase === "checking" && (
                <div className={styles.scannerChecking}>
                  <svg width="52" height="52" viewBox="0 0 48 48" fill="none">
                    <path d="M10 26l10 10L38 14" stroke="#C9A227" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
            <div className={cn(styles.corner, styles.cornerTl)} />
            <div className={cn(styles.corner, styles.cornerTr)} />
            <div className={cn(styles.corner, styles.cornerBl)} />
            <div className={cn(styles.corner, styles.cornerBr)} />
          </div>

          <div className={cn(styles.locationPill, phase === "checking" && styles.locationPillVisible)}>
            <div className={styles.locationPillInner}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
                  fill="#C9A227"
                />
              </svg>
              <span className={styles.locationLabel}>BOSS FITNESS · ГЛАВНЫЙ ЗАЛ</span>
            </div>
          </div>

          <div className={styles.hint}>
            QR-код размещён на стойке ресепшена
            <br />и у турникета на входе
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <button
          type="button"
          className={cn(styles.cta, phase === "idle" ? styles.ctaIdle : styles.ctaActive)}
          onClick={phase === "idle" ? () => setPhase("scanning") : undefined}
        >
          {phase === "idle" && (
            <>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path
                  d="M23 7V1h-6M1 7V1h6M23 17v6h-6M1 17v6h6"
                  stroke="#0A0A0A"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Сканировать QR
            </>
          )}
          {phase === "scanning" && "● Идёт сканирование..."}
          {phase === "checking" && "✓ QR распознан"}
        </button>
      </div>
    </div>
  );
}
