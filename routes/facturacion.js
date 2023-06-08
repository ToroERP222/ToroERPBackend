
const express = require('express')
const {createFactura,getFacturas,getFacturacion} = require('../controller/facturacion')
const router = express.Router()


router.route('/').get(getFacturacion)
router.route('/:fechaFactura').get(getFacturas)
router.route('/crear').post(createFactura)

module.exports = router







