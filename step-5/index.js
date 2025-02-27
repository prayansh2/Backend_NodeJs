const express=require("express")
const randomNumberMiddleware=require("./middleware/randomNum")
const app=express();

const PORT=3000;


app.get("/",(req,res)=>{
    res.status(200).send("hello from server {Middlewares}")
})

app.get("/:name",randomNumberMiddleware,(req,res)=>{
    const random=req.random;
    const name=req.params.name;
    res.status(200).send(`${name} your Number is ${random}`);
})


app.listen(PORT,()=>console.log(`server is running on Port ${PORT}`))