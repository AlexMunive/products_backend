const router = require('express').Router()

const productsServices = require('./products.services')

//* Este es el prefijo: /products

router.get('/', productsServices.getAllProducts)         //* ver todo los productos
router.post('/', productsServices.postProduct)           //* crear un producto

router.get('/:id', productsServices.getProductById)       //* ver un producto especifico 
router.delete('/:id', productsServices.deleteProduct)     //* borrar un producto especifico
router.patch('/:id', productsServices.patchProduct)       //*  modificar todo el contenido del producto
router.put('/:id', productsServices.putProduct)           //* modifciar algo particular

module.exports = router