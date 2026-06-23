# Профиль тренера — `/trainers/[id]`

**Тип:** Server Component (фото, био, сертификаты, контакты) + клиентский остров `<BookingPanel trainer={...}>` для блока "ЗАПИСЬ" (там есть state выбора группового/индивидуального занятия). **Верх:** `<BackButton>` → `/trainers`. **Низ:** нет TabBar.

## Данные

`GET /api/trainers/{id}` → полная карточка: `bio, certs[], specs[], exp, schedule, phone, priceGroup, priceInd, rating, imageUrl`

## Layout (Server)

Фото на всю ширину (next/image) с градиентом и именем поверх → статы (рейтинг/лет опыта/клиентов) → "О тренере" → "Сертификаты" → "Специализация" → "Контакты и расписание" → `<BookingPanel>`.

## BookingPanel (Client island)

`booked: 'group' | 'ind' | null`. По тапу на вариант → `POST /api/trainers/{id}/book { type }` → показ "✓ Запись подтверждена! Ожидай SMS." Получает `trainer` как сериализуемый prop из родителя (без передачи функций через границу server/client).
