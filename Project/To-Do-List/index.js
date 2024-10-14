const express = require("express");

const bodyParse = require("body-parser");

// Store Express in app variable
const app = express();

// Set Port Number
const PORT = 7777;

// set Middleware
app.set("view engine","ejs")

// Static Array For All Records (Database)
const records = [];

// Url Se data lene ke liye bodyParser ka use hota hai data ko parse krke bhej deta hai 
app.use(bodyParse.urlencoded({extended:true}));
// bodyParser ke bina use krna hoto express.urlencoded({extended : true}) likhna pdega kyuki express ke paas ye functionality available hai 
app.use(express.urlencoded({ extended: true }));

// Home Rout
app.get("/",(req,res) => {
    res.render("home",{records})
})

// Add Rout
// Record ko add krne ke liye => records[] me add hoga 
app.post("/add",(req,res) => {
    const newRecord = req.body.record
    if(newRecord){
        records.push(newRecord)
    }
    res.redirect("/")
})

// Edit Rout 
app.post("/edit/:index",(req,res) => {
    const index = req.params.index;
    const editTobe = records[index];
    res.render("edit",{record:editTobe,index})
})

// Update Rout
app.post("/update/:index",(req,res) => {
    const index = req.params.index;
    records[index] = req.body.record;
    res.redirect("/")
})

// Delete Rout
app.get("/delete/:index",(req,res) => {
    const index = req.params.index;
    records.splice(index,1);
    res.redirect("/")
})
// Server listen on Port
app.listen(PORT,()=>{
    console.log(`Server Running on PORT: ${PORT}`);
    
})