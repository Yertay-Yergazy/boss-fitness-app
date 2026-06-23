/** Зеркалит backend/app/schemas.py — см. specs/03-api.md. Ручное дублирование осознанно (KISS, см. specs/00-overview.md). */

export interface Profile {
  id: string;
  name: string;
  initials: string;
  phone: string;
}

export interface Subscription {
  type: "unlimited" | "limited" | "single";
  status: "active" | "expiring" | "expired";
  planName: string;
  clientId: string;
  dateTo: string | null;
  sessionsUsed: number | null;
  sessionsTotal: number | null;
}

export interface TrainerSummary {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  imageUrl: string;
}

export interface TrainerDetail extends TrainerSummary {
  bio: string;
  certs: string[];
  specs: string[];
  exp: string;
  schedule: string;
  phone: string;
  priceGroup: number;
  priceInd: number;
}

export type SessionType = "self" | "group" | "individual";

export interface SessionItem {
  date: string;
  time: string;
  lockerNumber: number | null;
  type: SessionType;
  trainerName: string | null;
  trainerId: string | null;
  trainerImageUrl: string | null;
}

export interface SessionsResponse {
  visitsThisMonth: number;
  items: SessionItem[];
}

export type LockerState = "free" | "taken";

export interface Locker {
  number: number;
  state: LockerState;
}

export interface ScanResponse {
  success: boolean;
}

export interface ConfirmRequest {
  lockerNumber: number;
}

export interface ConfirmResponse {
  keyNumber: number;
  timestamp: string;
}

export interface Plan {
  id: string;
  name: string;
  icon: string;
  price: number;
  description: string;
}

export type BookingType = "group" | "individual";

export interface BookingRequest {
  type: BookingType;
}

export interface BookingResponse {
  success: boolean;
  message: string;
}
