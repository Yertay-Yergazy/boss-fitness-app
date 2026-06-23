from fastapi import APIRouter

from app.data.mock_data import PLANS
from app.schemas import Plan

router = APIRouter(prefix="/api/plans", tags=["plans"])


@router.get("", response_model=list[Plan])
def list_plans() -> list[dict]:
    return PLANS
