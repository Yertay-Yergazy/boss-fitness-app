import { apiRequest } from "./client";
import type { Profile } from "./types";

export function getProfile(): Promise<Profile> {
  return apiRequest<Profile>("/api/profile");
}
