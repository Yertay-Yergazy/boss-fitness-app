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
};

export default nextConfig;
