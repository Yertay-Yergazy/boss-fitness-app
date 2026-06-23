import { apiRequest } from "./client";
import type { SessionsResponse } from "./types";

interface GetSessionsParams {
  upcoming?: boolean;
  limit?: number;
}

export function getSessions(params: GetSessionsParams = {}): Promise<SessionsResponse> {
  const search = new URLSearchParams();
  if (params.upcoming) search.set("upcoming", "true");
  if (params.limit !== undefined) search.set("limit", String(params.limit));
  const query = search.toString();
  return apiRequest<SessionsResponse>(`/api/sessions${query ? `?${query}` : ""}`);
}
