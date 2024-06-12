const express=require("express")
const mongoose=require( "mongoose")
const cors=require( "cors")
const {coursemodel}=require("./models/course")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://sreya:sreya123@cluster0.rk6cqoj.mongodb.net/coursedb?retryWrites=true&w=majority&appName=Cluster0")
app.post("/add",(req,res)=>{
let input=req.body
let course=new coursemodel(input)
console.log(course)
course.save()
res.json({"status":"success"})
})
app.post("/search",(req,res)=>{
res.send("search")
})
app.get("/view",(req,res)=>{
coursemodel.find().then(
    (data)=>{
        res.json(data)
    }
).catch(
    (error)=>{
        res.json(error)
    }
)
})
app.listen(8080,(req,res)=>{
console.log("server started")
})
