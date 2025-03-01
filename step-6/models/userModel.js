const mongoose =require("mongoose")


const userSchmea=mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true}
})

const User =mongoose.model(userSchmea,"User");