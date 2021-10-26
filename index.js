const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 7001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola, mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta (endpoint)');
});

routerApi(app);

// Los middlewares siempre deben ir después del routing
app.use(logErrors);
app.use(errorHandler);
// Es importante el orden en que se coloquen, porque es el orden en el que se ejecutarán. En este caso el logErrors es el único con un next, por lo tanto, si se colocara el errorHandler antes, ahí terminaría el proceso.

app.listen(port, () => {
  // console.info(`listening on at http://localhost:${port}`);
});
