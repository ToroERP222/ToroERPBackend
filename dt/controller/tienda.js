const Tienda = require('../models/tienda')



exports.getTiendas = async (req,res) => {
    const tiendas = await Tienda.find()
    res.status(201).json({sucess:true, data:tiendas})

}


exports.getTienda = async (req,res) => {
    
    const tienda =  await Tienda.find({TDA:req.params.TDA})
    res.status(201).json({sucess: true, data:tienda})

}

exports.createTienda = async (req,res) => {
    
    const tienda = await Tienda.create(req.body)
    res.status(200).json({success:true, data:tienda})
}



exports.updateTienda = async (req,res) => {
  
    const tienda  = await Tienda.findByIdAndUpdate(req.params.id,{estatus:req.body.estatus})
    console.log(tienda)
    res.status(201).json({success:true,data:tienda})
  }





exports.deleteTienda = async (req,res) => {
  
 const tienda =    Tienda.findByIdAndRemove(req.params.id, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });
    console.log(tienda)
    res.status(204).json({success:true,data:tienda})
  }