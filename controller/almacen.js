
const {Almacen,Pedido,PedidoF,EstatusA} = require('../models/almacen') 


exports.getAlmacenT = async (req,res) => {
    const almacen = await Almacen.find()
    res.status(200).json({
        success:true,data:almacen
    })
}

exports.getAlmacen = async (req,res) => {
    const almacen = await Almacen.find({fecha:req.params.fecha})
    res.status(200).json({
        success:true, data:almacen
    })
}


exports.createAlmacen = async (req,res) => {
  
    var obj = req.body
    console.log(obj)
    
const almacen = await Almacen.create(obj)
res.status(201).json({
    success: true,
    data: almacen
  })
}



exports.updateAlmacen = async (req,res) => {
    let query = {numero:req.params.numero}
    const almacen  = await Almacen.findByIdAndUpdate(req.params.id,req.body)
    res.status(201).json({success:true,data:almacen})
}
exports.deleteAlmacen = async (req,res) => {
	 const almacen =    Almacen.findByIdAndRemove(req.params.id, function (err) {
           if (err) return handleError(err);
           // deleted at most one tank document
         });
       
       res.status(204).json({success:true})
	
}

exports.getPedidos = async (req,res) => {
    const pedido = await Pedido.find()
    res.status(200).json({
        success:true,data:pedido
    })
}

exports.getPedido = async (req,res) => {
    const pedido = await Pedido.find({fecha:req.params.fecha})
    res.status(200).json({
        success:true, data:pedido
    })
}




exports.updatePedido = async (req,res) => {
  
    console.log(req.body)
    const visita  = await Pedido.findByIdAndUpdate(req.params.id,{estatus:req.body.estatus})
    res.status(201).json({success:true,data:visita})
  }


exports.deletePedidoF  = async (req,res) => {

}
exports.deletePedido = async (req,res) => {
         const pedido =    Pedido.findByIdAndRemove(req.params.id, function (err) {
           if (err) return handleError(err);
           // deleted at most one tank document
         });

       res.status(204).json({success:true})

}

exports.createPedido = async (req,res) => {
  
    var obj = req.body
    console.log('pedido')
    console.log(obj)
    
const pedido = await Pedido.create(obj)
res.status(201).json({
    success: true,
    data: pedido
  })

}

exports.getPedidosFabricante = async (req,res) => {
    const pedido = await PedidoF.find()
    res.status(200).json({
        success:true,data:pedido
    })
}



exports.createPedidoFabricante = async (req,res) => {
  
    var obj = req.body
    console.log(obj)
    
const pedido = await PedidoF.create(obj)
console.log(pedido)
res.status(201).json({
    success: true,
    data: pedido
  })
}
exports.updatePedidoFabricante = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await PedidoF.findById(id);

    if (!pedido) {
      return res.status(404).json({
        success: false,
        message: `PedidoF with id ${id} not found`,
      });
    }

    const updatedPedido = await PedidoF.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: updatedPedido,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.deletePedidoFabricante = async (req, res) => {
  const pedidoId = req.params.id;
  try {
    const deletedPedido = await PedidoF.findByIdAndDelete(pedidoId);
    if (!deletedPedido) {
      return res.status(404).json({ success: false, error: 'Pedido not found' });
    }
    res.status(200).json({ success: true, data: deletedPedido });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

exports.getEstatusAlmacen = async (req,res) => {
    const estatus =  await EstatusA.find()
    res.status(200).json({success:true,data:estatus})
}
exports.createEstatusAlmacen = async (req,res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  const url = req.protocol + '://' + req.get('host') + '/uploads'; // include this line to get the URL of the uploads folder
  console.log(req.body);
let data = [req.body.nombre.map((producto, index) => {
    return {
        nombre: producto,

        img: url + '/' + req.files[index].filename // use the uploaded filename and prepend the URL of the uploads folder
    };
})]

console.log(data)


const estatusAlmacen = new EstatusA({
  fecha: req.body.fecha,
  productos: req.body.nombre.map((producto, index) => {
    return {
        nombre: producto,

        img: url + '/' + req.files[index].filename // use the uploaded filename and prepend the URL of the uploads folder
    };
  })
});

estatusAlmacen.save((err) => {
  if (err) {
      console.log(err);
      res.status(500).send('Error al crear el estatus de almacen');
  } else {
      res.status(201).send(estatusAlmacen);
  }
});
};
