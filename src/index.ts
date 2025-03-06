import Fastify from "fastify";

const fastify = Fastify({ logger: true });
const PORT = Number(process.env.PORT) || 3000;

fastify.get("/", function (_, reply) {
  reply.send({ msg: "Hello, World!" });
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
