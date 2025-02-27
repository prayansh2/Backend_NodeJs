const express=require("express")
const router=express.Router();


let users=[{name:"test1",age:12},{name:"test2",age:14},{name:"test3",age:16}]

router.use(express.json())

router.get("/user",(req,res)=>{
        res.status(200).send(users);    
})

router.post("/adduser",(req,res)=>{
    const data=req.body
    const {name,age}=data

    const user={name,age}
    const len=users.length
        users=[...users,user]

        if(users.length==len)
        {
            res.status(401).send("All fields are required..")
            return;
        }

        res.status(201).send("added user with name "+name);    
})


router.get("/user/:name",(req,res)=>{

    const quername=req.params.name;

   const user=users.filter(user=>user.name===quername);
   
   if(user[0]?.name!=quername)

    {
        res.status(200).send("user not exist...")
        return;
    }
        res.status(201).send(user);    
})


module.exports=router
