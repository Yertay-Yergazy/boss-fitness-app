# syntax=docker/dockerfile:1
# Объединённый образ: фронтенд (Next.js standalone) и бекенд (FastAPI) в одном контейнере.
# Снаружи виден только порт фронтенда — бекенд слушает 127.0.0.1:8000 внутри контейнера
# и проксируется через rewrites в next.config.ts. Это убирает необходимость в отдельном
# Render-сервисе (и связанном с ним CORS/спин-дауном/публичным URL бекенда).

FROM node:20-alpine AS frontend-base
WORKDIR /app
RUN npm install -g pnpm@10

FROM frontend-base AS frontend-deps
COPY frontend/package.json frontend/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM frontend-base AS frontend-builder
COPY --from=frontend-deps /app/node_modules ./node_modules
COPY frontend/ .
ARG NEXT_PUBLIC_API_URL=""
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
RUN pnpm build

FROM node:20-bookworm-slim AS runner
WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 python3-pip \
  && rm -rf /var/lib/apt/lists/*

COPY --from=frontend-builder /app/public ./public
COPY --from=frontend-builder /app/.next/standalone ./
COPY --from=frontend-builder /app/.next/static ./.next/static

WORKDIR /backend
COPY backend/requirements.txt .
RUN pip install --no-cache-dir --break-system-packages -r requirements.txt
COPY backend/app ./app

WORKDIR /app
COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

ENV NODE_ENV=production
ENV INTERNAL_API_URL=http://127.0.0.1:8000
ENV NEXT_PUBLIC_API_URL=""

EXPOSE 3000
CMD ["./entrypoint.sh"]
