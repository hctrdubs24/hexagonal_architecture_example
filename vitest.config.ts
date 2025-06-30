import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude], // Excluye node_modules, .dist, etc.
  },
});
