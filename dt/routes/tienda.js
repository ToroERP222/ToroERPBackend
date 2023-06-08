const express = require('express')


const {getTienda,getTiendas,createTienda,deleteTienda} = require('../controller/tienda')


const router = express.Router()

router.route('/').get(getTiendas)
router.route('/:TDA').get(getTienda)
router.route('/crear').post(createTienda)
router.route('/eliminar/:id').delete(deleteTienda)


module.exports = router



