const express = require("express") // ini perlu
const path = require('path'); //tidak perlu npm install

// init express server and router
const app = express();
const mainRouter = require('./app/routes');

app.use(express.json()); // supaya express bisa response json
app.use(express.urlencoded({ extended: false })); // supaya express bisa menerima body

// app.use(function(req,res,next){
//     console.log("ini middleware")
// })

// http router
app.use("/", mainRouter);

const port = 3000
app.listen(port, function(){
    console.log("server start on", port)
})