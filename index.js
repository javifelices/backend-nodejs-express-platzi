const express = require('express');
const app = express();
const port = 7001;

app.get('/', (req, res) => {
  res.send('Hola, mi server en express');
});

app.listen(port, () => {
  console.log(`listening on at http://localhost:${port}`);
});
