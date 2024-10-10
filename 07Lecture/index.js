const express = require("express");
const bodyParse = require("body-parser");

const PORT = 9000;
const app = express();

// set Middleware
app.set("view engine","ejs")

app.use(bodyParse.urlencoded({extended : true}));
// bodyParser ke bina use krna hoto express.urlencoded({extended : true}) likhna pdega
app.use(express.urlencoded({ extended: true }));

// Static Array for all Records (As Database)
let records = [];


// Home Rout
app.get("/",(req,res) => {
    // res.send("Welcome Index")
    res.render("index",{records})
})

// Add Rout
app.post("/add",(req,res) => {
    const newRecord = req.body.record
    records.push(newRecord);
    res.redirect("/")
})
app.listen(PORT,()=>{
    console.log(`Server Running on PORT : ${PORT}`);
    
})