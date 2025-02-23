const http=require('http')
const url=require("url")
const server=http.createServer((req,res)=>{
    const myurl=url.parse(req.url,true);
    console.log(myurl);
    switch(myurl.pathname)
    {
        case "/":
        res.end("Home Page")
        break;
        case "/about":
        res.end("About page")
        break;
        case "/service":
        res.end("This is a service page")
        break;
        case "/hello":
        res.end(`hello ${myurl.query.myname} how are you!!`)
        break;
    }
    
})

server.listen(8000,()=>{
    console.log("server is running")
})
