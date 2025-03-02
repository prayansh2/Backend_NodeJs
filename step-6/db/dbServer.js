const mongoose=require("mongoose")

const connectMongo= ()=>{
   return mongoose.connect('mongodb://127.0.0.1/CourseDatabase')   
}

module.exports=connectMongo;
