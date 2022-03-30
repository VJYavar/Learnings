"use strict";

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

function find(req, reply) {
  booksService.findBook(req.params.name).then((book) => {
    if (!book) {
      return reply.status(400).send({
        message: "Book Not Found",
      });
    } else {
      return reply.status(200).send(book);
    }
  });
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
    .updateBook(attributes)
    .then((updatedBook) => reply.status(200).send(updatedBook))
    .catch((error) => reply.status(400).send(error));
}

function destroy(req, reply) {
  booksService
    .deleteBook(req.params.name)
    .then((text) => {
      reply.status(200).send({ message: `${text}` });
    })
    .catch((error) => reply.status(400).send(error));
}

module.exports = {
  create,
  list,
  update,
  destroy,
  find,
};
