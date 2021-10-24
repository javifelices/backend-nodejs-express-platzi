const faker = require('faker');

faker.locale = 'es';

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate(limit) {
    for (let index = 0; index < (limit || 100); index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        firstName: faker.name.findName(),
        lastName: faker.name.lastName(),
        userName: faker.internet.userName(),
        avatar: faker.image.avatar()
      });
    }
  }

  create() {}

  find(limit) {
    return this.users.slice(0, limit);
  }

  findOne(id) {
    return this.users.find((item) => item.id === id);
  }

  update() {}

  delete() {}
}

module.exports = UsersService;
