"use strict";

const { verify } = require("jsonwebtoken");

const User = require("../models").Users;

const JWT_SECRET_KEY = process.env.TOKEN_SECRET;

function getHeaderToken(headers) {
  const bearerHeader = headers.authorization;
  const bearer = bearerHeader ? bearerHeader.split(" ") : [];
  const bearerToken = bearer[1];
  return bearerToken;
}

function verifyToken(token, secretKey) {
  return new Promise((resolve, reject) =>
    verify(token, secretKey, (err, decoded) => {
      console.log("err", err);
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    })
  );
}

const userAuthenticate = (fastify) => {
  fastify.decorateRequest("currentUser", null);
  fastify.addHook("preHandler", async (request, reply) => {
    const token = getHeaderToken(request.headers);

    if (!token) {
      const error = {
        errors: ["You need to sign-in to access this page"],
      };
      reply.code(401).send(error);
    } else {
      try {
        const userAttrs = await verifyToken(token, JWT_SECRET_KEY);

        const user = await User.findOne({
          where: { email: userAttrs.username },
        });
        if (user && user.access_token === token) {
          request.currentUser = user;
          reply.header("Authorization", `Bearer ${token}`);
        } else {
          reply.code(401).send({ errors: ["Invalid Sign in"] });
        }
      } catch (error) {
        reply.code(401).send({ errors: ["Session has expired"] });
      }
    }
  });
};

module.exports = userAuthenticate;
