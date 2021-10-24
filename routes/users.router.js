const express = require('express');

const UsersService = require('./../services/user.service');

const router = express.Router();
const service = new UsersService();

router.get('/', (req, res) => {
  let { limit } = req.query;
  limit = limit || 100;
  const users = service.find(limit);
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
  const user = service.findOne(id);
  res.json(user);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'user created',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'user update',
    data: body,
    id
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'user deleted',
    id
  });
});

module.exports = router;
