const express=require("express")
const connectMongo=require("./db/dbServer")

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






