from fastapi import APIRouter

from app.data.mock_data import PROFILE
from app.schemas import Profile

router = APIRouter(prefix="/api/profile", tags=["profile"])


@router.get("", response_model=Profile)
def get_profile() -> dict:
    return PROFILE
