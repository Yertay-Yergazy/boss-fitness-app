"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BackButton } from "@/components/features";
import { KeyBadge } from "@/components/ui";
import { confirm as confirmCheckin } from "@/lib/api/checkin";
import { listLockers } from "@/lib/api/lockers";
import type { Locker } from "@/lib/api/types";
import { cn } from "@/lib/cn";
import styles from "./page.module.css";

export default function KeySelectPage() {
  const router = useRouter();
  const [lockers, setLockers] = useState<Locker[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    listLockers().then(setLockers);
  }, []);

  async function handleConfirm() {
    if (!selected) return;
    setSubmitting(true);
    const { keyNumber } = await confirmCheckin({ lockerNumber: selected });
    router.push(`/checkin/success?key=${keyNumber}`);
  }

  return (
    <div className="screen">
      <div className="screenContent">
        <div className="screenTopBar">
          <BackButton href="/checkin" />
        </div>
        <div className="screenTitleBlock">
          <div className="screenTitle">ВЫБЕРИ КЛЮЧ</div>
          <div className={styles.subtitle}>Ключ закреплён за тобой на время тренировки</div>
        </div>

        <div className={styles.grid}>
          {lockers.map((locker) => (
            <KeyBadge
              key={locker.number}
              number={locker.number}
              state={locker.state === "taken" ? "taken" : selected === locker.number ? "selected" : "free"}
              onClick={() => setSelected(locker.number)}
            />
          ))}
        </div>

        <div className={styles.legend}>
          <span className={styles.legendItem}>
            <span className={cn(styles.legendDot, styles.legendDotFree)} />
            Свободен
          </span>
          <span className={styles.legendItem}>
            <span className={cn(styles.legendDot, styles.legendDotTaken)} />
            Занят
          </span>
          <span className={styles.legendItem}>
            <span className={cn(styles.legendDot, styles.legendDotSelected)} />
            Ваш
          </span>
        </div>
      </div>

      <div className={styles.footer}>
        <button
          type="button"
          disabled={!selected || submitting}
          onClick={handleConfirm}
          className={cn(styles.confirmButton, selected ? styles.confirmEnabled : styles.confirmDisabled)}
        >
          {selected ? `Подтвердить — ключ №${selected}` : "Выбери ключ"}
        </button>
      </div>
    </div>
  );
}
