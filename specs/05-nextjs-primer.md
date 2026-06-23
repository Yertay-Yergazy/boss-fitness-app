# Next.js для React-разработчика — шпаргалка

Ты знаешь React (компоненты, хуки, JSX). Next.js — это фреймворк НАД React, который добавляет роутинг, серверный рендеринг и сборку. Вот что новое.

## 1. Файловая структура = роутинг (App Router)

В обычном React ты сам настраивал `react-router`. В Next.js (App Router, папка `app/`) **путь к файлу = URL**:

```
app/page.tsx              → /
app/trainers/page.tsx     → /trainers
app/trainers/[id]/page.tsx → /trainers/1, /trainers/2, ... (динамический параметр)
app/checkin/page.tsx      → /checkin
app/checkin/keys/page.tsx → /checkin/keys
app/layout.tsx            → общий каркас (html/body/шрифты) для ВСЕХ страниц
```

`page.tsx` — обязательное имя файла для "это страница". `layout.tsx` — обёртка, которая не перерендеривается при переходах между дочерними страницами.

## 2. Server Components vs Client Components — главное новое понятие

По умолчанию **любой компонент в `app/` — Server Component**. Он выполняется на сервере (Node.js), не попадает в JS-бандл браузера, может напрямую делать `await fetch(...)` без `useEffect`/`useState`/`isLoading`:

```tsx
// app/trainers/page.tsx — Server Component, никакой директивы не нужно
export default async function TrainersPage() {
  const trainers = await fetch('http://backend:8000/api/trainers').then(r => r.json());
  return <ul>{trainers.map(t => <li key={t.id}>{t.name}</li>)}</ul>;
}
```

Но Server Component **не может**: использовать `useState`, `useEffect`, `onClick` и любые браузерные события — у него нет интерактивности, он просто рендерится в HTML один раз на сервере.

Как только нужен `useState`/`onClick`/`useEffect` — добавь директиву `"use client"` первой строкой файла, и компонент станет обычным React-компонентом, как ты привык (выполняется в браузере, можно вешать обработчики):

```tsx
"use client";
import { useState } from 'react';
export default function KeySelector() {
  const [selected, setSelected] = useState<number | null>(null);
  // ...
}
```

**Правило в этом проекте:** если экран просто показывает данные и переходит по тапу — Server Component. Если есть локальный state/таймер/выбор — Client Component. Список того, что куда, — `specs/02-screens/*.md`.

## 3. Навигация: `<Link>` вместо `<a>`, `useRouter` вместо `history.push`

```tsx
import Link from 'next/link';
<Link href="/trainers/1">Низами</Link>   // работает и в Server, и в Client компонентах — это не onClick, это просто рендер ссылки
```

Внутри Client Component, когда переход нужен программно (после ответа от API):

```tsx
"use client";
import { useRouter } from 'next/navigation';
const router = useRouter();
router.push('/checkin/keys');
```

Параметры маршрута и query-строки:

```tsx
import { useParams, useSearchParams } from 'next/navigation';
const { id } = useParams();              // /trainers/[id] → id
const params = useSearchParams();
const key = params.get('key');            // /checkin/success?key=14
```

## 4. Почему функцию нельзя передать из Server в Client компонент

В обычном React можно: `<Card onClick={() => ...} />` откуда угодно. В Next.js Server Component не может передать JS-функцию Client-компоненту как проп — сервер и браузер физически разные процессы, функция не "доедет" через сеть. Поэтому:

- Если нужна просто навигация — оборачиваем в `<Link>`, без функций.
- Если нужна реальная интерактивность с состоянием (например, кнопки бронирования в профиле тренера) — выносим этот кусок в отдельный маленький `"use client"`-компонент ("остров"), которому передаём только обычные данные (строки/числа/объекты), а не функции. Пример в проекте: `BookingPanel` на `/trainers/[id]`.

## 5. Переменные окружения: где видны, где нет

- `NEXT_PUBLIC_API_URL` — попадает и в серверный, и в браузерный код (любая переменная с префиксом `NEXT_PUBLIC_` зашивается в JS-бандл на этапе сборки).
- `INTERNAL_API_URL` (без префикса) — доступна **только** на сервере (в Server Components, в `route.ts`). Используем её, когда сервер фронтенда внутри Docker обращается к бекенду по внутреннему имени контейнера `http://backend:8000`, а браузер пользователя обращается по `http://localhost:8000` (он не знает, что такое `backend` — это имя видно только внутри docker-сети).

## 6. Картинки: `next/image` вместо `<img>`

```tsx
import Image from 'next/image';
<Image src="/images/coach-1.png" alt="Низами" fill style={{ objectFit: 'cover' }} />
```

Next.js сам генерирует разные размеры и форматы (webp), но требует знать размеры (`width`/`height` или `fill` + родитель с заданными размерами) и настройки в `next.config` для внешних доменов (нам не нужно — все фото лежат в `/public`, локальные).

## 7. Команды

```bash
pnpm install         # установить зависимости
pnpm dev             # дев-сервер с hot reload, http://localhost:3000
pnpm build           # production-сборка
pnpm start           # запустить собранную версию
```

## 8. Что НЕ нужно объяснять отдельно

Компоненты, хуки (`useState`/`useEffect`), JSX, пропсы, TypeScript-интерфейсы — это всё обычный React, который ты уже знаешь. Next.js добавляет только роутинг (п.1), границу Server/Client (п.2) и немного конфигурации (env, картинки).
