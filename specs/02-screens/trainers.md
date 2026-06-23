# Тренеры (список) — `/trainers`

**Тип:** Server Component. **Низ:** `<TabBar active="trainers">`.

## Данные

`GET /api/trainers` → список `{ id, name, specialty, rating, imageUrl }`

## Layout

Заголовок "ТРЕНЕРЫ" + подпись. Список `<TrainerCard variant="list">`, каждая обёрнута в `<Link href="/trainers/[id]">`.
