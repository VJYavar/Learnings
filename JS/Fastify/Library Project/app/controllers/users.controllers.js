"use strict";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const users = require("../models").Users;

const usersService = require("../service/users.service");

function list(req, reply) {
  usersService
    .listUsers()
    .then((users) => reply.status(201).send(users))
    .catch((error) => reply.status(400).send(error));
}

function login(req, reply) {
  usersService
    .userLogin(req.body.email, req.body.password)
    .then((accessToken) => {
      reply.header("Authorization", `Bearer ${accessToken}`);

      return reply.status(201).send({
        message: "User Logged in Successfully",
      });
    })
    .catch((error) => reply.status(400).send(error));
}

module.exports = {
  list,
  login,
};
