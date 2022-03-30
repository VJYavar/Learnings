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

function userLogin(email, password) {
  return findUser(email).then((user) => {
    if (!user) {
      throw new Error("User Not Found");
    } else {
      if (bcrypt.compareSync(password, user.encrypted_password)) {
        const accessToken = generateAccessToken(email);

        return user
          .update({
            access_token: accessToken,
            updatedAt: new Date(),
          })
          .then((loggedInUser) => {
            return accessToken;
          })
          .catch((error) => {
            throw new Error(error);
          });
      } else {
        throw new Error("Invalid Password");
      }
    }
  });
}

module.exports = {
  listUsers,
  userLogin,
};
