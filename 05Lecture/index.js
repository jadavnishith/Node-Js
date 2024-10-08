const express = require('express');
const app = express();
const Port = 6300

app.get("/",(req,res) => {
    res.send("hey ")
})

app.listen(Port, () => {
    console.log(`app listining on port ${Port}`);
    
})