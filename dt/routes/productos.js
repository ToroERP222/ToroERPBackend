const express = require('express')
const {GetProductos,createProduct,getProducto,UpdateProductClient,deleteProducto,updateCantidadAlmacen} = require('../controller/productos')
const router = express.Router()
const upload = require('../middleware/upload')

router.route('/').get(GetProductos)
router.post('/crear',upload.single('img'), createProduct)
router.route('/producto/:codigo').get(getProducto)
router.route('/cliente/:id').put(UpdateProductClient)
router.route('/eliminar/:id').delete(deleteProducto)
router.route('/actualizarAlmacen/:id').put(updateCantidadAlmacen)
module.exports = router