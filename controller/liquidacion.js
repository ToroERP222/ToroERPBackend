const Liquidacion = require('../models/liquidacion')
exports.getLiquidaciones = async (req,res) => {
    const liquidaciones = await Liquidacion.find()
    res.status(201).json({sucess:true, data:liquidaciones})

}


exports.getLiquidacion = async (req,res) => {
    let tda = req.params.fecha
    const liquidacion =  await Liquidacion.find({fecha:new Date(tda)})
    res.status(201).json({sucess: true, data:liquidacion})

}

exports.createLiquidacion = async (req,res) => {
    
    const liquidacion = await Liquidacion.create(req.body)
    res.status(200).json({success:true, data:liquidacion})
}