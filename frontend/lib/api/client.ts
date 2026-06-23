/**
 * Единая точка входа для HTTP-запросов к мок-бекенду.
 * Сервер (Server Components) и браузер (Client Components) видят бекенд по разным адресам —
 * см. specs/05-nextjs-primer.md, раздел 5.
 */
function baseUrl(): string {
  const isServer = typeof window === "undefined";
  const url = isServer ? process.env.INTERNAL_API_URL : process.env.NEXT_PUBLIC_API_URL;
  if (!url) {
    throw new Error(
      isServer ? "INTERNAL_API_URL is not set" : "NEXT_PUBLIC_API_URL is not set",
    );
  }
  return url;
}

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

interface RequestOptions {
  method?: "GET" | "POST";
  body?: unknown;
  /** Прокидывается в fetch() как есть — на сервере управляет кэшированием Next.js. */
  cache?: RequestCache;
}

export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const res = await fetch(`${baseUrl()}${path}`, {
    method: options.method ?? "GET",
    headers: options.body ? { "Content-Type": "application/json" } : undefined,
    body: options.body ? JSON.stringify(options.body) : undefined,
    cache: options.cache ?? "no-store",
  });

  if (!res.ok) {
    throw new ApiError(res.status, `${options.method ?? "GET"} ${path} failed with ${res.status}`);
  }

  return res.json() as Promise<T>;
}
