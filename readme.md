# BOSS FITNESS Design System

**Premium gym management app** — comprehensive design system for a luxury fitness brand with dark theme, gold accents, and full mobile UI kit. Includes check-in flows, subscription management, trainer booking, and visit history.

---

## Brand Identity

**Tone & Voice:** Exclusive, professional, motivating. Premium gym for serious fitness enthusiasts. Copy is direct, uses all-caps for impact, minimal emoji. Target: men and women 14+ across all fitness levels.

**Visual Motifs:** Dark minimal aesthetic with gold gradients as primary accent. Circular gold arc decorations (à la brand poster). Smooth animations, glow effects on interactive elements. No rounded corners on text/images; functional radius only (buttons 16–18px, cards 12px).

---

## Color System

| Token | Value | Usage |
|-------|-------|-------|
| `--color-dark-bg` | #0A0A0A | Page/screen background |
| `--color-dark-card` | #1A1A1A | Card, input, container surfaces |
| `--color-gold-primary` | #C9A227 | Icons, borders, accents |
| `--color-gold-light` | #F5D77A | Text highlights, active states |
| `--color-gold-gradient` | #C9A227 → #F5D77A | Buttons, primary CTAs |
| `--color-red-accent` | #C81E1E | Error, warning, expired status |
| `--color-text-primary` | #E8E8E8 | Primary text |
| `--color-text-secondary` | #9A9A9A | Secondary text, hints |

**Gradients:** All gradients are 135deg (top-left → bottom-right). Primary button: gold gradient. Hover: increase shadow. Press: slight darken or scale-down.

---

## Typography

| Level | Font | Size | Weight | Usage |
|-------|------|------|--------|-------|
| Display | Anton | 26px | 900 | Screen titles, hero text, all-caps |
| Heading | Montserrat | 19px | 700 | Card titles, section headers |
| Body | Montserrat | 13px | 400–600 | Standard text, descriptions |
| Caption | Montserrat | 10–11px | 500–700 | Labels, hints, upper-cased |
| Mono | Montserrat | 14px | 600 | Numbers (prices, keys, times) |

**Letter-spacing:** Tight on body (normal), +0.1em on all-caps labels. Avoid em dashes; use · for separators.

---

## Components

- **Button** (primary/secondary/ghost) — gold gradient or bordered, radius 14–18px, boxShadow glow
- **Card** — dark bg, 1px gold border, radius 12–16px
- **Badge/Pill** — small rounded container, uppercase text, used for status (active, expired, type)
- **Avatar** — circular with border, 44–88px
- **ProgressBar** — gold fill on dark bg
- **Input/Select** — dark bg, gold border on focus, no visible outline
- **IconButton** — 40×40px min hit target, transparent bg, gold icon
- **Checkbox/Radio** — gold outline, filled on checked
- **Tabs** — icon + label, active = gold color + icon

---

## Spacing & Layout

- Gaps: 8px, 12px, 16px, 20px, 24px (no 2px/4px in production layouts)
- Padding: Cards 14–20px. Sections 18px. Screens 16–18px sides.
- Line-height: Body 1.6–1.7. Display 1.1. Headings 1.3.
- Mobile: Full-width minus 18px sides. Safe area bottom +12px (nav bar clearance).

---

## Interactions & Motion

- **Transitions:** 200ms ease-out for color/shadow changes, 150ms for scale
- **Hover:** Opacity +10%, shadow +2 steps, slight brightness shift
- **Press:** Scale 0.98, shadow -1 step, or darken 10%
- **Animations:** Subtle pulse/glow (opacity 1 → 0.75), scan line (linear), checkmark appear (spring)
- **Reduced Motion:** Respect `@media (prefers-reduced-motion)` — remove animations, keep final state instant

---

## 📱 Mobile App (Full UI Kit)

Located at `ui_kits/mobile_app/index.html` — interactive prototype with 9 screens:

1. **Home** — User greeting, subscription card (membership display + small QR), ЧЕК-ИН CTA, 4 quick actions, upcoming trainer session
2. **ЧЕК-ИН** — Camera viewfinder with gold corner brackets, scan-line animation, location pill on detect, CTA button at bottom (sticky)
3. **Key Select** — 6×6 grid of locker numbers (free/taken/selected states), legend, confirm button
4. **Success** — Animated checkmark, key number display, auto-countdown to home
5. **Trainers List** — Grid of trainer cards (photo, name, specialty, rating)
6. **Trainer Profile** — Full-height photo with gradient overlay, stats (rating, exp, clients), bio, certs, specializations, contact + schedule, booking options (group/individual prices)
7. **History** — Chronological list of check-ins (date, time, key, trainer name, type)
8. **Profile** — Avatar, name, phone, current subscription, action buttons (renew, history, settings, logout)
9. **Subscriptions** — 3 plan cards (12 sessions, unlimited, single) with icons and prices

**Navigation:** Bottom tab bar (Home, Trainers, History, Profile) + context buttons (Back on detail screens).

**Data:** 2 real trainers (Низами + Светлана) with full bios, certs, specs, and contact info.

---

## 🏋️ Brand Voices: Trainers

### Низами — Силовые Тренировки
**Credentials:** МС РК по бодибилдингу, 20 лет стажа. Абсолютный чемпион Казахстана, Кыргызстана, Алматы, Средней Азии. Диплом КАСиТ. Нутрициолог.

**Specializations:** Набор массы, мышечный рельеф, силовые показатели, ОФП, ЛФК, реабилитация, кардиотренинг, подготовка к соревнованиям, онлайн-сопровождение, спортивное питание.

**Schedule:** Пн/Ср/Пт · Вт/Чт/Сб — 14:00–23:00  
**Phone:** 8 775 900 00 79  
**Prices:** Group 20,000₸ · Individual 30,000₸

### Светлана — Фитнес, Похудение, ЛФК
**Credentials:** Сертифицированный персональный тренер. Нутрициолог. Специалист по беременным и послеродовому восстановлению.

**Specializations:** Похудение & жиросжигание, набор массы, тренировки для беременных, восстановление после родов, грыжи & проблемы спины, детские тренировки, коррекция фигуры & осанки, спортивное питание.

**Schedule:** Пн / Ср / Пт  
**Phone:** +7 777 319 66 11 (WhatsApp)  
**Prices:** Group 20,000₸ · Individual 25,000₸

---

## 📚 How to Use

1. **In Claude Code:** Copy the entire folder. The design system is self-contained; no external dependencies.
2. **Prototype New Screens:** Use `ui_kits/mobile_app/app-screens2.jsx` as a template — same component pattern, same styling system.
3. **Extend:** Add new screens by creating new functions and routing them through the `App` navigator.
4. **For Production:** Extract components into a shared component library; migrate from inline styles to CSS modules or Tailwind if needed.

---

## 🔧 Technical Stack

- **React 18** (via CDN)
- **Babel standalone** (inline JSX)
- **CSS custom properties** (`styles.css`)
- **No build step** — all files are plain HTML/JSX, load directly in browser

---

## Files & Folders

```
styles.css                        — Global CSS tokens & resets
readme.md                         — This file
SKILL.md                          — Usage guide for Claude Code

ui_kits/
  mobile_app/
    index.html                    — Entry point (renders App)
    app-shared.jsx                — TRAINERS data, components (QRCodeSVG, StatusBar, etc.)
    app-screens1.jsx              — Home, QR, Key, Success, Sessions screens
    app-screens2.jsx              — Trainers, TrainerProfile, Profile, Subscriptions, App router

assets/
  coach-1.png                     — Trainer photo (Низами)
  coach-2.png                     — Trainer photo (Светлана)
  logo.png                        — BOSS FITNESS logo
```

---

## Next Steps

- **QR Backend:** Wire the scan button to real camera API (currently simulated)
- **Auth & Data:** Connect to backend for user login, subscription status, check-in sync
- **Notifications:** Add push/SMS integration for check-in confirmation
- **Analytics:** Track user flows, trainer bookings, visit patterns
- **Localization:** Extend to Kazakh, Russian variants as needed
