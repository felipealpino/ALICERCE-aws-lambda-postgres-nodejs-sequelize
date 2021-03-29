const itemController = require("../controllers/").item;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the API!"
    })
  );
  
  // POST item
  app.post("/api/item", itemController.create);
  // GET Listar os itens
  app.get("/api/item", itemController.list);
  // GET Listar unico item by ID
  app.get("/api/item/:itemId", itemController.retrieve);
  // UPDATE unico item by ID
  app.put("/api/item/:itemId", itemController.update);
  // DELETE unico by ID
  app.delete("/api/item/:itemId", itemController.delete);
};