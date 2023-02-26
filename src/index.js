const express=require('express')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const route=require('./route/route')
const app=express()
const multer = require("multer")

app.use(bodyparser.json())
app.use(multer().any())

mongoose.connect("mongodb+srv://sarwjeet424:96568437528p@cluster0.8tsocgw.mongodb.net/sarwjeet43",{useNewUrlParser:true})
.then(()=> console.log("MongoDB Connected"))
.catch((err) => console.log(err))

app.listen(3001,function (){
    console.log("Connect to port 3001")
})

app.use('/',route)
