const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const app = express();

const cookieParser = require('cookie-parser');

//Config
dotenv.config({ path: './config/config.env' });
const connectDB = require('./config/db')
const promotor = require('./routes/promotor')
const productos = require('./routes/productos')
const tienda = require('./routes/tienda')
const cambios = require('./routes/cambios')
const repartidor = require('./routes/repartidor')
const ruta = require('./routes/ruta')
const auth = require('./routes/auth')
const cliente = require('./routes/cliente')
const liquidacon = require('./routes/liquidacion')
const remision = require('./routes/remison')
const pedido = require('./routes/pedidos')
const facturacion = require('./routes/facturacion')
const picking = require('./routes/picking')
const almacen = require('./routes/almacen')
const cors = require('cors');

app.use(express.json());
const PORT = 5000;
connectDB()
app.use(cors());
app.use(cookieParser())

dotenv.config();
var allowCrossDomain = function(req, res, next) {
  if ('OPTIONS' == req.method) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send(200);
  }
  else {
    next();
  }
};
app.use(allowCrossDomain)
app.use('/uploads', express.static('uploads'))
//routes
app.use('/api/v1/promotor',promotor)
app.use('/api/v1/productos',productos)
app.use('/api/v1/tienda',tienda)
app.use('/api/v1/cambios',cambios)
app.use('/api/v1/repartidor',repartidor)
app.use('/api/v1/auth',auth)
app.use('/api/v1/ruta',ruta)
app.use('/api/v1/cliente',cliente)
app.use('/api/v1/liquidacion',liquidacon)
app.use('/api/v1/remision', remision)
app.use('/api/v1/pedido', pedido)
app.use('/api/v1/facturacion', facturacion)
app.use('/api/v1/picking',picking)
app.use('/api/v1/almacen',almacen)
//Listener
const server = app.listen(
  PORT,
  console.log(
    `Server running in ${PORT}`
  )
);

// Handle unhandled promise rejections
/*process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  // server.close(() => process.exit(1));
});*/