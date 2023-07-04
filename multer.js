const express = require('express')
const multer  = require('multer')

const app = express()

//fn ln em pwd ,profilepic 


const mystorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({ storage:mystorage })

app.post('/signup', upload.single('profilePic'), function (req, res) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any

    console.log(req.body);
    console.log(req.file);
    res.json({msg:"Signup done",status:200,data:"signup done"})
})

app.listen(9999)