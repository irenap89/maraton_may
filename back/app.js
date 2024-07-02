const express = require('express')
var cors = require('cors')
var fileupload = require("express-fileupload");
const remove_bg =  require('./remove_bg');

const app = express()

app.use(express.static('no_bg_img'));
app.use(express.static('upload_img'));


app.use(cors())
app.use(fileupload());

app.post('/upload_img', function (req, res) {
  
    let date = new Date();
    let color = req.body.color;

    let file_name = date.getTime() +'_'+ req.files.file.name;

    let file =  req.files.file;
   
    file.mv(__dirname + '/upload_img/' + file_name , async function(err) {
        if(err){
            console.log(err);
        }else{
           await remove_bg(file_name, color);
           res.send(file_name);
        }

    });


  
})

console.log('running server111');
app.listen(5000)