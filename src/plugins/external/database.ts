import fp from "fastify-plugin";
import { AppDB, db } from "@/lib/database.js";

export default fp(
	async (fastify) => {
		fastify.decorate("db", db);
	},
	{
		dependencies: ["env"],
	},
);

declare module "fastify" {
	export interface FastifyInstance {
		db: AppDB;
	}
}
