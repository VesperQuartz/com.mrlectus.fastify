import fp from "fastify-plugin";
import { AuthType, auth } from "@/lib/auth";

export default fp(
	async (fastify) => {
		fastify.decorate("auth", auth);
	},
	{
		dependencies: ["env"],
	},
);

declare module "fastify" {
	export interface FastifyInstance {
		auth: AuthType;
	}
}
