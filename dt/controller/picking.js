const Picking = require('../models/picking') 


exports.getPickings = async (req,res) => {
    const picking = await Picking.find()
    res.status(200).json({
        success:true,data:picking
    })
}

exports.getPicking = async (req,res) => {
   
    const picking = await Picking.find({estatus:'pendiente'})
    
    res.status(200).json({
        success:true, data:picking
    })
}
const getDate = (fech) => {
    
  var date = new Date()
  var daytoset = fech
  console.log(daytoset)
  var currentDay = date.getDay();
  var distance = (daytoset + 7 - currentDay);
  date.setDate(date.getDate() + distance);
  return date.toLocaleDateString('es-MX')
  
}

exports.createPicking = async (req,res) => {
  
  var obj = req.body
  var fechas = obj.fecha
  var fchas = []
  for (let index = 0; index < fechas.length; index++) {
     fchas.push({fechaE:getDate(fechas[index].dia)})
    
}
obj.fecha = fchas
   console.log(obj)
  const picking = await Picking.create(obj)
  res.status(201).json({
  success: true,
  data: picking
  })
}




exports.updatePicking = async (req,res) => {
  
  const visita  = await Picking.findByIdAndUpdate(req.params.id,{estatus:req.body.estatus})
  console.log(visita)
  res.status(201).json({success:true,data:visita})
}