import { TabBar } from "@/components/features";
import { getSessions } from "@/lib/api/sessions";
import type { SessionType } from "@/lib/api/types";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

const TYPE_LABEL: Record<SessionType, string> = {
  self: "САМОСТ.",
  group: "ГРУПП.",
  individual: "ИНДИВИД.",
};

export default async function HistoryPage() {
  const { visitsThisMonth, items } = await getSessions();

  return (
    <div className="screen">
      <div className="screenContent">
        <div className="screenTitleBlock">
          <div className="screenTitle">ИСТОРИЯ</div>
          <div className={styles.counter}>
            Посещений в этом месяце: <span className={styles.counterValue}>{visitsThisMonth}</span>
          </div>
        </div>

        <div className={styles.list}>
          {items.map((session, i) => (
            <div key={i} className={styles.row}>
              <div className={styles.icon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 7l-11 11-5-5" stroke="#C9A227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className={styles.info}>
                <div className={styles.dateTime}>
                  {session.date} · {session.time}
                </div>
                <div className={styles.trainerOrSelf}>{session.trainerName ?? "Самостоятельная тренировка"}</div>
              </div>
              <div className={styles.meta}>
                <span className={`${styles.typeLabel} ${session.type === "self" ? styles.typeLabelSelf : styles.typeLabelOther}`}>
                  {TYPE_LABEL[session.type]}
                </span>
                {session.lockerNumber !== null && <span className={styles.lockerLabel}>Ключ №{session.lockerNumber}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="sessions" />
    </div>
  );
}
