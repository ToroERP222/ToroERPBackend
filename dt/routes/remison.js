const express = require('express')


const {createRemision,getRemision,getRemisiones} = require('../controller/remision')


const router = express.Router()

router.route('/').get(getRemisiones)
router.route('/unica/:fechaRemision').get(getRemision)
router.route('/crear').post(createRemision)



module.exports = router