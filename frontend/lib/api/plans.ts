import { apiRequest } from "./client";
import type { Plan } from "./types";

export function listPlans(): Promise<Plan[]> {
  return apiRequest<Plan[]>("/api/plans");
}
