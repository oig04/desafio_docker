const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch(err => {
  console.error('Erro ao conectar ao MongoDB', err);
});

app.get('/api/test', (req, res) => {
  res.send('API funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
