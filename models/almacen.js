const mongoose = require('mongoose')


const AlmacenSchema = new mongoose.Schema({
    fecha:{type:String, required:true},
    cantidad:{type:Number},
    nombreProducto:{type:String}
})

const EstatusAlmacen = new mongoose.Schema({
    fecha:{type:String,required:true},
    productos:{type:[{nombre:String,img:String}]}
  
})

const PedidoAlmacen =  new mongoose.Schema({
    fecha:{type:[{dia:Number}]},
   TDA:{type:String},
   empleado:{type:String},
   estatus:{type:String},
   totalPedido:{type:String},
   fechaPromotoria:{type:String},
    productos:{type:[{nombre:String,cantidad:Number}]},
    

})
const PedidoFabricante = new mongoose.Schema({
    fecha:{type:String, required:true},
    estatus:{type:String},
    productos:{type:[{nombre:String,cantidad:Number}],required:true},  
})

const Almacen = mongoose.model('Almacen', AlmacenSchema)
const Pedido = mongoose.model('Pedido',PedidoAlmacen)
const PedidoF = mongoose.model('PedidoF',PedidoFabricante)
const EstatusA = mongoose.model('EstatusA', EstatusAlmacen)

module.exports = {Almacen,Pedido,PedidoF,EstatusA}