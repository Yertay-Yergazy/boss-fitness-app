from fastapi import APIRouter

from app.data.mock_data import LOCKERS
from app.schemas import Locker

router = APIRouter(prefix="/api/lockers", tags=["lockers"])


@router.get("", response_model=list[Locker])
def list_lockers() -> list[dict]:
    return LOCKERS
