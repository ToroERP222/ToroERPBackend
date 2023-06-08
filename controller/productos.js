const Producto  = require('../models/productos')
const fs = require('fs')
const path = require('path')
const upload = require('../middleware/upload')
const Cliente = require('../models/cliente')
 
exports.GetProductos = async (req,res) => {
    const productos = await Producto.find()
    res.status(200).json({success:true,data:productos})
}

exports.getProducto = async (req,res) => {
    const producto = await Producto.find({codigoBarras:req.params.CodigoBarras})
    res.status(200).json({success:true, data:producto})
}

exports.createProduct =   async (req,res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    const url = req.protocol + '://' + req.get('host')+'/uploads'
    console.log(req.body)
    var obj = {
        nombre: req.body.nombre,
        codigoBarras: req.body.codigoBarras,
        descripcion:req.body.descripcion,
       img: url+'/'+req.file.filename,
    }
    console.log(obj)
   const producto =  await Producto.create(obj,(err,item) => (err, item) => {
        if (err) {
            console.log(err);
        }}
        )
        res.status(201).json({
          success: true,
          data: producto
        })
    }
    exports.updateProduct = async (req, res) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    
      try {
        const url = req.protocol + '://' + req.get('host')+'/uploads'
        const productId = req.params.id
        const productData = req.body
        const existingProduct = await Producto.findById(productId)
    
        if (!existingProduct) {
          return res.status(404).json({
            success: false,
            message: 'Product not found'
          })
        }
    
        const updatedProduct = {
          ...existingProduct._doc,
          ...productData
        }
    
        if (req.file) {
          updatedProduct.img = url+'/'+req.file.filename
        }
    
        await Producto.findByIdAndUpdate(productId, updatedProduct)
    
        res.status(200).json({
          success: true,
          data: updatedProduct
        })
      } catch (error) {
        console.error(error)
        res.status(500).json({
          success: false,
          message: 'Internal Server Error'
        })
      }
    }
    
exports.UpdateProductClient = async (req,res) => {
    const document = await Cliente.findById(req.params.id);
  document.productos.push(req.body.producto);
  await document.save();
  await res.status(201).json({success:true,data:document})
}

exports.deleteProducto = async (req,res) => {
    const producto =    Producto.findByIdAndRemove(req.params.id, function (err) {
           if (err) return handleError(err);
           // deleted at most one tank document
         });
       console.log(producto)
       res.status(204).json({success:true})
     }


exports.updateCantidadAlmacen = async  (req,res)  => {
  const cc = req.body.cantidadAlmacen
  console.log(cc)
  
  const quantity = await  Producto.updateOne({_id:req.params.id}, {$set:{cantidadAlmacen:cc}})
  console.log(quantity)
  res.status(201).json({success:true})
}
