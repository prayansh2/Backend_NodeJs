const express=require("express")
const userRoute=require("./Routes/userRoutes")
const app=express();
const PORT=3000


app.use(userRoute);



app.get("/",(req,res)=>{
    res.status(200).send("this is home route");
})




app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))