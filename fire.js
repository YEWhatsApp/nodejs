const express = require("express");
const app = express();

app.get('/',(req,res)=>{
  res.render('up2.ejs');
});
app.listen(10000,()=>{
  console.log("strating");
});
