const books = require("../books");

/**
 * Returns a response object containing a list of books based on the provided query parameters.
 *
 * @param {Object} request - the request object containing the query parameters.
 * @param {Object} h - the response toolkit object.
 * @return {Object} a response object containing a list of books.
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
  const formattedBooks = filteredBooks.map((b) => ({
    id: b.id,
    name: b.name,
    publisher: b.publisher,
  }));

  // Create response object
  const response = h.response({
    status: "success",
    data: {
      books: formattedBooks,
    },
  });

  response.code(200);
  return response;
};

module.exports = showAllBooks;
