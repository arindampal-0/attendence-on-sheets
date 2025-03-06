"use strict";

// import * as dotenv from "dotenv";
// dotenv.config();

import Fastify from "fastify";

import apiRoutes from "../dist/api";

const app = Fastify({ logger: true });

app.register(apiRoutes);

export default async function(req, res) {
    await app.ready();
    app.server.emit("request", req, res);
}