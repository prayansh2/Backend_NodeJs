const express=require("express")
const mongoose=require("mongoose")


const app=express();

const connectMongo= ()=>{
   return mongoose.connect('mongodb://127.0.0.1/CourseDatabase')
    
   
}

connectMongo();

app.get("/health",(req,res)=>{
    res.status(200).send("monggose is working fine and server is un and running..");
})

app.listen(3000,()=>{
    connectMongo().then(()=>{
        console.log("✅ mongodb connected..")
        console.log("🚀 server is running on port 3000")
    }).catch((err)=>{
        console.log("❌ errr",err)
    })
})






