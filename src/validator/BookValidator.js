class BookValidator {
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
  