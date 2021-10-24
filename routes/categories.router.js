const express = require('express');

const CategoriesService = require('./../services/category.service');

const router = express.Router();
const service = new CategoriesService();

router.get('/', (req, res) => {
  let { limit } = req.query;
  limit = limit || 100;
  const categories = service.find(limit);
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const category = service.findOne(id);
  res.json(category);
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
