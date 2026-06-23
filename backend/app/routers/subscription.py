from fastapi import APIRouter

from app.data.mock_data import SUBSCRIPTION
from app.schemas import Subscription

router = APIRouter(prefix="/api/subscription", tags=["subscription"])


@router.get("", response_model=Subscription)
def get_subscription() -> dict:
    return SUBSCRIPTION
