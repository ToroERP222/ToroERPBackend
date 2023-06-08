
const express = require('express')
const {createCambio,getCambio,getCambios} = require('../controller/cambio')
const router = express.Router()


router.route('/').get(getCambios)
router.route('/:fecha').get(getCambio)
router.route('/crear').post(createCambio)

module.exports = router







