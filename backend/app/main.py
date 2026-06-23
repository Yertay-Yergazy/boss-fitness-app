import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import checkin, lockers, plans, profile, sessions, subscription, trainers

app = FastAPI(title="BOSS FITNESS mock API")

allowed_origins = os.environ.get("CORS_ORIGINS", "http://localhost:3000").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(profile.router)
app.include_router(subscription.router)
app.include_router(trainers.router)
app.include_router(sessions.router)
app.include_router(lockers.router)
app.include_router(checkin.router)
app.include_router(plans.router)


@app.get("/health")
def health() -> dict:
    return {"status": "ok"}
