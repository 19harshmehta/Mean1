//add product
var products = []
function addProduct(req,res)
{
    console.log("Hello")
    let productName = req.body.productName
    let price = req.body.price
    let qty = req.body.qty
    let productId = parseInt(Math.random() * 100)
    
    let product = {
        "productId":productId,
        "productName":productName,
        "price":price,
        "qty":qty
    }

    products.push(product)
    console.log("Hello",product)

    res.json({"msg":"Product Added","data":product,"rescode":200})
}

//getAllProducts
function getAllProducts(req,res)
{
    res.json({"msg":"Product Retrieved","data":products,"rescode":200})
}


module.exports.addProduct = addProduct
module.exports.getAllProducts = getAllProducts