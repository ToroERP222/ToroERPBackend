const {createRepartidor,getRepartidore,getRepartidores} = require('../controller/repartidor')
const express = require('express')
const router = express.Router()

router.route('/').get(getRepartidores)
router.route('/repartidor/:clave').get(getRepartidore)
router.route('/crear').post(createRepartidor)


module.exports = router