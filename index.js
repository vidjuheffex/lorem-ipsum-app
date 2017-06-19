const express = require("express");
const app = express();
const port = 3000;
const loremIpsum = require("lorem-ipsum");

app.get('/lorem/:loremAmount?', (req,res)=>{
    let count = 1;
    if ( req.params.loremAmount){
        count = req.params.loremAmount;
    }
    let output = loremIpsum({ count: count, units: 'paragraphs', format: 'html' });
    res.send(output);
    console.log(count);
});


app.listen(port, ()=>{
    console.log("Server listening on port: ", port);
});
