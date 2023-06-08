const mongoose = require('mongoose')


const PickingSchema = new mongoose.Schema({
    
    TDA: {type:String,required:true},
    fecha:{type:[{fechaE:String}],required:true},
    empleadoEntrega:{type:String,required:true},
    productos:{type:[{nombre:String,cajas:Number,cantidad:Number}],required:true},
    estatus:{type:String}
})

const Picking = mongoose.model('Picking', PickingSchema)

module.exports = Picking