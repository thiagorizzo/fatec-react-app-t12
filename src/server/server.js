var expressClass = require("express");
var produtos = require("./produtos");
var categorias = require("./categorias");
var bodyParser = require("body-parser");

var express = new expressClass();

express.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

express.use(bodyParser.json());
express.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

express.get("/Categorias", function (request, response) {
  response.json(categorias);
});

express.get("/Categoria/:codigo", function (request, response) {
  var codigo = request.params["codigo"];
  var promise = new Promise((resolve, reject) => {
    resolve(
      categorias.filter((categoria) => {
        return categoria.codigo == codigo;
      })[0]
    );
  });
  promise.then((categoria) => {
    response.json(categoria);
  });
});

// Get by id
express.get("/Produto/:codigo", function (request, response) {
  var codigo = request.params["codigo"];
  var promise = new Promise((resolve, reject) => {
    resolve(
      produtos.filter((produto) => {
        return produto.codigo == codigo;
      })[0]
    );
  });
  promise.then((produto) => {
    response.json(produto);
  });
});

// Get all
express.get("/Produtos", function (request, response) {
  response.json(produtos);
});

// Create
express.post("/Produto", function (request, response) {
  produtos.push(request.body);
  response.json();
});

express.listen(8888);
