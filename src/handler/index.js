const BookHandler = require("./BookHandler");

module.exports = {
  getIndex: BookHandler.getIndex,
  addBook: BookHandler.addBook,
  showAllBooks: BookHandler.showAllBooks,
  getBookById: BookHandler.getBookById,
  editBookById: BookHandler.editBookById,
  deleteBookById: BookHandler.deleteBookById,
};
