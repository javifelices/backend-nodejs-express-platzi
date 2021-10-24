const faker = require('faker');

faker.locale = 'es';

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate(limit) {
    for (let index = 0; index < (limit || 100); index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        category: faker.commerce.productAdjective(),
        description: faker.hacker.phrase()
      });
    }
  }

  create() {}

  find(limit) {
    return this.categories.slice(0, limit);
  }

  findOne(id) {
    return this.categories.find((item) => item.id === id);
  }

  update() {}

  delete() {}
}

module.exports = CategoriesService;
