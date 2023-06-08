const mongoose = require('mongoose');



const Pds = new mongoose.Schema( 
  {
   
    nombreTienda:{type:String,required:true},
    nombreCliente:{type:String,required:true},
    canal:{type:String,required:true},
    TDA:{type:String,required:true},
    fechaP: {
        type: Date,
        required: true
        
    },
    fechaE: {
        type: Date,
        
        required: true
      },
      productos:{type:[{nombre:String,numero:Number}]}
    });

const Pedido = mongoose.model('Pedidos', Pds)
module.exports = Pedido