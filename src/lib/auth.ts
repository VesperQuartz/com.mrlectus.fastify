import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { bearer, haveIBeenPwned, openAPI } from "better-auth/plugins";
import { db } from "./database";

export const auth = betterAuth({
	trustedOrigins: ["http://localhost:3000"],
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
	emailAndPassword: { enabled: true },
	plugins: [bearer(), openAPI(), haveIBeenPwned()],
});

export type AuthType = typeof auth;
