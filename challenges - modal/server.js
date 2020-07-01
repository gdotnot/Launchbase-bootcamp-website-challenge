const express = require("express")
const nunjucks = require("nunjucks")
const courses = require("./courses")
const about = require("./about")

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    noCache: true,
    autoescape: false
})

server.get("/", (req, res) => {
    res.render("about", { about })
})

server.get("/courses", (req, res) => {
    res.render("courses", { courses })
})

server.get("/courses/:id", (req, res) => {
    const id = req.params.id;

    return res.send(`O id fornecido na rota é: ${id}`);
});

server.listen(5000)
