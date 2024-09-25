class BookValidator {
    /**
     * Validate the payload of addBook request
     * @param {Object} payload - The payload of the request
     * @param {string} payload.name - The name of the book
     * @param {number} payload.readPage - The number of pages read of the book
     * @param {number} payload.pageCount - The page count of the book
     * @throws {Error} - If the payload is invalid
     */
    static validateAddBook(payload) {
      const { name, readPage, pageCount } = payload;
  
      if (!name) {
        throw new Error("Gagal menambahkan buku. Mohon isi nama buku");
      }
  
      if (readPage > pageCount) {
        throw new Error(
          "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
        );
      }
    }
    /**
     * Validate the payload of updateBook request
     * @param {Object} payload - The payload of the request
     * @param {string} payload.name - The name of the book
     * @param {number} payload.readPage - The number of pages read of the book
     * @param {number} payload.pageCount - The  count of the book
     * @throws {Error} - If the payload is invapagelid
     */
    static validateUpdateBook(payload) {
      const { name, readPage, pageCount } = payload;
  
      if (!name) {
        throw new Error("Gagal memperbarui buku. Mohon isi nama buku");
      }
  
      if (readPage > pageCount) {
        throw new Error(
          "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
        );
      }
    }
  }
  
  module.exports = BookValidator;
  