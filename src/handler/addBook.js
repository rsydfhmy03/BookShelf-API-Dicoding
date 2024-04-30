const books = require("../books");
const nanoid = require("nanoid");

/**
 * Adds a new book to the books array.
 *
 * @param {Object} request - The request object containing the payload with book information.
 * @param {Object} h - The response toolkit object.
 * @return {Object} The response object indicating the success or failure of adding the book.
 */
const postBook = (request, h) => {
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

  // Check if name is provided
  if (!name) {
    return h
      .response({
        status: "fail",
        message: "Gagal menambahkan buku. Mohon isi nama buku",
      })
      .code(400);
  }

  // Check if readPage is valid
  if (readPage > pageCount) {
    return h
      .response({
        status: "fail",
        message:
          "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
      })
      .code(400);
  }

  const id = nanoid(21);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  // Create new book object
  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);

  // Check if book was added successfully
  if (books.find((book) => book.id === id)) {
    return h
      .response({
        status: "success",
        message: "Buku berhasil ditambahkan",
        data: { bookId: id },
      })
      .code(201);
  }

  return h
    .response({
      status: "error",
      message: "Terjadi kesalahan saat menambahkan buku",
    })
    .code(500);
};

module.exports = postBook;
