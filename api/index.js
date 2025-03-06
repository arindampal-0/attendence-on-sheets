"use strict";

import Fastify from "fastify";

import apiRoutes from "../dist/api.js";

const app = Fastify({ logger: true });

app.register(apiRoutes);

export default async function(req, res) {
    await app.ready();
    app.server.emit("request", req, res);
}