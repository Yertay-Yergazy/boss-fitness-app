from datetime import datetime

from fastapi import APIRouter

from app.schemas import ConfirmRequest, ConfirmResponse, ScanResponse

router = APIRouter(prefix="/api/checkin", tags=["checkin"])


@router.post("/scan", response_model=ScanResponse)
def scan() -> dict:
    return {"success": True}


@router.post("/confirm", response_model=ConfirmResponse)
def confirm(payload: ConfirmRequest) -> dict:
    return {"keyNumber": payload.lockerNumber, "timestamp": datetime.now().strftime("%H:%M")}
