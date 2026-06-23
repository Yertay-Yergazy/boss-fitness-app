# API-контракт мок-бекенда

Базовый путь: `/api`. Все ответы — JSON. Данные — in-memory моки в `backend/app/data/mock_data.py`, без БД. CORS открыт на origin фронтенда (`http://localhost:3000` в dev).

## GET /api/profile

```json
{ "id": "u1", "name": "Алексей Иванов", "initials": "АИ", "phone": "+7 777 123 4567" }
```

## GET /api/subscription

```json
{
  "type": "unlimited",
  "status": "active",
  "planName": "СТАНДАРТ · БЕЗЛИМИТ",
  "clientId": "BF-2024-001",
  "dateTo": "23.07.2026",
  "sessionsUsed": null,
  "sessionsTotal": null
}
```

## GET /api/trainers

```json
[{ "id": "1", "name": "Низами", "specialty": "БОДИБИЛДИНГ · СИЛОВЫЕ", "rating": 5.0, "imageUrl": "/images/coach-1.png" }]
```

## GET /api/trainers/{id}

Расширяет элемент списка полями: `bio, certs: string[], specs: string[], exp, schedule, phone, priceGroup, priceInd`. 404 если нет такого id.

## GET /api/sessions?upcoming=true&limit=N

История посещений (без `upcoming`) либо ближайшие будущие записи (`upcoming=true`, для Home).

```json
{
  "visitsThisMonth": 14,
  "items": [{ "date": "23 июня 2026", "time": "09:15", "lockerNumber": 8, "type": "self", "trainerName": null, "trainerId": null, "trainerImageUrl": null }]
}
```

`type: "self" | "group" | "individual"`. `trainerId`/`trainerImageUrl` присутствуют, когда есть `trainerName` — нужны для ссылки на `/trainers/[id]` и фото из карточки "Ближайшая запись" на Home (денормализация, чтобы не делать второй запрос).

## GET /api/lockers

```json
[{ "number": 1, "state": "free" }, { "number": 3, "state": "taken" }]
```

32 ячейки, фиксированный набор занятых для предсказуемости мока.

## POST /api/checkin/scan

Без тела. Ответ: `{ "success": true }`.

## POST /api/checkin/confirm

Запрос: `{ "lockerNumber": 14 }`. Ответ: `{ "keyNumber": 14, "timestamp": "10:32" }`.

## GET /api/plans

```json
[{ "id": "p12", "name": "12 ЗАНЯТИЙ", "icon": "○", "price": 35000, "description": "Месячный пакет" }]
```

## POST /api/trainers/{id}/book

Запрос: `{ "type": "group" }` (`"group" | "individual"`). Ответ: `{ "success": true, "message": "Запись подтверждена! Ожидай SMS." }`.

---

Реализация на FastAPI: `routers/{profile,subscription,trainers,sessions,lockers,checkin,plans}.py`, каждый — один роутер с одной зоной ответственности (SRP); Pydantic-модели в `schemas.py`.
