const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});


app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, data } = req.body;
  res.render('dados', { nome, endereco, telefone, data });
});

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
