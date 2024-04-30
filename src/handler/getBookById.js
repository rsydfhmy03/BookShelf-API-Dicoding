const books = require("../books");

/**
 * Returns a response object containing a book based on the provided bookId.
 *
 * @param {Object} request - The request object containing the bookId parameter.
 * @param {Object} h - The response toolkit object.
 * @return {Object} A response object containing a book.
 */
const getBookById = (request, h) => {
  const { bookId } = request.params;
  const book = books.find((b) => b.id === bookId);

  if (book) {
    return h
      .response({
        status: "success",
        data: { book },
      })
      .code(200);
  }

  return h
    .response({
      status: "fail",
      message: "Buku tidak ditemukan",
    })
    .code(404);
};

module.exports = getBookById;
