const mongoose = require('mongoose')


const RemisionSchema = new mongoose.Schema({
    numeroRemision:{type:Number, required:true},
    TDA:{type:String,required:true},
    nombreTienda:{type:String,required:true},
    vendedor:{type:String,required:true},
    fechaRemision:{type:Date,required:true},
    folioLiquidacion:{type:String,required:true},
    totalsinieps:{type:Number,required:true},
    ieps:{type:Number,required:true},
    total:{type:Number,required:true},
    remisionFinal:{type:Number, requiered:true},
    producto:{type:[{nombre:String,numero:Number,costo:String}],required:true}
})

const Remision = mongoose.model('Remision', RemisionSchema)

module.exports = Remision