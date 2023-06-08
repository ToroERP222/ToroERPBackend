const mongoose = require('mongoose')


const repartidorSchema = new mongoose.Schema(
    {
      nombre: {
        type: String,
        required: [true, 'Agregar Nombre'],
        maxlength: [50, 'Name can not be more than 50 characters']
      },
      clave: {type:String, required:true},
      Estatus: Boolean,
      Telefono:{type:String,required:true},

      
    });



const Repartidor = mongoose.model('Repartidor', repartidorSchema)
module.exports = Repartidor