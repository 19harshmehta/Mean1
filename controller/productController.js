var products = []

let p1 = {
    "productId":123456,
    "productName":"Iphone 14",
    "price":140000,
    "qty":5
}

products.push(p1)

console.log("products loaded -> ",products)

function addProducts(req,res)
{
    let productId = parseInt(Math.random() * 10000000)

    let productName = req.body.productName
    let price = req.body.price
    let qty = req.body.qty

    let product = {

        "productId":productId,
        "productName":productName,
        "price":price,
        "qty":qty
    }

    products.push(product)

    res.json({ "msg":"Prodct Added","data":product,"rcode":200 })

}

function getAllProducts(req,res)
{
    
    res.json({ "msg":"All Products","data":products,"rcode":200 })

}

function deleteProductById(req,res)
{
    let productId = req.params.productId

    console.log("ProductID = ",productId)

    let oldLength = products.length
    products = products.filter(product => product.productId != productId)
    let newLength = products.length

    if(oldLength == newLength)
    {
        res.json({ "msg": "Invalid Product Id", "data": productId, "rcode": -9 })    
    } else 
    {
        res.json({ "msg": "product deleted", "data": productId, "rcode": 200 })
    }
    
}

function getProductById(req,res)
{
    let productId = req.params.productId
    console.log("ProductID = ",productId)

    let product = products.filter(p => p.productId == productId)
    //console.log(product.length)  
    
    if((product.length) == 1)
    {
        res.json({ "msg": "product deleted", "data": product, "rcode": 200 })
    } else 
    {
        res.json({ "msg": "Invalid Product Id", "data": productId, "rcode": -9 })     
    }
    
}

module.exports.addProducts = addProducts
module.exports.getAllProducts = getAllProducts
module.exports.deleteProductById = deleteProductById
module.exports.getProductById = getProductById
