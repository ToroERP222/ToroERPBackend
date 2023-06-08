const mongoose = require('mongoose')


const TiendaSchema = new mongoose.Schema({
    canal:{type:String, required:true},
    nombreCliente:{type:String,required:true},
    TDA: {type:String,required:true},
    nombreTienda: {type:String,required:true},
    diaE:{type:[{dia:String}], required:true},
    diaP:{type:[{dia:String}], required:true},
    empleadoPromotoria:{type:String,required:true},
    empleadoEntrega:{type:String,required:true},
  
})

const Tienda = mongoose.model('Tienda', TiendaSchema)

module.exports = Tienda