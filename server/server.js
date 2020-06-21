const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '../build')));

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: './build' })
});

require("./routes/customer.routes.js")(app);
require("./routes/address.routes.js")(app);

app.listen(process.env.PORT || 8080);
