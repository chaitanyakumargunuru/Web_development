let http=require("http");
let fs= require("fs");

const home=fs.readFileSync('./tut50/home.html');
const about =fs.readFileSync("tut22.html");
const services=fs.readFileSync("/Users/gunuruchaitanyakumar/Downloads/complete web development bootcamp /tut50/services.html");
const contact =fs.readFileSync("/Users/gunuruchaitanyakumar/Downloads/complete web development bootcamp /tut50/contact.html");

const portname = "127.0.0.1" ;
const host =3000;
const server=http.createServer((req , res)=>{
    res.statusCode=404;
    res.setHeader('Content-Type', 'text/html');
    url=req.url;
    if (url=="/"){
        res.end(home);
    }
    else if(url=="/about"){
        res.end(about);
    }
    else if(url=="/services"){
        res.end(services);
    }
    else{
        res.statusCode=404;
        res.end("error")
    }
    
});
server.listen(host, portname,()=>{
    console.log(`server running at http://${portname}:${host}`)
});