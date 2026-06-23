# Design tokens

Источник: `tokens/colors.css`, `tokens/spacing.css`, `tokens/typography.css`, `tokens/effects.css` (не менять, переносим как есть в `frontend/app/globals.css`).

## Цвета

| Токен | Значение | Назначение |
|---|---|---|
| `--color-bg-base` | `#0A0A0A` | Фон экрана |
| `--color-bg-surface` | `#1A1A1A` | Карточки, инпуты |
| `--color-gold-500` | `#C9A227` | Базовый золотой (иконки, рамки) |
| `--color-gold-200` | `#F5D77A` | Светлый золотой (хайлайты, активные состояния) |
| `--color-red-500` | `#E3242B` | Ошибка / просрочено |
| `--color-text-primary` | `#FFFFFF` | Основной текст |
| `--color-text-muted` | `#9A9A9A` | Вторичный текст |
| `--gradient-gold` | gold-500 → gold-200 | Основные CTA-кнопки |

Полный список — см. `tokens/colors.css`.

## Типографика

| Уровень | Шрифт | Размер | Назначение |
|---|---|---|---|
| Display | Anton | 24–26px, all-caps | Заголовки экранов |
| Heading | Montserrat 700 | 14–19px | Заголовки карточек |
| Body | Inter 400–600 | 12–13px | Обычный текст |
| Caption | Montserrat 500–700 | 9–11px, uppercase | Лейблы, статусы |

## Spacing

4px база: `--space-1`(4) … `--space-24`(96). Радиусы: `--radius-md`(10) карточки, `--radius-lg`(16)/`--radius-xl`(20) кнопки/большие карточки, `--radius-full` пилюли.

## Эффекты

Золотое свечение `--shadow-gold-sm/md/lg` на основных CTA и активных карточках. Переходы 150–350ms ease-out (`--transition-fast/normal/slow`).

## Адаптация под реальное веб-приложение (важно)

- **Без фейкового StatusBar**: в прототипе StatusBar рисует часы/батарейку для кадра макета — в реальном браузере это не нужно, верхний паддинг — `env(safe-area-inset-top)`.
- Нижний таб-бар учитывает `env(safe-area-inset-bottom)`.
- Ширина — `100%`/`100vw`, без фиксированных 414px рамок телефона.
