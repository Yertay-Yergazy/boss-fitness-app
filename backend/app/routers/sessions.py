from fastapi import APIRouter

from app.data.mock_data import SESSIONS, UPCOMING_SESSIONS
from app.schemas import SessionsResponse

router = APIRouter(prefix="/api/sessions", tags=["sessions"])


@router.get("", response_model=SessionsResponse)
def get_sessions(upcoming: bool = False, limit: int | None = None) -> dict:
    items = UPCOMING_SESSIONS if upcoming else SESSIONS["items"]
    if limit is not None:
        items = items[:limit]
    return {"visitsThisMonth": SESSIONS["visitsThisMonth"], "items": items}
