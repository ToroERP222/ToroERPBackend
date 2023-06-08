const Facturacion = require('../models/facturacion') 


exports.getFacturacion = async (req,res) => {
    const cambios = await Facturacion.find()
    res.status(200).json({
        success:true,data:cambios
    })
}

exports.getFacturas = async (req,res) => {
    const date = new Date(req.params.fechaFactura);
    const month = date.getMonth();
    const year = date.getFullYear();
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    const filters = {
        fechaFacturacion: {
          $gte: startDate,
          $lt: endDate,
        },
      };
    
    const facturas = await Facturacion.find({}).where(filters)
    console.log(facturas)
    res.status(200).json({
        success:true, data:facturas
    })
}


exports.createFactura = async (req,res) => {
  
    var obj = req.body
 
    
    const factura = await Facturacion.create(obj)
    res.status(201).json({
    success: true,
    data: factura
  })
        
        
    

}



