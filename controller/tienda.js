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


exports.updateDiaE = async (req, res) => {
  try {
    const id = req.params.id;
    const diaE = req.body.diaE;

    // Find the Tienda document with the given ID and update its diaE field
    const updatedTienda = await Tienda.findByIdAndUpdate(
      id,
      { diaE: diaE },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedTienda });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
};
exports.updateDiaP = async (req, res) => {
  try {
    const id = req.params.id;
    const diaP = req.body.diaP;

    // Find the Tienda document with the given ID and update its diaE field
    const updatedTienda = await Tienda.findByIdAndUpdate(
      id,
      { diaP: diaP },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedTienda });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
};




exports.updateTienda = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTienda = await Tienda.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    console.log(updatedTienda);
    res.status(201).json({ success: true, data: updatedTienda });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
};



exports.deleteTienda = async (req,res) => {
  
 const tienda =    Tienda.findByIdAndRemove(req.params.id, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });
    console.log(tienda)
    res.status(204).json({success:true,data:tienda})
  }
