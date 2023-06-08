const express = require('express')
const {getPickings,getPicking,createPicking,deletePicking,updatePicking} = require('../controller/picking')
const router = express.Router()


router.route('/').get(getPickings)
router.route('/crear').post(createPicking)
router.route('/pendientes/').get(getPicking)
router.route('/update/:id').put(updatePicking)
router.route('/delete/:id').delete(deletePicking)

module.exports = router
