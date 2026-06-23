"""In-memory mock data. No database at this stage — see specs/03-api.md."""

PROFILE = {
    "id": "u1",
    "name": "Алексей Иванов",
    "initials": "АИ",
    "phone": "+7 777 123 4567",
}

SUBSCRIPTION = {
    "type": "unlimited",
    "status": "active",
    "planName": "СТАНДАРТ · БЕЗЛИМИТ",
    "clientId": "BF-2024-001",
    "dateTo": "23.07.2026",
    "sessionsUsed": None,
    "sessionsTotal": None,
}

TRAINERS = [
    {
        "id": "1",
        "name": "Низами",
        "specialty": "БОДИБИЛДИНГ · СИЛОВЫЕ",
        "rating": 5.0,
        "imageUrl": "/images/coach-1.png",
        "bio": (
            "МС РК по бодибилдингу. 20 лет тренерского стажа. Абсолютный чемпион "
            "Казахстана, Кыргызстана, Алматы и Средней Азии по бодибилдингу. "
            "Чемпион Средней Азии по становой тяге. Многократный призер "
            "международных турниров (Mr. Olympia Amateur). Дипломированный "
            "тренер КАСиТ. Нутрициолог."
        ),
        "certs": [
            "МС РК по бодибилдингу",
            "Диплом КАСиТ — Казахская Академия Спорта и Туризма",
            "Тренер национального уровня",
            "Нутрициолог",
        ],
        "exp": "20",
        "schedule": "Пн / Ср / Пт · Вт / Чт / Сб — 14:00–23:00",
        "phone": "8 775 900 00 79",
        "specs": [
            "Набор веса и мышечный рельеф",
            "Силовые показатели и ОФП",
            "ЛФК и реабилитация после травм",
            "Кардиотренинг",
            "Подготовка к соревнованиям",
            "Онлайн-сопровождение",
            "Спортивное питание и БАДы",
        ],
        "priceGroup": 20000,
        "priceInd": 30000,
    },
    {
        "id": "2",
        "name": "Светлана",
        "specialty": "ФИТНЕС · ПОХУДЕНИЕ · ЛФК",
        "rating": 4.9,
        "imageUrl": "/images/coach-2.png",
        "bio": (
            "Тренер с индивидуальным подходом к каждому клиенту. Специализируется "
            "на похудении, наборе мышечной массы, восстановлении после родов и "
            "тренировках для беременных. Работает с грыжами и проблемами со "
            "спиной. Консультирует по спортивному питанию."
        ),
        "certs": [
            "Сертифицированный персональный тренер",
            "Нутрициолог — спортивное питание",
            "Тренировки для беременных и послеродовое восстановление",
        ],
        "exp": "5+",
        "schedule": "Пн / Ср / Пт",
        "phone": "+7 777 319 66 11",
        "specs": [
            "Похудение и жиросжигание",
            "Набор мышечной массы",
            "Тренировки для беременных",
            "Восстановление после родов",
            "Грыжи и проблемы со спиной",
            "Детские тренировки",
            "Коррекция фигуры и осанки",
            "Спортивное питание",
        ],
        "priceGroup": 20000,
        "priceInd": 25000,
    },
]

SESSIONS = {
    "visitsThisMonth": 14,
    "items": [
        {"date": "23 июня 2026", "time": "09:15", "lockerNumber": 8, "type": "self", "trainerName": None},
        {"date": "21 июня 2026", "time": "11:00", "lockerNumber": 14, "type": "individual", "trainerName": "Низами"},
        {"date": "19 июня 2026", "time": "09:30", "lockerNumber": 5, "type": "self", "trainerName": None},
        {"date": "17 июня 2026", "time": "18:00", "lockerNumber": 22, "type": "group", "trainerName": "Светлана"},
        {"date": "14 июня 2026", "time": "10:00", "lockerNumber": 3, "type": "self", "trainerName": None},
        {"date": "12 июня 2026", "time": "11:30", "lockerNumber": 17, "type": "individual", "trainerName": "Низами"},
    ],
}

UPCOMING_SESSIONS = [
    {
        "date": "Ср, 25 июня",
        "time": "10:00",
        "lockerNumber": None,
        "type": "individual",
        "trainerName": "Низами",
        "trainerId": "1",
        "trainerImageUrl": "/images/coach-1.png",
    }
]

TAKEN_LOCKERS = {3, 7, 11, 15, 21, 27}
LOCKERS = [
    {"number": n, "state": "taken" if n in TAKEN_LOCKERS else "free"}
    for n in range(1, 33)
]

PLANS = [
    {"id": "p12", "name": "12 ЗАНЯТИЙ", "icon": "○", "price": 35000, "description": "Месячный пакет"},
    {"id": "unlimited", "name": "БЕЗЛИМИТ", "icon": "∞", "price": 50000, "description": "Неограниченные тренировки"},
    {"id": "single", "name": "РАЗОВОЕ", "icon": "●", "price": 5000, "description": "Одно посещение"},
]
