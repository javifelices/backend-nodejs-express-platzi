const express = require('express');

const UsersService = require('./../services/user.service');

const router = express.Router();
const service = new UsersService();

router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
});

// router.geasync t('/', (req, res) => {
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

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await service.findOne(id);
  res.json(user);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newUser = await service.create(body);
  res.json(newUser);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const user = await service.update(id, body);
    res.json(user);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
