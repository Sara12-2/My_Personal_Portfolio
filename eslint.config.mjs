// eslint.config.mjs - Fixed Version
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    "dist/**",
  ]),
  {
    rules: {
      // Disable all rules for now
    },
  },
]);

export default eslintConfig;