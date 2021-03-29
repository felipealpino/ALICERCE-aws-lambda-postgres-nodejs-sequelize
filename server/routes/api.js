const express = require('express');
const itemContoller = require ('../controllers/item')

//rotas
const router = express.Router();

router.get("/", (req, res) =>
    res.status(200).send({
        message: "Welcome to the API!"
    })
);

router.get('/item', itemContoller.list)
router.post('/item', itemContoller.create)
router.get('/item/:id', itemContoller.retrieve)
router.put('/item/:id', itemContoller.update)
router.delete('/item/:id', itemContoller.delete)

module.exports = router