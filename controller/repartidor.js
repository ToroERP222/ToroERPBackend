const Repartidor = require('../models/repartidor')



exports.getRepartidores = async (req,res) => {
    const repartidores = await Repartidor.find()
    res.status(200).json({success:true,data:repartidores})
}

exports.getRepartidore = async (req,res) => {
    const repartidor = await Repartidor.findOne(req.body.clave)
    res.status(201).json({success:true, data:repartidor})
}

exports.createRepartidor = async (req,res) => {
    const repartidor = await Repartidor.create(req.body)
    res.status(201).json({
        success:true, data:repartidor
    })
}