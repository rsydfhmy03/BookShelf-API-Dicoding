class BaseService {
  constructor(data) {
    this.data = data;
  }

  findAll() {
    return this.data;
  }

  findById(id) {
    return this.data.find((item) => item.id === id);
  }

  add(item) {
    this.data.push(item);
    return item;
  }

  removeById(id) {
    const index = this.data.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
      return true;
    }
    return false;
  }

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
