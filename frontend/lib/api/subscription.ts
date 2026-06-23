import { apiRequest } from "./client";
import type { Subscription } from "./types";

export function getSubscription(): Promise<Subscription> {
  return apiRequest<Subscription>("/api/subscription");
}
