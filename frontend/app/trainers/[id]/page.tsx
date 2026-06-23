import Image from "next/image";
import { notFound } from "next/navigation";
import { Stars } from "@/components/ui";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { BackButton, BookingPanel } from "@/components/features";
import { ApiError } from "@/lib/api/client";
import { getTrainer } from "@/lib/api/trainers";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TrainerDetailPage({ params }: PageProps) {
  const { id } = await params;

  let trainer;
  try {
    trainer = await getTrainer(id);
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) notFound();
    throw err;
  }

  const stats = [
    { value: trainer.rating, label: "Рейтинг", showStars: true },
    { value: trainer.exp, label: "Лет опыта", showStars: false },
    { value: "120+", label: "Клиентов", showStars: false },
  ];

  return (
    <div className="screen">
      <div className="screenContent" style={{ padding: 0 }}>
        <div className={styles.photoWrap}>
          <Image src={trainer.imageUrl} alt={trainer.name} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="100vw" priority />
          <div className={styles.photoOverlay} />
          <div className={styles.photoTopBar}>
            <BackButton href="/trainers" />
          </div>
          <div className={styles.photoCaption}>
            <div className={styles.name}>{trainer.name}</div>
            <div className={styles.specialty}>{trainer.specialty}</div>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.stats}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.stat}>
                {stat.showStars && <Stars rating={trainer.rating} style={{ justifyContent: "center", marginBottom: 1 }} />}
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          <SectionTitle>О тренере</SectionTitle>
          <p className={styles.bio}>{trainer.bio}</p>

          <SectionTitle>Сертификаты</SectionTitle>
          <div className={styles.certList}>
            {trainer.certs.map((cert, i) => (
              <div key={i} className={styles.certRow}>
                <div className={styles.certIcon}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M20 7l-11 11-5-5" stroke="#C9A227" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className={styles.certText}>{cert}</span>
              </div>
            ))}
          </div>

          <SectionTitle>Специализация</SectionTitle>
          <div className={styles.specList}>
            {trainer.specs.map((spec, i) => (
              <div key={i} className={styles.specRow}>
                <span className={styles.specDot} />
                {spec}
              </div>
            ))}
          </div>

          <SectionTitle>Контакты и расписание</SectionTitle>
          <div className={styles.contactList}>
            <div className={styles.contactRow}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="#C9A227"
                  strokeWidth="1.5"
                />
              </svg>
              <div>
                <div className={styles.contactLabel}>Телефон</div>
                <div className={styles.contactValue}>{trainer.phone}</div>
              </div>
            </div>
            <div className={styles.contactRow}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="#C9A227" strokeWidth="1.5" />
                <path d="M3 9h18M8 2v4M16 2v4" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div>
                <div className={styles.contactLabel}>Расписание</div>
                <div className={styles.contactValue}>{trainer.schedule}</div>
              </div>
            </div>
          </div>

          <SectionTitle>Запись</SectionTitle>
          <BookingPanel trainerId={trainer.id} priceGroup={trainer.priceGroup} priceInd={trainer.priceInd} />
        </div>
      </div>
    </div>
  );
}
