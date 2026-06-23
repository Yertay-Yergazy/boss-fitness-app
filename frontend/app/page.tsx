import Image from "next/image";
import Link from "next/link";
import { Avatar, Badge, SectionTitle } from "@/components/ui";
import { SubscriptionCard, TabBar } from "@/components/features";
import { getProfile } from "@/lib/api/profile";
import { getSubscription } from "@/lib/api/subscription";
import { getSessions } from "@/lib/api/sessions";
import styles from "./page.module.css";

const QUICK_ACTIONS = [
  { href: "/trainers", label: "Записаться\nк тренеру", gold: true, icon: "book" as const },
  { href: "/history", label: "Мои\nзанятия", gold: false, icon: "list" as const },
  { href: "/trainers", label: "Тренеры", gold: false, icon: "people" as const },
  { href: "/plans", label: "Купить\nабонемент", gold: true, icon: "card" as const },
];

function QuickIcon({ kind, color }: { kind: "book" | "list" | "people" | "card"; color: string }) {
  if (kind === "book") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5v-10A2.5 2.5 0 0 1 6.5 2z" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "list") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "people") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="4" stroke={color} strokeWidth="1.5" />
        <path d="M3 21c0-4 2.7-6 6-6s6 2 6 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 3a4 4 0 0 1 0 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 21c0-3-1.5-5-4-6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke={color} strokeWidth="1.5" />
      <path d="M2 10h20" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export default async function HomePage() {
  const [profile, subscription, upcoming] = await Promise.all([
    getProfile(),
    getSubscription(),
    getSessions({ upcoming: true, limit: 1 }),
  ]);
  const nextSession = upcoming.items[0];

  return (
    <div className="screen">
      <div className="screenContent">
        <div className={styles.header}>
          <div className={styles.greeting}>
            <Avatar name={profile.name} border="gold" />
            <div>
              <div className={styles.greetingLabel}>Добро пожаловать,</div>
              <div className={styles.greetingName}>{profile.name.split(" ")[0].toUpperCase()}</div>
            </div>
          </div>
          <div className={styles.bellButton} aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <SubscriptionCard
          type={subscription.type}
          status={subscription.status}
          planName={subscription.planName}
          dateTo={subscription.dateTo ?? undefined}
          sessionsUsed={subscription.sessionsUsed ?? undefined}
          sessionsTotal={subscription.sessionsTotal ?? undefined}
          clientId={subscription.clientId}
          style={{ marginBottom: "var(--space-4)" }}
        />

        <Link href="/checkin" className={styles.checkinCta}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#0A0A0A" strokeWidth="1.8" />
            <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#0A0A0A" strokeWidth="1.8" />
            <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#0A0A0A" strokeWidth="1.8" />
            <rect x="13" y="13" width="4" height="4" rx="1" fill="#0A0A0A" />
            <rect x="19" y="13" width="2" height="2" rx=".5" fill="#0A0A0A" />
            <rect x="13" y="19" width="2" height="2" rx=".5" fill="#0A0A0A" />
            <rect x="17" y="17" width="4" height="4" rx="1" fill="#0A0A0A" />
          </svg>
          <span className={styles.checkinLabel}>ЧЕК-ИН</span>
        </Link>

        <SectionTitle>Быстрые действия</SectionTitle>
        <div className={styles.quickGrid}>
          {QUICK_ACTIONS.map((action, i) => (
            <Link
              key={i}
              href={action.href}
              className={`${styles.quickCard} ${action.gold ? styles.quickCardGold : styles.quickCardPlain}`}
            >
              <QuickIcon kind={action.icon} color={action.gold ? "#C9A227" : "#9A9A9A"} />
              <span className={styles.quickLabel}>{action.label}</span>
            </Link>
          ))}
        </div>

        {nextSession && nextSession.trainerId && (
          <>
            <SectionTitle>Ближайшая запись</SectionTitle>
            <Link href={`/trainers/${nextSession.trainerId}`} className={styles.upcomingCard}>
              <div className={styles.upcomingPhoto}>
                {nextSession.trainerImageUrl && (
                  <Image src={nextSession.trainerImageUrl} alt={nextSession.trainerName ?? ""} fill sizes="52px" />
                )}
              </div>
              <div className={styles.upcomingInfo}>
                <div className={styles.upcomingName}>{nextSession.trainerName}</div>
                <div className={styles.upcomingTime}>
                  {nextSession.date} · {nextSession.time}
                </div>
                <Badge status="active" size="sm">
                  {nextSession.type === "individual" ? "Индивидуальная" : "Групповая"}
                </Badge>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="rgba(201,162,39,0.5)" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </Link>
          </>
        )}
      </div>
      <TabBar active="home" />
    </div>
  );
}
