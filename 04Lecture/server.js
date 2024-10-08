const http = require("http")
const fs = require("fs")

const myServer = http.createServer((req,res) => {  // .createServer is create the own server  
    console.log("New Request Received");
    console.log(req);
    console.log(req.headers);
    
    const log = `New Request Received : ${Date.now()} : ${req.url} \n`

    fs.appendFile("log.txt",log, (err,data) => {
        // res.end("welcome user")
        switch (req.url) {
            case "/" : res.end("Welcome to Home page");
            break;

            case "/about": res.end("Welcome to About page");
            break;

            case "/profile": res.end("Welcome to Profile page");
            break;

            case "/contact": res.end("Welcome to Contact page");
            break;
        
            default:
                res.end("404 Oop's Page Not Found")
        }
    })
})

myServer.listen(7447, () => {
    console.log("Server Started");
    
})