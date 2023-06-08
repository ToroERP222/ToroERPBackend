const express = require('express');
const {
  getCliente,
  getClientes,
  createCliente,
  deleteCliente,
  updateCliente,
  updateProductos
} = require('../controller/cliente');

const router = express.Router();

router.route('/').get(getClientes);
router.route('/u/:nombreCliente').get(getCliente);
router.route('/crear').post(createCliente);
router.route('/eliminar/:id').delete(deleteCliente);
router.route('/actualizar/:id').put(updateCliente);
router.route('/actualizar-productos/:id').put(updateProductos);

module.exports = router;
