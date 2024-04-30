const books = require("../books");

/**
 * Returns a response object containing a list of books based on the provided query parameters.
 *
 * @param {Object} request - The request object containing the query parameters.
 * @param {Object} h - The response toolkit object.
 * @return {Object} A response object containing a list of books.
 */
const showAllBooks = (request, h) => {
  const { name, reading, finished } = request.query;

  // Filter books based on query parameters
  let filteredBooks = books;

  if (name !== undefined) {
    filteredBooks = filteredBooks.filter((b) =>
      b.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (reading !== undefined) {
    filteredBooks = filteredBooks.filter(
      (b) => b.reading === Boolean(Number(reading))
    );
  }

  if (finished !== undefined) {
    filteredBooks = filteredBooks.filter(
      (b) => b.finished === Boolean(Number(finished))
    );
  }

  // Format the response data
  const booksData = filteredBooks.map(({ id, name, publisher }) => ({
    id,
    name,
    publisher,
  }));

  // Create and return the response object
  return h
    .response({
      status: "success",
      data: { books: booksData },
    })
    .code(200);
};

module.exports = showAllBooks;
