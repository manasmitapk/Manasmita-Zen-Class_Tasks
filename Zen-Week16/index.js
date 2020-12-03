const express = require("express");

const os = require("os");
const fs = require("fs");

//console.log(os.platform());

//console.log(os.release());


const app = express();

app.listen(3004, ()=> console.log("your app is running with port: 3003"));

app.get("/", (request, response) => {
    response.send("Hello there. it's simple home router");
});


app.get("/list", (request, response) => {
        fs.readdir("C:\\Users\\manas\\Desktop\\Zen\\Manasmita-Zen-Class_Tasks\\Zen-Week16","utf-8", (err,data)=> {
            if (err) throw err;
            console.log(data);
            response.send("Hello there. it's simple home router");
        });
});







