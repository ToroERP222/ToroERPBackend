const express = require('express')
const {GetInfo,createPromotor,createVisita,getPromotor,getVisitas,createRuta,getRuta,getVisita,updateVisita} = require('../controller/promotor')
const upload = require('../middleware/upload')

const router = express.Router()




router.route('/').get(GetInfo)
router.route('/crearP').post(createPromotor)
router.post('/crearV',upload.single('img'),createVisita)
router.route('/visitas').get(getVisitas)
router.route('/visita/:fecha').get(getVisita)
router.route('/crearRuta').post(createRuta)
router.route('/ruta/:promotor').get(getRuta)
router.route('/update/:id').put(updateVisita)
module.exports = router;
