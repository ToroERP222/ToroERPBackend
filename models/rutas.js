const mongoose = require('mongoose')






const RutaSchema = new mongoose.Schema({
//pendiente
    nombreTienda:{type:String,required:true},
    TDA:{type:String,required:true},
    promotor:{type:String,required:true},
    vendedor:{type:String,required:true},
    diaE:{type:String,required:true},
    diaP:{type:String,required:true},
    numero:{type:Number, required:true}
})

const Ruta = mongoose.model('RutaS',RutaSchema)


module.exports = Ruta



