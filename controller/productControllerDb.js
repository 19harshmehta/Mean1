const ProductModel = require('../model/productModel')


function addProducts(req,res)
{
    let productName = req.body.productName
    let price = req.body.price
    let qty = req.body.qty
    let categoryId = req.body.categoryId 

    let product = new ProductModel({

        "productName":productName,
        "price":price,
        "qty":qty,
        "categoryId":categoryId 
    })

    product.save()

    res.json({ "msg":"Prodct Added","data":product,"rcode":200 })

    
}

function getAllProducts(req,res)
{
    ProductModel.find().populate("categoryId").exec().then((data)=>{
        res.json({ "msg":"Product Retrived" , "data":data , "rcode":200})
    }).catch((err)=>{
        res.json({ "msg":"Error in getAll Api" , "data":err , "rcode":-9})
    })

}


function getProductById(req,res)
{
    let productId = req.params.productId 

    ProductModel.findById({_id:productId}).then((data)=>{
        if(data != null)
        {

            res.json({ "msg":"Data Found" , "data":data , "rcode":200})
        }else{
            res.json({ "msg":"Data Not Found" , "data":err , "rcode":-9})

        }
    }).catch((err)=>{
        
            res.json({ "msg":"Data Not Found" , "data":err , "rcode":-9})
      
    })
}

function deleteProductById(req,res)
{
    let productId = req.params.productId 

    ProductModel.findByIdAndDelete({_id:productId}).then((data)=>{
        res.json({ "msg":"Data Deleted" , "data":data , "rcode":200})
    }).catch((err)=>{
        res.json({ "msg":"No Rec Found" , "data":err , "rcode":-9})
    })
}


module.exports.filterProducts = function (req, res) {
    let minPrice = req.body.minPrice
    let maxPrice = req.body.maxPrice

    ProductModel.find({
        $and: [
            {
                price: {
                    $gt: minPrice
                }
            },
            {
                price: {
                    $lt: maxPrice
                }
            }
        ]

    }).then((data) => {
        if (data.length == 0) {
            res.json({ "msg": "No Data Found ", "data": req.body, "rcode": -9 })
        } else {
            res.json({ "msg": "Product filter ", "data": data, "rcode": 200 })
        }
    }).catch((err) => {
        res.json({ "msg": "SMW ", "data": err, "rcode": -9 })
    })
}



//name price qty 

module.exports.updateProduct = function(req,res){
    let productId = req.body.productId 
    let price = req.body.price  
    let qty = req.body.qty 

    ProductModel.updateOne({_id:productId},{"price":price,"qty":qty}).then((data)=>{
        res.json({"msg":"product updated","data":data,"rcode":200})
    }).catch((err)=>{
        res.json({"msg":"product updation fails","data":data,"rcode":200})      
    })
}



module.exports.addProduct = addProducts
module.exports.getAllProducts = getAllProducts
module.exports.getProductById = getProductById
module.exports.deleteProductById = deleteProductById