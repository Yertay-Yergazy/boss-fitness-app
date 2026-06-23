# ЧЕК-ИН (QR-скан) — `/checkin`

**Тип:** Client Component (`"use client"`) — есть таймеры и фазы состояния. **Низ экрана:** sticky CTA-кнопка (без TabBar). **Верх:** `<BackButton>` → `/`.

## Состояние

`phase: 'idle' | 'scanning' | 'checking'`

- `idle` → пользователь видит рамку сканера, текст "НАВЕДИ НА QR-КОД У ВХОДА", кнопка "СКАНИРОВАТЬ QR"
- по тапу на кнопку → `scanning` (анимация скан-линии ~1.8s)
- → `checking`: вызов `POST /api/checkin/scan`, показ "ПРОВЕРЯЕМ АБОНЕМЕНТ..." + чекмарк
- по успеху ответа → `router.push('/checkin/keys')`

## Данные

`POST /api/checkin/scan` → `{ success: true }` (мок всегда успешен)

## Примечания

Анимации (скан-линия, свечение углов рамки) — чистый CSS (`@keyframes`), переносим из `app-screens1.jsx`.
