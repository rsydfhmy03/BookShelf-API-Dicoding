const books = require("../books");

/**
 * Deletes a book from the books array by its ID.
 *
 * @param {Object} request - The request object containing the bookId parameter.
 * @param {Object} h - The response toolkit object.
 * @return {Object} A response object indicating the success or failure of deleting the book.
 */
const deleteBookById = (request, h) => {
  const { bookId } = request.params;

  // Find the index of the book to be deleted
  const index = books.findIndex((book) => book.id === bookId);

  // Check if the book exists
  if (index === -1) {
    return h
      .response({
        status: "fail",
        message: "Buku gagal dihapus. Id tidak ditemukan",
      })
      .code(404);
  }

  // Delete the book
  books.splice(index, 1);

  // Return success response
  return h
    .response({
      status: "success",
      message: "Buku berhasil dihapus",
    })
    .code(200);
};

module.exports = deleteBookById;
