"use strict";

const fastify = require("fastify");

const books = require("../models").Books;

function createBook(attributes) {
  return books.create({
    name: attributes.name,
    category: attributes.category,
    author: attributes.author,
    price: attributes.price,
    notes: attributes.notes,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

function listBooks() {
  return books.findAll();
}

function findBook(name) {
  return books.findOne({
    where: {
      name: name,
    },
  });
}

function updateBook(attributes, reply) {
  return findBook(attributes.name).then((books) => {
    if (!books) {
      return reply.status(404).send({
        message: "Book Not Found",
      });
    }

    return books
      .update({
        name: attributes.name || books.name,
        category: attributes.category || books.category,
        author: attributes.author || books.author,
        price: attributes.price || books.price,
        notes: attributes.notes || books.notes,
        updatedAt: new Date(),
      })
      .then((updatedBook) => reply.status(200).send(updatedBook))
      .catch((error) => reply.status(400).send(error));
  });
}

function deleteBook(name, reply) {
  return findBook(name).then((books) => {
    if (!books) {
      return reply.status(400).send({
        message: "Book Not Found",
      });
    }
    return books
      .destroy()
      .then(() =>
        reply.status(200).send({ message: "Book deleted successfully." })
      )
      .catch((error) => reply.status(400).send(error));
  });
}

module.exports = {
  createBook,

  listBooks,

  findBook,

  updateBook,

  deleteBook,
};
