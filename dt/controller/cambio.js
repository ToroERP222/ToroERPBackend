const Cambios = require('../models/cambios') 


exports.getCambios = async (req,res) => {
    const cambios = await Cambios.find()
    res.status(200).json({
        success:true,data:cambios
    })
}

exports.getCambio = async (req,res) => {
    const cambio = await Cambios.find({fecha:req.params.fecha})
    res.status(200).json({
        success:true, data:cambio
    })
}


exports.createCambio = async (req,res) => {
  
    var obj = req.body
    console.log(obj)
    
const cambio = await Cambios.create(obj)
res.status(201).json({
    success: true,
    data: cambio
  })
        
        
    

}



