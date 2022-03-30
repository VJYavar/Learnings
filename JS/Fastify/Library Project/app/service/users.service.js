"use strict";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const users = require("../models").Users;

function generateAccessToken(username) {
  return jwt.sign({ username }, `${process.env.TOKEN_SECRET}`, {
    expiresIn: 18000,
  });
}

function listUsers() {
  return users.findAll();
}

function findUser(userEmail) {
  return users.findOne({
    where: {
      email: userEmail,
    },
  });
}

function userLogin(email, password, reply) {
  return findUser(email).then((users) => {
    if (!users) {
      return reply.status(400).send({
        message: "User Not Found",
      });
    } else {
      if (bcrypt.compareSync(password, users.encrypted_password)) {
        const accessToken = generateAccessToken(email);

        return users
          .update({
            access_token: accessToken,
            updatedAt: new Date(),
          })
          .then((users) => {
            reply.header("Authorization", `Bearer ${accessToken}`);

            return reply.status(201).send({
              message: "User Logged in Successfully",
            });
          })
          .catch((error) => reply.status(400).send(error));
      } else {
        return reply.status(402).send({
          message: "Invalid Password",
        });
      }
    }
  });
}

module.exports = {
  listUsers,
  userLogin,
};
