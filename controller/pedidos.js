const Pedido= require('../models/pedido')
exports.getPedidos = async (req,res) => {
    const pedido = await Pedido.find()
    res.status(201).json({sucess:true, data:pedido})

}


exports.getPedido = async (req,res) => {
    let tda = req.params.fecha
    const pedido =  await Pedido.find({fecha:new Date(tda)})
    res.status(201).json({sucess: true, data:pedido})

}


exports.createPedido = async (req,res) => {
    
    const pedido = await Pedido.create(req.body)
    res.status(200).json({success:true, data:pedido})
}
