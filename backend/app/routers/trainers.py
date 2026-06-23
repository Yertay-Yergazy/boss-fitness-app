from fastapi import APIRouter, HTTPException

from app.data.mock_data import TRAINERS
from app.schemas import BookingRequest, BookingResponse, TrainerDetail, TrainerSummary

router = APIRouter(prefix="/api/trainers", tags=["trainers"])


@router.get("", response_model=list[TrainerSummary])
def list_trainers() -> list[dict]:
    return TRAINERS


@router.get("/{trainer_id}", response_model=TrainerDetail)
def get_trainer(trainer_id: str) -> dict:
    trainer = next((t for t in TRAINERS if t["id"] == trainer_id), None)
    if trainer is None:
        raise HTTPException(status_code=404, detail="Trainer not found")
    return trainer


@router.post("/{trainer_id}/book", response_model=BookingResponse)
def book_trainer(trainer_id: str, booking: BookingRequest) -> dict:
    trainer = next((t for t in TRAINERS if t["id"] == trainer_id), None)
    if trainer is None:
        raise HTTPException(status_code=404, detail="Trainer not found")
    kind = "групповое" if booking.type == "group" else "индивидуальное"
    return {"success": True, "message": f"Запись на {kind} занятие подтверждена! Ожидай SMS."}
