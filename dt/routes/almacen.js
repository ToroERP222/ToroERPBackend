const {createEstatusAlmacen,deletePedidoFabricante,getAlmacen,getAlmacenT,updateAlmacen,createAlmacen,getPedidos,getPedido,updatePedido,createPedido,createPedidoFabricante,getPedidosFabricante} = require('../controller/almacen')
const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
router.route('/').get(getAlmacenT)
router.route('/crear').get(getAlmacen)
router.route('/update/:id').put(updateAlmacen)
router.route('/:numero').post(createAlmacen)
router.route('/pedido').get(getPedidos)
router.route('/pedidoF').get(getPedidosFabricante)
router.route('/pedido/:fecha').get(getPedido)
router.route('/pedido/crear').post(createPedido)
router.route('/pedidoF/crear').post(createPedidoFabricante)
router.route('/pedidoF/delete/:id').delete(deletePedidoFabricante)
router.route('/estatusA/crear').post(upload.array('img'),createEstatusAlmacen)
module.exports = router 