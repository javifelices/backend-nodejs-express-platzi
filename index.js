const express = require('express');
const faker = require('faker');
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
app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 5',
    price: 19
  });
});

app.get('/categories', (req, res) => {
  res.json([
    {
      name: 'Category 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel inventore, nihil repellendus, possimus quas at nostrum minima consequatur officiis est, provident perferendis odit. Consequatur doloremque ut corporis voluptatem libero? Expedita!'
    },
    {
      name: 'Category 2',
      description:
        'Nulla, natus mollitia quo exercitationem unde neque a aliquid ducimus! Suscipit, reprehenderit iste odit, autem accusamus sit nulla doloremque corrupti ducimus quos est neque repudiandae quod praesentium quam eveniet enim!'
    },
    {
      name: 'Category 3',
      description:
        'Expedita dolore reiciendis culpa ducimus ab, sit iste veritatis, nulla eum fugiat voluptatem harum labore quo numquam dicta vero sed debitis. Omnis est nobis tenetur, veniam repudiandae obcaecati quisquam sed?'
    },
    {
      name: 'Category 4',
      description:
        'Consectetur provident cum, similique culpa, quod natus, et praesentium libero assumenda deleniti distinctio fuga dignissimos perferendis in cupiditate? Soluta repellat possimus officia maxime sapiente ullam est quo dolor ipsam natus?'
    },
    {
      name: 'Category 5',
      description:
        'Vero vitae obcaecati, omnis blanditiis laborum molestiae alias voluptatum dolore. Reiciendis impedit maiores nulla. Dolor ut dolorum quas earum excepturi? Minus voluptas nihil, at omnis incidunt vel earum tenetur cupiditate.'
    }
  ]);
});

app.get('/categories/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    name: 'Category 3',
    description:
      'Expedita dolore reiciendis culpa ducimus ab, sit iste veritatis, nulla eum fugiat voluptatem harum labore quo numquam dicta vero sed debitis. Omnis est nobis tenetur, veniam repudiandae obcaecati quisquam sed?'
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parámetros');
  }
});

// ENDPOINTS DE BÚSQUEDA DE PERSONAS
//PARA PERSONAS (todas)
// todas, apellido, nombre, cedula, rol
// app.get('/users', (req, res) => {
//   res.json([
//     {
//       id: '11.111.111',
//       lastname: 'Lombardi González',
//       name: 'Pedro Augusto',
//       rol: ['estudiante'],
//       avatar: 'File'
//     },
//     {
//       id: '11.111.112',
//       lastname: 'Lombardi Egurrola',
//       name: 'Pedro Jesús',
//       rol: ['representante', 'docente', 'administrativo'],
//       photo: 'File'
//     },
//     {
//       id: '11.111.113',
//       lastname: 'González de Lombardi',
//       name: 'Eunice Margarita',
//       rol: ['representante', 'administrativo'],
//       photo: 'File'
//     },
//     {
//       id: '11.111.114',
//       lastname: 'Duarte Arambule',
//       name: 'Alfonsina Rosario',
//       rol: ['administrativo'],
//       photo: 'File'
//     },
//     {
//       id: '11.111.115',
//       lastname: 'Pachuca Duarte',
//       name: 'María Rosa',
//       rol: ['representante'],
//       photo: 'File'
//     },
//     {
//       id: '11.111.116',
//       lastname: 'Reyes de Molina',
//       name: 'Elisa Margarita',
//       rol: ['docente'],
//       photo: 'File'
//     },
//     {
//       id: '11.111.117',
//       lastname: 'García Padrón',
//       name: 'Oswaldo José',
//       rol: ['apoyo'],
//       photo: 'File'
//     },
//     {
//       id: '11.111.118',
//       lastname: 'Buitriado Paz',
//       name: 'Gilberto Alejandro',
//       rol: ['estudiante'],
//       photo: 'File'
//     },
//     {
//       id: '11.111.119',
//       lastname: 'Cancino Ferrer',
//       name: 'Gonzalo José',
//       rol: ['estudiante'],
//       photo: 'File'
//     },
//     {
//       id: '11.111.120',
//       lastname: 'Medina Lombardi',
//       name: 'Augusto Alejandro',
//       rol: ['estudiante'],
//       photo: 'File'
//     },
//     {
//       id: '11.111.121',
//       lastname: 'Medina Lombardi',
//       name: 'Isabel Josefina',
//       rol: ['estudiante'],
//       photo: 'File'
//     },
//     {
//       id: '11.111.122',
//       lastname: 'Perdomo Lombardi',
//       name: 'Mario Ramón',
//       rol: ['representante'],
//       photo: 'File'
//     }
//   ]);
// });

// //PARA PERSONAS (todas por Apellido)
// app.get('/users/:id', (req, res) => {
//   const { id } = req.params;
//   res.json([
//     {
//       id: '11.111.111',
//       lastname: 'Lombardi González',
//       name: 'Pedro Augusto',
//       rol: ['estudiante'],
//       photo: 'File'
//     },
//     {
//       id: '11.111.112',
//       lastname: 'Lombardi Egurrola',
//       name: 'Pedro Jesús',
//       rol: ['representante', 'docente', 'administrativo'],
//       photo: 'File'
//     },
//     {
//       id: '11.111.113',
//       lastname: 'González de Lombardi',
//       name: 'Eunice Margarita',
//       rol: ['representante', 'administrativo'],
//       photo: 'File'
//     },
//     {
//       id: '11.111.120',
//       lastname: 'Medina Lombardi',
//       name: 'Augusto Alejandro',
//       rol: ['estudiante'],
//       photo: 'File'
//     },
//     {
//       id: '11.111.121',
//       lastname: 'Medina Lombardi',
//       name: 'Isabel Josefina',
//       rol: ['estudiante'],
//       photo: 'File'
//     },
//     {
//       id: '11.111.122',
//       lastname: 'Perdomo Lombardi',
//       name: 'Mario Ramón',
//       rol: ['representante'],
//       photo: 'File'
//     }
//   ]);
// });

app.listen(port, () => {
  console.log(`listening on at http://localhost:${port}`);
});
