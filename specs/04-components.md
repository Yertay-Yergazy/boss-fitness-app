# UI-компоненты

Контракты пропсов взяты из `components/*/*.d.ts` (готовая спека дизайн-системы) — реализуем в TypeScript почти буквально.

## Core (`frontend/components/ui/`)

- **Button** — `variant: primary|secondary|danger|ghost`, `size: sm|md|lg` (40/52/60px), `fullWidth`, `disabled`, `icon?`, `onClick`. `"use client"`.
- **Card** — `variant: default|elevated|hero|danger|subtle`, `padding: none|sm|md|lg|xl`, `goldAccent?`, `interactive?`, опционально `onClick`. `"use client"`.
- **Badge** — `status: active|expiring|expired|inactive|success|info`, `size`, `dot?`. Презентационный, без client-директивы.
- **Avatar** — `src?`, `name?` (инициалы как fallback), `size: xs..2xl`, `border: gold|strong|white|none`. Презентационный.
- **ProgressBar** — `current`, `total`, `showLabel?`. Презентационный.
- **SectionTitle** — `children`. Не было в исходном `.d.ts`-наборе, но используется почти на каждом экране для заголовков секций ("БЫСТРЫЕ ДЕЙСТВИЯ", "О ТРЕНЕРЕ" и т.д.) — добавлен по ходу реализации для DRY.
- **KeyBadge** — `number`, `state: free|taken|selected`, `onClick?`. `"use client"`.

> Уточнение: `"use client"` — директива на уровне файла, а не конкретного вызова компонента. Поэтому правило простое: если компонент САМ вешает `onClick` на DOM-элемент внутри своей реализации — он `"use client"` всегда, независимо от того, передан ли `onClick` в конкретном месте использования. Компонент без какого-либо `onClick` в реализации (Badge, Avatar, ProgressBar, TrainerCard, SubscriptionCard, TabBar/BackButton — у них навигация через `<Link>`) остаётся презентационным и рендерится из Server Component без проблем.

## Features (`frontend/components/features/`)

- **TrainerCard** — `name, specialty, rating?, imageSrc?, variant: list|grid`. Презентационный — навигация оборачивается снаружи в `<Link>`, не через `onClick`.
- **SubscriptionCard** — `type, status, planName, dateTo?, sessionsUsed?, sessionsTotal?, clientName?, clientId?, showQR?`. Презентационный.
- **TabBar** — `active: 'home'|'trainers'|'sessions'|'profile'`. Навигация через `<Link>` на каждый таб (не через переданный `onNav`, как в прототипе) — естественный способ в Next.js.
- **BackButton** — `href: string` (вместо `onBack` callback — снова `<Link>`).
- **GoldArcs, QRCodeSVG** — чисто декоративные SVG, презентационные, без изменений логики из `app-shared.jsx`.

## Принцип границы Server/Client

Компонент получает `"use client"` только если внутри него реально используются `onClick`/`useState`/`useEffect`/браузерные API. Презентационные компоненты (Badge, Avatar, ProgressBar, TrainerCard, SubscriptionCard, GoldArcs, QRCodeSVG) — без директивы, их можно рендерить и в Server, и в Client компонентах.
