import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";

const root: FastifyPluginAsyncZod = async function (fastify, _opts) {
	fastify.route({
		method: "GET",
		url: "/",
		schema: {
			querystring: z.object({
				name: z.string().min(4),
			}),
			response: {
				200: z.string(),
			},
		},
		handler: (req, res) => {
			res.send(req.query.name);
		},
	});
	fastify.route({
		method: "GET",
		url: "/healthcheck",
		schema: {
			response: {
				200: z.object({
					health: z.string(),
				}),
			},
		},
		handler: (req, res) => {
			res.send({ health: "Good!!!" });
		},
	});
};

export default root;
