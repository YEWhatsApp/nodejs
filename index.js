const express = require("express");
//const fun =require(__dirname + "/up2.ejs");
const firestor = require("firebase/app");
//console.log(firestor.ref);
//import "firebase/storage";

const { initializeApp } = require('firebase/app');
const {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} = require('firebase/storage');
const multer = require('multer');

const app =express();
/*app.use((req, res, next) => {
  res.status(404).send('status');
});*/
const firebaseConfig = {
  apiKey: "AIzaSyCp6A7rkCe1HwZOxCd2DkV1uOZBjabGkuM",
  authDomain: "zinode-8e2a4.firebaseapp.com",
  projectId: "zinode-8e2a4",
  storageBucket: "zinode-8e2a4.appspot.com",
  messagingSenderId: "756060139431",
  appId: "1:756060139431:web:49c7f1d0afb2b0c8085082",
  databaseURL:"https://zinode-8e2a4-default-rtdb.asia-southeast1.firebasedatabase.app"
}; 

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getStorage(firebaseApp);
const request = require('superagent')
// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });
/*function progress_middleware(req, res, next){
    let progress = 0;
    const file_size = req.headers["content-length"];
    
    // set event listener
    req.on("data", (chunk) => {
        progress += chunk.length;
        const percentage = (progress / file_size) * 100;
        // other code ...
    });

    // invoke next middleware
    next();
}
*/
var s = "heloo ";
//const func = require("./fun");
let i  ={get(){return s ;}};
//console.log(i );
var si=15 ;
//const db = require("firebase-admin/database");
//const dbd = db.getDatabase();
//const re =db.child('user');
// re.set({name:"ali"});
//console.log(firebaseApp.getDatabase());
app.get('/',(req,res)=>{
//const imageURL = await getDownloadURL(snapshot.ref);
//    var pathReference =ref('folder.jpg')
//console.log(pathReference)
//var url = getDownloadURL(pathReference);
var url ="https://firebasestorage.googleapis.com/v0/b/zinode-8e2a4.appspot.com/o/products%2F1711235971174-folder.jpg?alt=media&token=030c41c4-5ade-47c9-b75e-612187336b8d"
/*
var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        var blob = xhr.response;

      };
      xhr.open('GET', url);
      xhr.send();

*/ 

res.render("up2.ejs",{size:si,i : i  });
//res.write(`<div>zoufuf </div>`)

/*
res.set(
     'Content-Disposition',
     'attachment; filename=some_file_name.png'
   );
request(url).pipe(res);*/
//res.redirect('/')
});
app.get('/:id',(req,res)=>{
  var url2 ="https://firebasestorage.googleapis.com/v0/b/zinode-8e2a4.appspot.com/o/products%2F1711235971174-folder.jpg?alt=media&token=030c41c4-5ade-47c9-b75e-612187336b8d"
res.set(
     'Content-Disposition',
     'attachment; filename=some_file_name.png'
   );
request(url2).pipe(res);
res.redirect('/')
console.log(req.params)
});

app.post('/',upload.single('image'), async (req, res, next) => {
  const file = req.file;
//res.redirect('/');
//let time =new Date();
console.log(req.file)
//res.write (`<div>${time}</div>`)
/*
var n ="ggfffc.jpg"
var url ="https://firebasestorage.googleapis.com/v0/b/zinode-8e2a4.appspot.com/o/products%2F1711235971174-folder.jpg?alt=media&token=030c41c4-5ade-47c9-b75e-612187336b8d";
res.set(
     'Content-Disposition',
     `attachment; filename=${n}`
   );
await request(url).pipe(res);   
*/
//res.redirect('/')
  try {
    const filename = new Date().getTime() + '-' + file.originalname;
  const imageRef = ref(firestore, 'products/' + filename);
//var storageRef = firestor.ref();
//var uploadTask = ref(firestore, 'products/' + filename);
var img = ref(firestore,"productsq/171yyy71174-folder.jpg" );  
console.log("zzzzzzzzzzzzzxzzz");

var uploadTask = uploadBytesResumable(img , file.buffer);
//var r =firestor.storage.ref();
//console.log(img);
//const fun = require("./fun.js");
//var div = document.getElementById('div');
  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  /* 
uploadTask.on('state_changed', 
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
si =progress ;
    res.set(
     'Content-Disposition',
     //'attachment; filename=some_file_name.png'
   );
request("http://localhost:3000").pipe(res);
//      s = progress ;
     // res.render(__dirname + "/up2.ejs",{size:progress}); 
     
});
//module.exports ={get(){console.log("hh")}};
//    const snapshot = await uploadBytes(imageRef, file.buffer);
    //const imageURL = await getDownloadURL(snapshot.ref);
   // var pathReference =await  ref('folder.jpg');
    //res.download(pathReference);
//    console.log(pathReference)
    //res.status(200).send(imageURL);
    //res.redirect("https://firebasestorage.googleapis.com/v0/b/zinode-8e2a4.appspot.com/o/products%2F1711235971174-folder.jpg?alt=media&token=030c41c4-5ade-47c9-b75e-612187336b8d")
*/
res.send("gggg");
  
  } catch (error) {
    console.log(error);
   return ;
  }
});



app.listen(10000,()=>{
console.log("listening");
});
