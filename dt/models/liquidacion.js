const mongoose = require('mongoose')


const LiquidacionSchema = new mongoose.Schema({
    TDA:{type:String,required:true},
    nombreTienda:{type:String,required:true},
    vendedor:{type:String,required:true},
    fechaLiquidacion:{type:Date,required:true},
    folioLiquidacion:{type:String,required:true,unique:true},
    numeroRemison: {type:String,required:true},
    montoFactura:{type:Number,required:true},
    piezasEntregadas:{type:Number,required:true},
    producto:{type:[{nombre:String,existencia:Number}],required:true}
})

const Liquidacion = mongoose.model('Liquidacion', LiquidacionSchema)

module.exports = Liquidacion