const BookService = require("../services/BookService");
const BookValidator = require("../validator/BookValidator");
const ResponseFormatter = require("../responseFormatter");

/**
 * Handle get request to root path
 * @param {Object} request - Request object from Hapi
 * @param {Object} h - Hapi response toolkit
 * @returns {Object} Response object from Hapi
 */
const getIndex = (request, h) => {
  const apiInfo = {
    name: "Bookshelf API",
    version: "1.0.0",
    author: "Mitahudev03 (Fahmy Rosyadi )",
    status: "Active Student",
    school: "Politeknik Negeri Jember",
  };

  return ResponseFormatter.success(
    h,
    "Welcome to Bookshelf API by Mitahudev03",
    { data: apiInfo }
  );
};

/**
 * Handle post request to add a new book
 * @param {Object} request - Request object from Hapi
 * @param {Object} h - Hapi response toolkit
 * @returns {Object} Response object from Hapi
 */
const addBook = (request, h) => {
  try {
    BookValidator.validateAddBook(request.payload);
    const newBook = BookService.addBook(request.payload);
    return ResponseFormatter.success(
      h,
      "Buku berhasil ditambahkan",
      { bookId: newBook.id },
      201
    );
  } catch (error) {
    return ResponseFormatter.fail(h, error.message, 400);
  }
};

/**
 * Handle get request to show all books
 * @param {Object} request - Request object from Hapi
 * @param {Object} h - Hapi response toolkit
 * @returns {Object} Response object from Hapi
 *
 * Query parameters:
 * - name (string): Filter books by name
 * - reading (boolean): Filter books by reading status
 * - finished (boolean): Filter books by finished status
 */
const showAllBooks = (request, h) => {
  const { name, reading, finished } = request.query;
  let books = BookService.findAll();

  // Apply filtering logic based on query parameters
  if (name !== undefined) {
    books = books.filter((b) =>
      b.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  if (reading !== undefined) {
    books = books.filter((b) => b.reading === Boolean(Number(reading)));
  }
  if (finished !== undefined) {
    books = books.filter((b) => b.finished === Boolean(Number(finished)));
  }

  const booksData = books.map(({ id, name, publisher }) => ({
    id,
    name,
    publisher,
  }));
  return ResponseFormatter.success(h, "", { books: booksData });
};

/**
 * Handle get request to show a single book by id
 * @param {Object} request - Request object from Hapi
 * @param {Object} h - Hapi response toolkit
 * @returns {Object} Response object from Hapi
 *
 * Path parameter:
 * - bookId (string): The id of the book
 */
const getBookById = (request, h) => {
  const { bookId } = request.params;
  const book = BookService.findById(bookId);

  if (book) {
    return ResponseFormatter.success(h, "", { book });
  }
  return ResponseFormatter.fail(h, "Buku tidak ditemukan", 404);
};

/**
 * Handle put request to edit a single book by id
 * @param {Object} request - Request object from Hapi
 * @param {Object} h - Hapi response toolkit
 * @returns {Object} Response object from Hapi
 *
 * Path parameter:
 * - bookId (string): The id of the book
 *
 * Request body:
 * - name (string): The name of the book
 * - year (number): The year of the book
 * - author (string): The author of the book
 * - summary (string): The summary of the book
 * - publisher (string): The publisher of the book
 * - pageCount (number): The page count of the book
 * - readPage (number): The number of pages read of the book
 * - reading (boolean): Whether the book is currently being read
 * - finished (boolean): Whether the book is finished
 */
const editBookById = (request, h) => {
  const { bookId } = request.params;

  try {
    BookValidator.validateUpdateBook(request.payload);
    const updatedBook = BookService.updateById(bookId, {
      ...request.payload,
      updatedAt: new Date().toISOString(),
    });

    if (updatedBook) {
      return ResponseFormatter.success(h, "Buku berhasil diperbarui");
    }
    return ResponseFormatter.fail(
      h,
      "Gagal memperbarui buku. Id tidak ditemukan",
      404
    );
  } catch (error) {
    return ResponseFormatter.fail(h, error.message, 400);
  }
};

/**
 * Handle delete request to delete a single book by id
 * @param {Object} request - Request object from Hapi
 * @param {Object} h - Hapi response toolkit
 * @returns {Object} Response object from Hapi
 *
 * Path parameter:
 * - bookId (string): The id of the book
 */
const deleteBookById = (request, h) => {
  const { bookId } = request.params;
  const isDeleted = BookService.removeById(bookId);

  if (isDeleted) {
    return ResponseFormatter.success(h, "Buku berhasil dihapus");
  }
  return ResponseFormatter.fail(
    h,
    "Buku gagal dihapus. Id tidak ditemukan",
    404
  );
};

module.exports = {
  getIndex,
  addBook,
  showAllBooks,
  getBookById,
  editBookById,
  deleteBookById,
};
