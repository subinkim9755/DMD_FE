import type { NextConfig } from "next";
import path from "path";

// 설정 파일이 있는 df 폴더를 항상 프로젝트 루트로 사용 (절대 경로)
const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  webpack: (config) => {
    config.context = projectRoot;
    config.resolve.modules = [
      path.join(projectRoot, "node_modules"),
      "node_modules",
      ...(config.resolve.modules || []),
    ];
    // tailwindcss·postcss가 Fe가 아닌 df/node_modules에서만 해석되도록
    config.resolve.alias = {
      ...config.resolve.alias,
      tailwindcss: path.join(projectRoot, "node_modules", "tailwindcss"),
      "@tailwindcss/postcss": path.join(projectRoot, "node_modules", "@tailwindcss/postcss"),
    };
    return config;
  },
};

export default nextConfig;
