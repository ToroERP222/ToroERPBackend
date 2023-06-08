const mongoose = require('mongoose')


const VendedorSchema = new mongoose.Schema({
    numero:{type:number, required:true},
    clave:{type:String,required:true},
    nombreVendedor:{type:String,required:true},
    razonSocial:{type:String,required:true},
    cobertura:{type:String,required:true},
    distibucionPrimaria:{type:String,required:true},
    distibucionSecundaria:{type:String,required:true},
    diasCredito:{type:String,required:true}
})

const Vendedor = mongoose.model('Vendedor', ClienteSchema)

module.exports = Cliente