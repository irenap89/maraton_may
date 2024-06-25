const express = require('express')
var cors = require('cors')
var fileupload = require("express-fileupload");

const app = express()
 
app.use(cors())
app.use(fileupload());

app.post('/upload_img', function (req, res) {
    console.log(req);
    console.log('sdfgsdg');
    res.send('Hello World2131231')
})

console.log('running server111');
app.listen(5000)