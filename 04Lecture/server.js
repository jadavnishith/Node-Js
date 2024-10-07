const http = require("http")
const fs = require("fs")

const myServer = http.createServer((req,res) => {  // .createServer is create the own server  
    console.log("New Request Received");
    console.log(req);
    console.log(req.headers);
    
    const log = `New Request Received : ${Date.now()} : ${req.url} \n`

    fs.appendFile("log.txt",log, (err,data) => {
        res.end("welcome user")
        console.log(data);
        
    })
})

myServer.listen(7447, () => {
    console.log("Server Started");
    
})