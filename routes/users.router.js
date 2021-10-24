const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { limit } = req.query;
  for (let index = 0; index < (limit || 10); index++) {
    users.push({
      firstName: faker.name.findName(),
      lastName: faker.name.lastName(),
      userName: faker.internet.userName(),
      avatar: faker.image.avatar()
    });
  }
  res.json(users);
});

// router.get('/', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset
//     });
//   } else {
//     res.send('No hay parámetros');
//   }
// });

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    firstName: faker.name.findName(),
    lastName: faker.name.lastName(),
    userName: faker.internet.userName()
  });
});

module.exports = router;
