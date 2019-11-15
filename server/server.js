const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
const api = require('./routes/api');

app.get('/', (req, res) => {
  res.send('hello from server');
});
app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
