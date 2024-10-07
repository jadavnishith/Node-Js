const fs = require("fs");

// synchronous

fs.writeFileSync('./test.html', 'hey am sync file') // file ko write krne ke liye

const res = fs.readFileSync("./about.txt","utf-8",(err)=>{}) // file ko read krne ke liye
console.log(res);
console.log(res.toString());

// unlink or delete file
fs.unlinkSync('./about.txt')

// Asynchronous

fs.writeFile("./test.txt","hey am async file") // error 

fs.writeFile("./test.txt","hey am async file" , (err) =>{})

fs.readFile("./about.txt","utf-8",(err,res) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(res);
    }
})

fs.unlink("./test.txt",(err)=>{})