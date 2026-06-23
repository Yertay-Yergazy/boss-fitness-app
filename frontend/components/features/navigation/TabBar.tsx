import Link from "next/link";
import { cn } from "@/lib/cn";
import styles from "./TabBar.module.css";

export type TabId = "home" | "trainers" | "sessions" | "profile";

interface TabDef {
  id: TabId;
  href: string;
  label: string;
  icon: (color: string) => React.ReactNode;
}

const TABS: TabDef[] = [
  {
    id: "home",
    href: "/",
    label: "Главная",
    icon: (c) => (
      <>
        <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" stroke={c} strokeWidth="1.5" />
      </>
    ),
  },
  {
    id: "trainers",
    href: "/trainers",
    label: "Тренеры",
    icon: (c) => (
      <>
        <circle cx="9" cy="7" r="4" stroke={c} strokeWidth="1.5" />
        <path d="M3 21c0-4 2.7-6 6-6s6 2 6 6" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 3a4 4 0 0 1 0 8" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 21c0-3-1.5-5-4-6" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    id: "sessions",
    href: "/history",
    label: "История",
    icon: (c) => (
      <>
        <rect x="3" y="4" width="18" height="18" rx="3" stroke={c} strokeWidth="1.5" />
        <path d="M3 9h18M8 2v4M16 2v4" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    id: "profile",
    href: "/profile",
    label: "Профиль",
    icon: (c) => (
      <>
        <circle cx="12" cy="8" r="4" stroke={c} strokeWidth="1.5" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
];

export interface TabBarProps {
  active: TabId;
}

/** Навигация через <Link> — никакого onClick, поэтому TabBar остаётся презентационным (см. specs/04-components.md). */
export function TabBar({ active }: TabBarProps) {
  return (
    <nav className={styles.bar}>
      {TABS.map((tab) => {
        const isActive = active === tab.id;
        const color = isActive ? "#C9A227" : "#9A9A9A";
        return (
          <Link key={tab.id} href={tab.href} className={styles.tab}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {tab.icon(color)}
            </svg>
            <span className={cn(styles.label, isActive ? styles.active : styles.inactive)}>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
