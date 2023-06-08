const mongoose = require('mongoose')


const FacturacionSchema = new mongoose.Schema({
    folioLiquidacion:{type:String,required:true},
    folioInterno:{type:String,required:true},
    fechaLiquidacion:{type:Date, require:true},
    fechaFacturacion:{type:Date, require:true},
    TDA:{type:String,require:true},
    nombreTienda:{type:String,required:true},
    montoFactura:{type:Number,require:true},
    numeroFactura:{type:String,required:true},
    nombreCliente:{type:String,required:true},
    piezasEntregadas:{type:Number,required:true}
})

const Facturacion = mongoose.model('Facturacion', FacturacionSchema)

module.exports = Facturacion