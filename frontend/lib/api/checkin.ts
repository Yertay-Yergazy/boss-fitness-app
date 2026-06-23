import { apiRequest } from "./client";
import type { ConfirmRequest, ConfirmResponse, ScanResponse } from "./types";

export function scan(): Promise<ScanResponse> {
  return apiRequest<ScanResponse>("/api/checkin/scan", { method: "POST" });
}

export function confirm(payload: ConfirmRequest): Promise<ConfirmResponse> {
  return apiRequest<ConfirmResponse>("/api/checkin/confirm", { method: "POST", body: payload });
}
