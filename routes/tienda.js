const express = require('express')


const {updateDiaE,updateDiaP,getTienda,getTiendas,updateTienda,createTienda,deleteTienda} = require('../controller/tienda')


const router = express.Router()

router.route('/').get(getTiendas)
router.route('/:TDA').get(getTienda)
router.route('/crear').post(createTienda)
router.route('/eliminar/:id').delete(deleteTienda)
router.route('/diaE/:id').put(updateDiaE)
router.route('/diaP/:id').put(updateDiaP)
router.route('/:id').put(updateTienda)

module.exports = router



