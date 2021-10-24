const faker = require('faker');

faker.locale = 'es';

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate(limit) {
    for (let index = 0; index < (limit || 100); index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      });
    }
  }

  create() {}

  find(limit) {
    return this.products.slice(0, limit);
  }

  findOne(id) {
    return this.products.find((item) => item.id === id);
  }

  update() {}

  delete() {}
}

module.exports = ProductsService;
