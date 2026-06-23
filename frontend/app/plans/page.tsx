import Link from "next/link";
import { Button } from "@/components/ui";
import { BackButton } from "@/components/features";
import { listPlans } from "@/lib/api/plans";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

const PLAN_COLOR: Record<string, string> = {
  p12: "#C9A227",
  unlimited: "#F5D77A",
  single: "#9A9A9A",
};

export default async function PlansPage() {
  const plans = await listPlans();

  return (
    <div className="screen">
      <div className="screenContent">
        <div className="screenTopBar">
          <BackButton href="/" />
        </div>
        <div className="screenTitleBlock">
          <div className="screenTitle">АБОНЕМЕНТЫ</div>
          <div className="screenSubtitle">Выбери свой тариф</div>
        </div>

        <div className={styles.list}>
          {plans.map((plan) => {
            const color = PLAN_COLOR[plan.id] ?? "#C9A227";
            return (
              <div key={plan.id} className={styles.card}>
                <div className={styles.top}>
                  <div className={styles.icon} style={{ border: `2px solid ${color}`, color }}>
                    {plan.icon}
                  </div>
                  <div>
                    <div className={styles.name}>{plan.name}</div>
                    <div className={styles.desc}>{plan.description}</div>
                  </div>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.price}>{plan.price.toLocaleString("ru")} ₸</div>
                  <Link href="/">
                    <Button variant={color === "#F5D77A" ? "primary" : "ghost"} size="sm" fullWidth={false}>
                      Купить
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
