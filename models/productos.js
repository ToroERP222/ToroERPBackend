const mongoose = require('mongoose');



const ProductoSchema = new mongoose.Schema(
    {
    nombre: {
        type: String,
        required: [true, 'Agregar Nombre'],
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    codigoBarras: {
        type: String,
        
        required: [true,'Agregar codigo de barras']
    },
    descripcion:{
            type: String,
            required:true 
    },
    cantidadAlmacen:{type:Number},
    img:{type:String,required:true},
    });
const Producto = mongoose.model('Productos', ProductoSchema)
module.exports = Producto