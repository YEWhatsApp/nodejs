var express = require('express')
var multer = require('multer');


var bodyParser = require('body-parser');

var mongoose = require('mongoose')

var imgSchema = require('./img.js');

var fs = require('fs');

var path = require('path');
var app = express();
app.set("view engine", "ejs");


mongoose.connect("mongodb+srv://ziad:ziad2321@nodejsproject.qb18fmw.mongodb.net/?retryWrites=true&w=majority")

.then(console.log("DB Connected"))
 
 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 


 

var storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, 'uploads')

    },

    filename: (req, file, cb) => {

        cb(null, file.fieldname + '-' + Date.now())

    }
});
 

var upload = multer({ storage: storage });
 

app.get('/', (req, res) => {
imgSchema.find()

    .then((data, err)=>{

        if(err){

            console.log(err);

        }

        res.render('imagePage',{items: data})

    })
});
 
 

app.post('/', upload.single('image'), (req, res, next) => {
 

    var obj = {

        name: req.body.name,

        desc: req.body.desc,

        img: {

            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),

            contentType: 'image/png'

        }

    }

    imgSchema.create(obj)

    .then ((err, item) => {

        if (err) {

            console.log(err);

        }

        else {

            // item.save();

            res.redirect('/');

        }

    });
});
 


app.listen(3000, err => {

    if (err)

        throw err

    console.log('Server listening on port', port)
})


