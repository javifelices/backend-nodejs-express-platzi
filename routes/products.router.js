const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { limit } = req.query;
  for (let index = 0; index < (limit || 10); index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
  }
  res.json(products);
});

// Endpoint de forma específica debe de ir antes que endp
router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({
      message: 'product not found'
    });
  } else {
    res.status(200).json({
      id,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10)
    });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'product created',
    data: body
  });
});

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   res.json({
//     message: 'update',
//     data: body,
//     id
//   });
// });

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'product update',
    data: body,
    id
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'product deleted',
    id
  });
});

module.exports = router;
