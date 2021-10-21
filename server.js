// vamos começar, carregando o express e criando a app
const express = require("express");
const app = express();
const path = require("path");

// pasta public onde estão passados os arquivos estaticos
app.use(express.static('public'));

// então, criamos uma rota para '/'
app.get("/", (req, res) => {
  // aqui precisamos enviar o index.html para o cliente
  res.sendFile(path.join(__dirname + "/main.html"));
});

// no fim, iniciamos o serviço na porta 8001
let porta = 8080;
app.listen(porta);
console.log("server rodando na porta " + porta);
