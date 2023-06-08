const mongoose = require('mongoose');



const PromotorSchema = new mongoose.Schema(
    {
      nombre: {
        type: String,
        required: [true, 'Agregar Nombre'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
      },
      clave: {type:String, required:true},
      Estatus: Boolean,
      MontoGMensual:Number
    });
const VisitaSchema = new mongoose.Schema({
    nombreTienda:{type:String,required:true},
    TDA:{type:String,required:true},
    promotor: {type: String, required: true},
    altasG: {
        type: String,
        //required:[true,'Agregar altas en general'],
        maxlength: [10,'No se puede agregar mas de 10 caracteres'],
        required:true
    },
    bajasG: {
        type: String,
        //required:[true,'Agregar bajas en general'],
        maxlength: [10,'No se puede agregar mas de 10 caracteres'],
        required: true
    },
    totalP: {
        type:Number,
        required: true

    },
    rotacion:{type:String,required:true
    },

    fecha:{
        type: Date,
        required: [true,'Agregar fecha'],
        
    },
    folio:{
            type:String
    },
    productos:{
        type:[{nombre:String,bajas:String,alta:String,existencia:String}],
        required:true,
        
    },
    observaciones:{
        type: String,
        required: true,


        
        maxlength: 150

    },
    img:{type:String,required:true},
    estatus:{type:String,required:false}


})


const RutaPromotor = new mongoose.Schema({
    region: {type:String,required:true},
    rutaValor:{type:String,required:true},
    clavePromotor: {type:String, required:true},
    TDA: {type:String, required:true},
    dia: {type:String, required:true},
    fechaI: {type:Date,required:true},
    fechaF: Date

})
const Info = mongoose.model('PromotorInfo',PromotorSchema)
const Visita = mongoose.model('Visita',VisitaSchema)
const Ruta = mongoose.model('Ruta',RutaPromotor)
module.exports = {
    Info,Visita,Ruta
    
}