const Remision = require('../models/remision')
exports.getRemisiones = async (req,res) => {
    const remisiones = await Remision.find()
    res.status(201).json({sucess:true, data:remisiones})

}


exports.getRemision = async (req,res) => {
    let fecha = req.params.fechaRemision

    const remision =  await Remision.find({fechaRemision:new Date(fecha)})
   
    res.status(200).json({sucess: true, data:remision})

}

exports.createRemision = async (req,res) => {
    
    var obj = req.body
    const query = Remision.find()
    query.count(function (err, count) {
         obj.remisionFinal = count + obj.numeroRemision
         console.log(obj.folio)
         const remision = Remision.create(obj,
          (err, item) => {
            if (err) {
                console.log(err);
            }}
            )
        console.log(obj)
        res.status(201).json({
              success: true,
              data: remision
            });
        
    
    })
}