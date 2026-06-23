import Link from "next/link";
import { Avatar, Button } from "@/components/ui";
import { GoldArcs, TabBar } from "@/components/features";
import { getProfile } from "@/lib/api/profile";
import { getSubscription } from "@/lib/api/subscription";
import styles from "./page.module.css";

export default async function ProfilePage() {
  const [profile, subscription] = await Promise.all([getProfile(), getSubscription()]);

  return (
    <div className="screen">
      <div className="screenContent">
        <div className={styles.header}>
          <GoldArcs style={{ top: "-40px", left: "50%", transform: "translateX(-50%)", opacity: 0.6 }} />
          <Avatar name={profile.name} size="xl" border="strong" style={{ position: "relative", zIndex: 1 }} />
          <div className={styles.name}>{profile.name.toUpperCase()}</div>
          <div className={styles.phone}>{profile.phone}</div>
        </div>

        <div className={styles.planCard}>
          <div className={styles.planLabel}>Текущий тариф</div>
          <div className={styles.planName}>{subscription.planName}</div>
          {subscription.dateTo && (
            <div className={styles.planDate}>
              Действует до <span className={styles.planDateValue}>{subscription.dateTo}</span>
            </div>
          )}
        </div>

        <div className={styles.actions}>
          <Link href="/plans">
            <Button variant="primary">Продлить абонемент</Button>
          </Link>
          <Link href="/history">
            <Button variant="secondary">История абонементов</Button>
          </Link>
          <Button variant="secondary">Настройки</Button>
          <Button variant="danger">Выход</Button>
        </div>
      </div>
      <TabBar active="profile" />
    </div>
  );
}
