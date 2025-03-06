
"use strict";

import Fastify from "fastify";

import apiRoutes from "./api.js";

const app = Fastify({ logger: true });

app.register(apiRoutes);

export default async function(req: Request, res: Response) {
    await app.ready();
    app.server.emit("request", req, res);
}