const express = require('express');
const faker = require('faker');

const router = express.Router();

faker.locale = 'es';

router.get('/', (req, res) => {
  const categories = [];
  const { limit } = req.query;
  for (let index = 0; index < (limit || 10); index++) {
    categories.push({
      category: faker.commerce.productAdjective(),
      description: faker.hacker.phrase()
    });
  }
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    category: faker.commerce.productAdjective(),
    description: faker.hacker.phrase()
  });
});

// router.get('/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId
//   });
// });

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'category created',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'category update',
    data: body,
    id
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'category deleted',
    id
  });
});

module.exports = router;
