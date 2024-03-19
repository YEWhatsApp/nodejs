const express=require("express");
const mongo = require("mongoose");
const post = require("./modules/post");
const app = express();
//const mongo = require("mongoose");
mongo.connect("mongodb+srv://ziad:ziad2321@nodejsproject.qb18fmw.mongodb.net/?retryWrites=true&w=majority").then(() =>{console.log("sucess")}).catch((error) => {console.log("error",error)});
app.get("/hi",(req,res) => {
res.send("hello");
});
//function getZi (str){return str.length}
app.get("/getPost",async (req,res) => {
const postzi = await post.find();
res.json(postzi);
});
app.get("/post",async (req,res) => {
const newPost = new post();
newPost.header="Header";
newPost.body="BODY";
newPost.footer=200;
await newPost.save();
res.send(`post saved`);
});
app.get("/index",(req,res) => {
res.render("index.ejs",{name : ["Ali","ahemd","Ziad"]});
});
app.listen(3000,() => {
console.log("listening");
});
