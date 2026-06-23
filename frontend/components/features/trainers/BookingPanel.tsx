"use client";

import { useState } from "react";
import { bookTrainer } from "@/lib/api/trainers";
import { cn } from "@/lib/cn";
import styles from "./BookingPanel.module.css";

export interface BookingPanelProps {
  trainerId: string;
  priceGroup: number;
  priceInd: number;
}

type BookingState = "idle" | "booking" | "booked";

/**
 * Клиентский остров (specs/02-screens/trainer-detail.md): получает только
 * сериализуемые данные (id, цены) от родительского Server Component, сам
 * владеет состоянием выбора и делает POST на бекенд.
 */
export function BookingPanel({ trainerId, priceGroup, priceInd }: BookingPanelProps) {
  const [state, setState] = useState<BookingState>("idle");

  async function handleBook(type: "group" | "individual") {
    setState("booking");
    await bookTrainer(trainerId, { type });
    setState("booked");
  }

  const isBooked = state === "booked";

  return (
    <div>
      {isBooked && <div className={styles.confirmation}>✓ Запись подтверждена! Ожидай SMS.</div>}
      <div className={styles.options}>
        <button
          type="button"
          disabled={state !== "idle"}
          onClick={() => handleBook("group")}
          className={cn(styles.option, isBooked ? styles.optionPrimaryBooked : styles.optionPrimary)}
        >
          <div>
            <div className={cn(styles.optionTitle, isBooked ? styles.optionTitleGold : styles.optionTitleDark)}>
              ГРУППОВОЕ ЗАНЯТИЕ
            </div>
            <div className={cn(styles.optionDesc, isBooked ? styles.optionDescMuted : styles.optionDescDark)}>До 8 человек</div>
          </div>
          <div className={cn(styles.optionPrice, isBooked ? styles.optionPriceGold : styles.optionPriceDark)}>
            {priceGroup.toLocaleString("ru")} ₸
          </div>
        </button>

        <button
          type="button"
          disabled={state !== "idle"}
          onClick={() => handleBook("individual")}
          className={cn(styles.option, styles.optionSecondary)}
        >
          <div>
            <div className={cn(styles.optionTitle, styles.optionTitleGold)}>ИНДИВИДУАЛЬНОЕ</div>
            <div className={cn(styles.optionDesc, styles.optionDescMuted)}>Персональная программа</div>
          </div>
          <div className={cn(styles.optionPrice, styles.optionPriceGold)}>{priceInd.toLocaleString("ru")} ₸</div>
        </button>
      </div>
    </div>
  );
}
