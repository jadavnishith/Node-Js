const express = require("express");
const app = express();
const Port = 7447;

// set view Engine

app.set("view engine", "ejs")

// Routing

app.get("/",(req,res) => {
    // res.send("Welcome Index Page")
    return res.render("index")
})

app.get("/home",(req,res) => {
    // res.send("Welcome home Page")
    return res.render("home")
})

app.get("/profile",(req,res) => {
    // res.send("Welcome profile Page")
    return res.render("profile")
})

app.get("/contact",(req,res) => {
    // res.send("Welcome contact Page")
    return res.render("contact")
})

app.get("/team",(req,res) => {
    // res.send("Welcome team Page")
    return res.render("team")
})

//  For error handling we will use Middleware

app.use((req,res) => {
    return res.status(404).render("404")
})

app.listen(Port,()=>{
    console.log(`Server Started on Port : ${Port}`);
    
})