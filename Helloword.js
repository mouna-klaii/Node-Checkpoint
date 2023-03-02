const {response} = require("express")
console.log("Hello Word");

const fs = require("fs")



const http = require("http")

const message = fs.readFileSync("./welcome.txt")
console.log(message.toString())


http.createServer((Request , response) => {
    response.end("<h1>Hello Node!!!!</h1>")
    }).listen(3000)