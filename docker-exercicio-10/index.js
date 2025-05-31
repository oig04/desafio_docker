const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('A aplicação está rodando com usuário não-root.');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
