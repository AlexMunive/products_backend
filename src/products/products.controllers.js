const  uuid = require('uuid')
const Products=require('../models/productsModels')

const getAllProducts= async()=> {
    const data = await Products.findAll()       //* findAll vota una rreglo
     return data
    }



const createProducts=async(data)=>{
        const newProducts= await Products.create({
           id: uuid.v4(),
           name: data.name,
           category: data.category,
           price: data.price,
           isAvailable: data.isAvailable
        })
        return newProducts
   }  


//* ejemplo para crear producto

// createProducts({
//     name: 'Redmi Note 11',
//     category: 'cell phones',
//     price: 12000,
//     isAvailable: true
// })
//     .then(response => console.log(response))
//     .catch(err => console.log(err))  
   
   
const getProductsById= async(id)=>{
    const data = await Products.findOne({                 //* te retorna un solo objeto
      where: {
          id                                            //* id : id
      }
    });  
    return data
}   


const editProduct = async(id,data)=>{
    const response= await Products.update(data,{
        where: {
            id:id
        },
    });
    return response
}


const deleteProduct = async(id)=>{
    const data = await Products.destroy({
        where:{
            id
        }
    })
    return data   //* si el where no encuentra nada, retorna null
}

module.exports={
    getAllProducts,
    createProducts,
    getProductsById,
    editProduct,
    deleteProduct
}