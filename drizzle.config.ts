import { defineConfig } from "drizzle-kit";
import path from "path";

export default defineConfig({
  schema: "./db/schema.ts", // Path schema file
  out: "./db/migrations", // Directory where migrations will be stored
  dialect: "sqlite", // 'mysql' | 'postgres' | 'sqlite'
  dbCredentials: {
    url: "./db/database.sqlite", // Path to SQLite database if using SQLite locally
  },
  verbose: true,
  strict: true,
});
