class BaseService {
  /**
   * Creates a new BaseService instance
   * @param {Array} data - Array of data to be manipulated
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Returns all data from the service
   * @returns {Array} - The data from the service
   */
  findAll() {
    return this.data;
  }

  /**
   * Finds a single item by id
   * @param {string} id - The id of the item to find
   * @returns {Object} - The item with the given id or null if it doesn't exist
   */
  findById(id) {
    return this.data.find((item) => item.id === id);
  }

  /**
   * Adds a new item to the data
   * @param {Object} item - The item to add
   * @returns {Object} - The item that was added
   */
  add(item) {
    this.data.push(item);
    return item;
  }

  /**
   * Removes a single item by id
   * @param {string} id - The id of the item to remove
   * @returns {boolean} - True if the item was removed, false if it didn't exist
   */
  removeById(id) {
    const index = this.data.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Updates a single item by id
   * @param {string} id - The id of the item to update
   * @param {Object} updatedItem - The updated item
   * @returns {Object} - The updated item or null if it didn't exist
   */
  updateById(id, updatedItem) {
    const index = this.data.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.data[index] = { ...this.data[index], ...updatedItem };
      return this.data[index];
    }
    return null;
  }
}

module.exports = BaseService;
