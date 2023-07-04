const express = require("express")
const mongoose = require("mongoose")
const ProductController = require("./controller/productControllerDb")
const categoryController = require("./controller/categoryController")

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

let dbUrl="mongodb+srv://root:mongoHarsh@cluster0.qberb6z.mongodb.net/?retryWrites=true&w=majority"
// dbUrl="mongodb://127.0.0.1:27017/mean"
mongoose.connect(dbUrl).then( () => {
    console.log("Database Connected");
})



app.post("/addproductDb",ProductController.addProduct)
app.get("/products",ProductController.getAllProducts)
app.get("/product/:productId",ProductController.getProductById)
app.delete("/product/:productId",ProductController.deleteProductById)
app.post("/products/filter",ProductController.filterProducts)
app.put("/product",ProductController.updateProduct)




//category routes 
app.post("/category",categoryController.addCategory)
app.get("/categories",categoryController.getAllCategory) 


app.listen(9999)