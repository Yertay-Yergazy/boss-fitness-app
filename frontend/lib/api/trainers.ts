import { apiRequest } from "./client";
import type { BookingRequest, BookingResponse, TrainerDetail, TrainerSummary } from "./types";

export function listTrainers(): Promise<TrainerSummary[]> {
  return apiRequest<TrainerSummary[]>("/api/trainers");
}

export function getTrainer(id: string): Promise<TrainerDetail> {
  return apiRequest<TrainerDetail>(`/api/trainers/${id}`);
}

export function bookTrainer(id: string, payload: BookingRequest): Promise<BookingResponse> {
  return apiRequest<BookingResponse>(`/api/trainers/${id}/book`, { method: "POST", body: payload });
}
