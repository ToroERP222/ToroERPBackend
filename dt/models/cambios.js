const mongoose = require('mongoose')


const CambioSchema = new mongoose.Schema({

    fecha:{type:Date, require:true},
    TDA:{type:String,require:true},
    tipoMovimiento:{type:String,require:true},
    nombreTienda:{type:String,required:true},
    nombre:{type:String,required:true},
    producto:{type:[{producto:String,numero:Number}],required:true}
})

const Cambios = mongoose.model('Cambios', CambioSchema)

module.exports = Cambios