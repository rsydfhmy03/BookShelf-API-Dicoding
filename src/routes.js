const handler = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/",
    handler: handler.getIndex,
  },
  {
    method: "POST",
    path: "/books",
    handler: handler.addBook,
  },
  {
    method: "GET",
    path: "/books",
    handler: handler.showAllBooks,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: handler.getBookById,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: handler.editBookById,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: handler.deleteBookById,
  },
];

module.exports = routes;
