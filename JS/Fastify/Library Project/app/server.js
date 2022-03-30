"use strict";

const fastify = require("fastify")({ logger: true });

const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/../.env` });

fastify.register(require("./routes/books.routes"));
fastify.register(require("./routes/user-auth.routes"));

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await fastify.listen(port);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
