const express = require('express');

const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  let { limit } = req.query;
  limit = limit || 100;
  const products = service.find(limit);
  res.json(products);
});

// Endpoint de forma específica debe de ir antes que endp
router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
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
