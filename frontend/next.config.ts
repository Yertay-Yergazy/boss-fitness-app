import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Глушит предупреждение Turbopack: на машине есть посторонний package-lock.json
  // выше по дереву каталогов (в домашней папке пользователя), из-за которого
  // Turbopack пытался определить корень workspace неправильно.
  turbopack: {
    root: path.join(__dirname),
  },
  // В объединённом контейнере (см. корневой Dockerfile) бекенд слушает только
  // 127.0.0.1:8000 — браузер не может достучаться до него напрямую, поэтому
  // браузерные запросы идут на тот же origin и проксируются сюда.
  async rewrites() {
    return [
      { source: "/api/:path*", destination: "http://127.0.0.1:8000/api/:path*" },
    ];
  },
};

export default nextConfig;
