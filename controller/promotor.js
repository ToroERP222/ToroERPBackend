
const {Info,Visita,Ruta} = require('../models/promotor')

exports.GetInfo= async (req,res) => {
    const info = await Info.find();
    
    res.status(200).json({ success: true, data: info })
}
exports.getPromotor= async (req,res) =>{
  const promotor =  await Info.findOne(req.body.nombre)
}
exports.createPromotor = async (req, res, next) => {
   // Add user to req,body
   /*
    req.body.user = req.user.id;
  
    // Check for published bootcamp
    const promotorInf = await Info.findOne({ user: req.user.id });
  
    // If the user is not an admin, they can only add one bootcamp
    if (promotorInf && req.user.role === 'admin') {
      return next(
        "User already taken"
      );
    }*/
  
    const promotor = await Info.create(req.body);
  
    res.status(201).json({
      success: true,
      data: promotor
    });
  }


const folio = () => {
  
 return res
}


const fs = require('fs');

exports.createVisita = async (req, res, next) => {
  console.log(process.cwd());
  

  const imageData = fs.readFileSync(req.file.path); // Read the image file
  
  var obj = req.body;
  obj.img = imageData; // Save the image data in the 'img' property
  console.log(imageData)
  const query = Visita.find();
  obj.productos = JSON.parse(obj.productos);
  
  query.count(async function (err, count) {
    obj.folio = count;
    console.log(obj.folio);
    
    try {
      const visita = await Visita.create(obj); // Save the object with the image data
      console.log(obj);
      
      // Remove the image file from the server
      fs.unlinkSync(req.file.path);
      
      res.status(201).json({
        success: true,
        data: visita,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: 'Error saving the visita',
      });
    }
  });
};
exports.deleteVisitaById = async (req, res, next) => {
  try {
    const visitaId = req.params.id;
    const visita = await Visita.findById(visitaId);
    
    if (!visita) {
      return res.status(404).json({
        success: false,
        message: 'Visita not found',
      });
    }
    
    await visita.remove();
    
    res.status(200).json({
      success: true,
      message: 'Visita deleted successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'An error occurred',
    });
  }
};


exports.getVisita = async (req,res,next) => {
  let fecha = req.params.fecha
  const visita = await Visita.find({fecha:new Date(fecha)})
  res.status(201).json({
    success: true,
    data: visita
  });
}
exports.getVisitas = async (req,res,next) => {
  
  const visita = await Visita.find()
  console.log(visita)
  res.status(200).json({
    success: true,
    data: visita
  })
}
exports.getRuta = async (req,res) => {
    let promotor = req.body.clavePromotor
    const ruta = Ruta.findOne(promotor)
    res.status(201).json({
      success:true,
      data: ruta 
    })
}


exports.createRuta = async (req,res) => {
  var obj = {
    region: req.body.region,
    rutaV: req.body.rutaV,
    clavePromotor: req.body.clavePromotor,
    TDA: req.body.TDA,
    dia: req.body.dia,
    fechaI: req.body.fechaI,
    fechaF: req.body.fechaF
  }
  const ruta = Ruta.create(obj)
  res.status(201).json({
    success:true,
    data: ruta
  })

}


exports.updateVisita = async (req,res) => {
  
  console.log(req.body)
  const visita  = await Visita.findByIdAndUpdate(req.params.id,{estatus:req.body.estatus})
  res.status(201).json({success:true,data:visita})
}