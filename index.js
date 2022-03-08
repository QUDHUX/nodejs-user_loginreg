const express = require('express');
const db = require("./routes/db_config");
const app = express();
const cookie = require('cookie-parser')
const path = require('path');
const port = process.env.PORT || 5450;
const ejs = require('ejs');
const bodyParser = require('body-parser')
const mysql = require('mysql');
const { title } = require('process');
const router = require('./routes/pages');
app.use(cookie());


// app.get('/', (req, res)=>{
//     res.send(`i am ready to go`)
// }


 //static folder containig css, js and images folder
 
 //css static folder
 app.use('/css', express.static(__dirname + '/public/css'))
 //js static folder
 app.use('/js', express.static(__dirname + '/public/js'))
 //image static folder
 app.use('/images', express.static(__dirname + '/public/images'))
//set views file


app.set('views', path.join(__dirname, 'views'));
//set view engine
app.set('view engine', 'ejs');
app.use(express.json());

db.connect((error)=>{
    if(error){
        console.log('error message:', error)
    }else{
        console.log('connection successful')}
})


app.use("/", require("./routes/pages"));
app.use("/api", require("./controllers/auth"))
//server listening
app.listen(port);