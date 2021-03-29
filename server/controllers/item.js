const Item = require("../models").Item;

module.exports = {
  //INSERIR DADOS NO BANCO DE DADOS -- TESTADO LOCAL OK
  create(req, res) {
    return Item.create({
      item_id: req.body.item_id,
      name: req.body.name,
      weight: req.body.weight
    }).then(item => res.status(201).send({
          success: true,
          message: "Item criado com sucesso !! :).",
          item:item
        })
      ).catch(error => res.status(400).send(error));
  },


  //LISTAR TODOS OS ITENS DO BANCO DE DADOS -- TESTADO LOCAL OK
  list(req, res) {
    return Item.findAll()
      .then(items => res.status(200).send(items))
      .catch(error => res.status(400).send({
        error:error,
        status:400
      }));
  },


  // CAPTURAR ITENS POR itemID -- TESTADO LOCAL OK
  async retrieve(req, res) {
    // console.log(req.params.itemId)
    return await Item.findAll({
      where: {id: req.params.itemId}
    }).then(item => {
        if (!item) {
          return res.status(404).send({
            message: "O item nao foi encontrado!"
          });
        }
        return res.status(200).send(item);
      })
      .catch(error => res.status(400).send(error));
  },


  //UPDATE ITEM BY itemId -- TESTADO LOCAL OK
  async update(req, res) {
    const dados = await Item.update(req.body, {
      where:{id: req.params.itemId}
    })
    res.status(200).send(dados)
  },


  //DELETAR ITEM BY ItemId - TESTADO LOCAL OK 
  async delete(req, res) {
    console.log(req.params.itemId)
    const dados = await Item.destroy({
      where:{id: req.params.itemId}
    })

    if (!dados) {
      return res.status(400).send({
        message: "Item Not Found"
      });
    }
    res.status(204).send({ message: "Item deletado com sucesso !!!!" })
}
};


