const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

//When Heroku runs the application, it injects environment variables at runtime
const PORT = process.env.PORT || 4000;
app.listen(PORT);
