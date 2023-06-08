const mongoose = require('mongoose')


const ClienteSchema = new mongoose.Schema({
    canal:{type:String, required:true},
    clave:{type:String,required:true},
    nombreCliente:{type:String,required:true},
    razonSocial:{type:String,required:true},
    numeroRemision:{type:Number,required:false},
    productos:{type:[{nombre:String,precio:Number,codigoBarras:String}],required:true}
})

const Cliente = mongoose.model('Cliente', ClienteSchema)

module.exports = Cliente