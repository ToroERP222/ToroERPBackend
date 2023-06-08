const express = require('express')
const {getPedidos,getPedido,createPedido} = require('../controller/pedidos')
const router = express.Router()


router.route('/').get(getPedidos)
router.route('/crear').post(createPedido)
router.route('/:fecha').get(getPedido)

module.exports = router