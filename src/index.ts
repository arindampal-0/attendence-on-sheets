import path from "node:path";

import Fastify from "fastify";
import fastifyStatic from "@fastify/static";

import apiRoutes from "./api.js";

const fastify = Fastify({ logger: true });
const PORT = Number(process.env.PORT) || 3000;

fastify.register(fastifyStatic, {
    root: path.join(process.cwd(), "public"),
    prefix: "/",
});

fastify.register(apiRoutes, {
    prefix: "/api"
});

async function main() {
    fastify.listen({ port: PORT, host: "0.0.0.0"}, function(err, address) {
        if (err) {
            fastify.log.error(err);
            process.exit(1);
        }

        console.log(`Server started at ${address}`);
    });
}

main().catch((err) => console.error(err));
