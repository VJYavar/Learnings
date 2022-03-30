"use strict";

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

function updateBook(attributes) {
  return findBook(attributes.name).then((book) => {
    if (!book) {
      throw new Error("Book Not Found");
    }

    return book
      .update({
        name: attributes.name || book.name,
        category: attributes.category || book.category,
        author: attributes.author || book.author,
        price: attributes.price || book.price,
        notes: attributes.notes || book.notes,
        updatedAt: new Date(),
      })
      .then((updateBook) => {
        return updateBook;
      })
      .catch((error) => {
        throw new Error(error);
      });
  });
}

function deleteBook(name) {
  return findBook(name).then((book) => {
    if (!book) {
      throw new Error("Book Not Found");
    }
    return book
      .destroy()
      .then(() => {
        return "Book deleted successfully";
      })
      .catch((error) => {
        throw new Error(error);
      });
  });
}

module.exports = {
  createBook,

  listBooks,

  findBook,

  updateBook,

  deleteBook,
};
