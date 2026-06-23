"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./page.module.css";

function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyNumber = searchParams.get("key") ?? "14";
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(timer);
          router.push("/");
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className={styles.screen}>
      <div className={styles.checkWrap}>
        <div className={styles.checkCircle}>
          <svg width="46" height="46" viewBox="0 0 48 48" fill="none">
            <path d="M10 26l10 10L38 14" stroke="#C9A227" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className={styles.checkRing} />
      </div>

      <div className={styles.title}>ЗАНЯТИЕ ПОДТВЕРЖДЕНО</div>
      <div className={styles.subtitle}>Добро пожаловать!</div>

      <div className={styles.keyCard}>
        <div className={styles.keyLabel}>Ваш ключ</div>
        <div className={styles.keyValue}>№{keyNumber}</div>
        <div className={styles.keyTime}>{new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" })}</div>
      </div>

      <div className={styles.countdown}>Переход на главную через {countdown} сек...</div>

      <button type="button" className={styles.homeButton} onClick={() => router.push("/")}>
        На главную
      </button>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}
