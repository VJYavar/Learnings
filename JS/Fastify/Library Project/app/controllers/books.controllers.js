"use strict";

const fastify = require("fastify");

const books = require("../models").Books;
const booksService = require("../service/books.service");

function create(req, reply) {
  const { body } = req;
  const attributes = {
    name: body.name,
    category: body.category,
    author: body.author,
    price: body.price,
    notes: body.notes,
  };
  booksService
    .createBook(attributes)
    .then((books) => reply.status(201).send(books))
    .catch((error) => reply.status(400).send(error));
}
function list(req, reply) {
  booksService
    .listBooks()
    .then((books) => reply.status(200).send(books))
    .catch((error) => reply.status(400).send(error));
}
function update(req, reply) {
  const { body } = req;
  const attributes = {
    name: body.name,
    category: body.category,
    author: body.author,
    price: body.price,
    notes: body.notes,
  };
  booksService
    .updateBook(attributes, reply)
    .then()
    .catch((error) => reply.status(400).send(error));
}
function destroy(req, reply) {
  booksService
    .deleteBook(req.params.name, reply)
    .then()
    .catch((error) => reply.status(400).send(error));
}
function listOne(req, reply) {
  booksService.findBook(req.params.name).then((books) => {
    if (!books) {
      return reply.status(400).send({
        message: "Book Not Found",
      });
    } else {
      return reply.status(200).send(books);
    }
  });
}

module.exports = {
  create,
  list,
  update,
  destroy,
  listOne,
};
