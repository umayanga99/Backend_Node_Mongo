import express from "express"
import mongoose from "mongoose"
import router from "./routes/user-routes.js"
import blogrouter from "./routes/blog-routes.js"

const app=express()

app.use(express.json()) // establishing that all the doucments that are passed is in json form

mongoose.connect(
    "mongodb+srv://ROOT:ROOT@cluster0.vmvxkjy.mongodb.net/?retryWrites=true&w=majority"
).then(()=>app.listen(5000))
.then(()=>console.log("Connected to the database"))
.catch(err=>console.log(err))

// app.use(router)
app.use('/api/user',router)
app.use("api/blog",blogrouter)

app.use("/",(req,res,next)=>{
    res.send("Hello World")
})

