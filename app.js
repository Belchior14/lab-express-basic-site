const { response } = require("express");
const express = require("express");

const app = express()

app.listen(5005)

app.use(express.static("public"))

app.set("views", __dirname + "/views");
app.set("view engine","hbs")

app.get("/home",(request,response)=>{
    response.sendFile(__dirname+"/views/home.html")
})

app.get("/about",(request,response)=>{
    let data = {
        name: "Cristiano",
        lastName: "Ronaldo",
        age: 36,
        country: "Portugal",
        titles: ["La Liga 1", "La Liga 2","La Liga 3", "Champions Leage 1","Champions Leage 3","Champions Leage 2","Copa di Italia"]
    }

    response.render("about",data)
})

app.get("/works",(request,response)=>{
    let data = {
        name: "Cristiano",
        lastName: "Ronaldo",
        age: 36,
        country: "Portugal",
        titles: ["La Liga 1", "La Liga 2","La Liga 3", "Champions Leage 1","Champions Leage 3","Champions Leage 2","Copa di Italia"]
    }

    response.render("works",data)
})
