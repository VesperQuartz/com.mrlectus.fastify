import fp from "fastify-plugin";
import fastifyRedis from "@fastify/redis";

export default fp(async (fastify) => {
  await fastify.register(fastifyRedis, {
    host: '127.0.0.1',
    port: 6379,
    password: fastify.config.REDIS_PASSWORD,
    family: 4
  });
}, {
    dependencies: ["env"],
  },
);
