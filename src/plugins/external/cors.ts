import cors from "@fastify/cors";
import fp from "fastify-plugin";

export default fp(async (fastify) => {
	await fastify.register(cors, {
		maxAge: 86400,
		credentials: true,
		allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
		origin: [
			/http(s)?:\/\/localhost:([0-9]+)?/,
			/http(s)?:\/\/127.0.0.1:([0-9]+)?/,
			"https://mrlectus.local",
			process.env.CLIENT_ORIGIN!,
		],
		exposedHeaders: ["Authorization", "Set-Cookie"],
	});
});
