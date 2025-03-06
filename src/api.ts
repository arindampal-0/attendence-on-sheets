import type { FastifyPluginAsync } from "fastify";

const apiRoutes: FastifyPluginAsync = async function (fastify) {
  fastify.get("/", async function (_, reply) {
    reply.send({ msg: "Hello, World!" });
  });
  fastify.get("/health", async function (_, reply) {
    reply.send({ health: "ok" });
  });
};

export default apiRoutes;
