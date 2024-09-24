const BaseService = require("./BaseService");
const nanoid = require("nanoid");

class BookService extends BaseService {
  /**
   * Adds a new book to the service
   * @param {Object} payload - The book to add
   * @param {string} payload.name - The name of the book
   * @param {number} payload.year - The year of the book
   * @param {string} payload.author - The author of the book
   * @param {string} payload.summary - The summary of the book
   * @param {string} payload.publisher - The publisher of the book
   * @param {number} payload.pageCount - The page count of the book
   * @param {number} payload.readPage - The number of pages read of the book
   * @param {boolean} payload.reading - Whether the book is currently being read
   * @returns {Object} - The book that was added
   */
  addBook({
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  }) {
    const id = nanoid(21);
    const finished = pageCount === readPage;
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

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

    return this.add(newBook);
  }
}

module.exports = new BookService([]);
