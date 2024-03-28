const express = require("express");
const app = express();

app.get('/',(req,res)=>{
  res.render('up2.ejs',{s:15,i :{get(){return "helo"}}});
});
app.listen(10000,()=>{
  console.log("strating");
});
