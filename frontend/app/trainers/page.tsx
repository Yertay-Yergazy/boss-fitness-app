import Link from "next/link";
import { TabBar, TrainerCard } from "@/components/features";
import { listTrainers } from "@/lib/api/trainers";
import styles from "./page.module.css";

export default async function TrainersPage() {
  const trainers = await listTrainers();

  return (
    <div className="screen">
      <div className="screenContent">
        <div className="screenTitleBlock">
          <div className="screenTitle">ТРЕНЕРЫ</div>
          <div className="screenSubtitle">Выбери своего тренера</div>
        </div>
        <div className={styles.list}>
          {trainers.map((trainer) => (
            <Link key={trainer.id} href={`/trainers/${trainer.id}`} className={styles.cardLink}>
              <TrainerCard name={trainer.name} specialty={trainer.specialty} rating={trainer.rating} imageSrc={trainer.imageUrl} />
            </Link>
          ))}
        </div>
      </div>
      <TabBar active="trainers" />
    </div>
  );
}
