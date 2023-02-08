const express = require('express');
const app = express();
const user = require("./router/user")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())
app.use("/user", user)
app.get('/',(req,res)=>{
    res.send("welcom to curd opertion");
});


app.listen(4000,()=>{
    console.log("listening to port 4000");
});