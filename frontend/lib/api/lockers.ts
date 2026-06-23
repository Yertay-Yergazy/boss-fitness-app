import { apiRequest } from "./client";
import type { Locker } from "./types";

export function listLockers(): Promise<Locker[]> {
  return apiRequest<Locker[]>("/api/lockers");
}
