# Выбор ключа — `/checkin/keys`

**Тип:** Client Component — локальный выбор ячейки до подтверждения. **Низ:** sticky CTA "ПОДТВЕРДИТЬ — КЛЮЧ №N" (disabled до выбора). **Верх:** `<BackButton>` → `/checkin`.

## Данные

`GET /api/lockers` → `[{ number: 1..32, state: 'free' | 'taken' }]` (загружается в `useEffect` при монтировании)

## Состояние

`selected: number | null` — локальный выбор. `state='taken'` ячейки некликабельны.

## Layout

Сетка 6 колонок (32 круглые ячейки), легенда (Свободен / Занят / Ваш), sticky кнопка подтверждения.

## Действие

По тапу "Подтвердить" → `POST /api/checkin/confirm { lockerNumber: selected }` → `{ keyNumber, timestamp }` → `router.push('/checkin/success?key=' + keyNumber)`.
