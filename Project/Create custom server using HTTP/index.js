const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res) => {

    // console.log("new request received");
    // console.log(req);
    // console.log(req.headers);
    
    const log = `New Request Received : ${Date.now()} : ${req.url} \n`

    fs.appendFile("log.txt",log,(err,data) => {
        // res.end("welcome user")

        switch (req.url) {
            case "/" : res.end("Welcome to home page")
            break;
            
            case "/about": res.end("Welcome to About page");
            break;

            case "/profile": res.end("Welcome to Profile page");
            break;

            case "/contact": res.end("Welcome to Contact page");
            break;

            case "/blog": res.end("Welcome to Blog page");
            break;

            default: res.end("404 Oop's Page Not Found")
        }
    })
})

myServer.listen(9000,() => {
    console.log("server started");
    
})