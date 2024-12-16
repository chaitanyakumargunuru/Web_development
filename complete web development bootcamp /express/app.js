const express=require("express");
const app=express();
port=80;
app.get("/",(req,res)=>{
    res.send("this is home page of my app")
});
app.get("/about",(req,res)=>{
    res.send("this is about")
});
app.get("/contact",(req,res)=>{
    res.status(404).send("this page not found")
});
app.post("/about",(req,res)=>
{
    res.send("this is sbout post")
});
app.listen(port,()=>{
    console.log("the app started")
});