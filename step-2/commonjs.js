//createing some functions  
function greet(name){
    console.log(`hello ${name}`)
}

function add(a,b)
{
    return a+b;
}

//exporting object of functions
module.exports={greet,add}


//another way 
// exports.add=(a,b)=>a+b;
// exports.sun=(a,b)=>a-b;