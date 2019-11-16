const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const api = require('./routes/api');

app.get('/', (req, res) => {
  res.send('hello from server');
});
app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
