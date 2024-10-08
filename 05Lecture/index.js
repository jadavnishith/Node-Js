const express = require('express');
const app = express();
const Port = 6300

app.get("/",(req,res) => {
    res.send("hey ")
})

app.get("/about",(req,res) => {
    res.send("about page")
})

app.get("/profile",(req,res) => {
    res.send("profile page ")
})

app.listen(Port, () => {
    console.log(`app listining on port ${Port}`);
    
})