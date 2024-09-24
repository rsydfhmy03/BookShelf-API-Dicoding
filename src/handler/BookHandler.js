const BookService = require("../services/BookService");
const BookValidator = require("../validator/BookValidator");
const ResponseFormatter = require("../responseFormatter");

const getIndex = (request, h) =>
  ResponseFormatter.success(h, "Welcome to Bookshelf API by Mitahudev03");

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

const getBookById = (request, h) => {
  const { bookId } = request.params;
  const book = BookService.findById(bookId);

  if (book) {
    return ResponseFormatter.success(h, "", { book });
  }
  return ResponseFormatter.fail(h, "Buku tidak ditemukan", 404);
};

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
