const books = require("../books");

/**
 * Edits a book in the books array by its ID.
 *
 * @param {Object} request - The request object containing the bookId parameter and payload.
 * @param {Object} h - The response toolkit object.
 * @return {Object} A response object indicating the success or failure of editing the book.
 */
const editBookById = (request, h) => {
  const { bookId } = request.params;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  // Find the index of the book to be updated
  const index = books.findIndex((book) => book.id === bookId);

  // Check if the book exists
  if (index === -1) {
    return h
      .response({
        status: "fail",
        message: "Gagal memperbarui buku. Id tidak ditemukan",
      })
      .code(404);
  }

  // Validate input data
  if (name === undefined) {
    return h
      .response({
        status: "fail",
        message: "Gagal memperbarui buku. Mohon isi nama buku",
      })
      .code(400);
  }

  if (readPage > pageCount) {
    return h
      .response({
        status: "fail",
        message:
          "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
      })
      .code(400);
  }

  // Update the book data
  const updatedAt = new Date().toISOString();
  books[index] = {
    ...books[index],
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    updatedAt,
  };

  // Return success response
  return h
    .response({
      status: "success",
      message: "Buku berhasil diperbarui",
    })
    .code(200);
};

module.exports = editBookById;
