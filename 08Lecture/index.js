const express = require("express");
const app = express();

// For access static file to require path
const path = require("path");

const PORT = 8000;

// Middleware for connect ejs file from views folder
app.set("view engine","ejs")

// Middleware for Access Static files from public folder
app.use(express.static(path.join(__dirname,"public")))

// Home Page Rout for static file rendering
app.get('/',(req,res) => {
    // res.send("WELCOME, Home Page")
    res.sendFile(path.join(__dirname,"public","index.html"))
})

// Server listening (Server Start)
app.listen(PORT,() => {
    console.log(`Server Running on PORT ${PORT}`);
    
})


