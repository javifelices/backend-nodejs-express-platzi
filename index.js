const express = require('express');
const app = express();
const port = 7001;

app.get('/', (req, res) => {
  res.send('Hola, mi server en express');
});

app.get('/home', (req, res) => {
  res.send('Soy la Página de Inicio');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta (endpoint)');
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000
  });
});

app.get('/category', (req, res) => {
  res.json({
    name: 'Category 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel inventore, nihil repellendus, possimus quas at nostrum minima consequatur officiis est, provident perferendis odit. Consequatur doloremque ut corporis voluptatem libero? Expedita!'
  });
});

app.listen(port, () => {
  console.log(`listening on at http://localhost:${port}`);
});
