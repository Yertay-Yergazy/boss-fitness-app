"""Pydantic response/request models — mirrors specs/03-api.md exactly."""
from typing import Literal, Optional

from pydantic import BaseModel

SessionType = Literal["self", "group", "individual"]
BookingType = Literal["group", "individual"]
LockerState = Literal["free", "taken"]


class Profile(BaseModel):
    id: str
    name: str
    initials: str
    phone: str


class Subscription(BaseModel):
    type: Literal["unlimited", "limited", "single"]
    status: Literal["active", "expiring", "expired"]
    planName: str
    clientId: str
    dateTo: Optional[str] = None
    sessionsUsed: Optional[int] = None
    sessionsTotal: Optional[int] = None


class TrainerSummary(BaseModel):
    id: str
    name: str
    specialty: str
    rating: float
    imageUrl: str


class TrainerDetail(TrainerSummary):
    bio: str
    certs: list[str]
    specs: list[str]
    exp: str
    schedule: str
    phone: str
    priceGroup: int
    priceInd: int


class SessionItem(BaseModel):
    date: str
    time: str
    lockerNumber: Optional[int] = None
    type: SessionType
    trainerName: Optional[str] = None
    trainerId: Optional[str] = None
    trainerImageUrl: Optional[str] = None


class SessionsResponse(BaseModel):
    visitsThisMonth: int
    items: list[SessionItem]


class Locker(BaseModel):
    number: int
    state: LockerState


class ScanResponse(BaseModel):
    success: bool


class ConfirmRequest(BaseModel):
    lockerNumber: int


class ConfirmResponse(BaseModel):
    keyNumber: int
    timestamp: str


class Plan(BaseModel):
    id: str
    name: str
    icon: str
    price: int
    description: str


class BookingRequest(BaseModel):
    type: BookingType


class BookingResponse(BaseModel):
    success: bool
    message: str
