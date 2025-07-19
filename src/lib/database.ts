import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
import * as authSchame from "@/repo/schemas/auth-schema";
import * as schema from "@/repo/schemas/schema";

const pool = new pkg.Pool({
	connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema: { ...schema, ...authSchame } });
export type AppDB = typeof db;
