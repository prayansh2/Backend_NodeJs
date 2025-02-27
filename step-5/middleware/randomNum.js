
const func=async(req,res,next)=>{

    const randomNumber=Math.random();
    req.random=Math.round(randomNumber*100)
    next();
}

module.exports=func;