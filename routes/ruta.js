const {getRuta,getRutas,create,updateRuta} = require('../controller/ruta')

const express = require('express')
const router = express.Router()



router.route('/').get(getRutas)
router.route('/crear').post(create)
router.route('/update/:id').put(updateRuta)
router.route('/:numero').get(getRuta)


module.exports= router