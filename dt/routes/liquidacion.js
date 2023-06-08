const express = require('express')


const {createLiquidacion,getLiquidacion,getLiquidaciones} = require('../controller/liquidacion')


const router = express.Router()

router.route('/').get(getLiquidaciones)
router.route('/unica/:fecha').get(getLiquidacion)
router.route('/crear').post(createLiquidacion)



module.exports = router