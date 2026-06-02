import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist/**", ".astro/**", "node_modules/**"]),
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
    },
  },
]);
