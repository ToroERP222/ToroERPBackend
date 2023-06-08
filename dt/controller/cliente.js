const Cliente = require('../models/cliente')
exports.getClientes = async (req,res) => {
    const clientes = await Cliente.find()
    res.status(201).json({sucess:true, data:clientes})

}
exports.getCliente = async (req,res) => {
    const cliente = await Cliente.find({nombreCliente:req.params.nombreCliente})
    res.status(200).json({success:true,data:cliente})


}


exports.createcliente = async (req,res) => {
    
    const cliente = await Cliente.create(req.body)
    res.status(200).json({success:true, data:cliente})
}
exports.updateCliente = async (req,res) => {
  
    const cliente  = await Cliente.findByIdAndUpdate(req.params.id,{estatus:req.body.estatus})
    console.log(cliente)
    res.status(201).json({success:true,data:cliente})
  }

exports.updateProductos = async (req,res) => { 
    const cliente  = await Cliente.updateOne({_id:req.params.id},{$set:{productos:req.body.productos}})
    console.log(cliente)
    res.status(201).json({success:true,data:cliente})
  }


  exports.deleteCliente = async (req,res) => {
    console.log(req.params.id)
    const cliente = await Cliente.deleteOne({_id:req.params.id})
    console.log(cliente)
    res.status(204).json({success:true, data:cliente})
     }