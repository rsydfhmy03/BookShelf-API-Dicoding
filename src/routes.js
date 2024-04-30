// const { getIndex } = require("./handler");
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
];

module.exports = routes;
