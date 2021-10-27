const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 7001;

app.use(express.json());

const whitelist = ['http://localhost:5500', 'http://127.0.0.1:5500'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
};
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola, mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta (endpoint)');
});

routerApi(app);

// Los middlewares siempre deben ir después del routing
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
// Es importante el orden en que se coloquen, porque es el orden en el que se ejecutarán. En este caso el logErrors es el único con un next, por lo tanto, si se colocara el errorHandler antes, ahí terminaría el proceso.

app.listen(port, () => {
  console.info(`listening on at http://localhost:${port}`);
});
