const express = require('express')


const {getCliente,getClientes,createcliente,deleteCliente} = require('../controller/cliente')


const router = express.Router()

router.route('/').get(getClientes)
router.route('/u/:nombreCliente').get(getCliente)
router.route('/crear').post(createcliente)
router.route('/eliminar/:id').delete(deleteCliente)



module.exports = router