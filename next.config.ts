import type { NextConfig } from "next";
import { execSync } from "child_process";

let commitHash = "dev";
try {
  commitHash = execSync("git rev-parse --short HEAD").toString().trim();
} catch {
  // not a git repo or git not available (e.g. some CI environments)
}

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_COMMIT_HASH: commitHash,
  },
};

export default nextConfig;
