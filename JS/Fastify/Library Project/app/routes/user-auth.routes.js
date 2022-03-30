"use strict";

const userControllers = require("../controllers/index.controllers").users;

function loginRoutes(fastify, options, done) {
  //log in to an user account
  fastify.post("/login", userControllers.login);

  done();
}

module.exports = loginRoutes;
