const Ruta = require('../models/rutas')

exports.getRutas = async (req,res) => {
    const rutas = await Ruta.find()

    res.status(200).json({success:true, data: rutas})
}

exports.getRuta = async (req,res) => {
    const rutas = await Ruta.find({numero:req.params.numero})
    res.status(201).json({success:true,data:rutas})


}

exports.create = async (req,res) => {
    var obj = req.body
    console.log(obj)
    const query = Ruta.find()
    query.count(function (err, count) {
         obj.numero = count +1
         console.log(obj)
         const visita = Ruta.create(obj,
          (err, item) => {
            if (err) {
                console.log(err);
            }}
            )
        res.status(201).json({
              success: true,
              data: visita
            });
        
    
    })
}

exports.updateRuta = async (req,res) => {
    let query = {numero:req.params.numero}
    const ruta  = await Ruta.findByIdAndUpdate(req.params.id,req.body)
    res.status(201).json({success:true,data:ruta})
}
