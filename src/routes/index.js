const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.render("learn.html", {title: "Node.js"})
})

router.get("/about", (req, res)=>{
    res.render("about.html", {title: "About Node.js"})
})

router.get("/download", (req, res)=>{
    res.render("download.html", {title:"Download | Node.js"})
})

router.get("/guides", (req, res)=> {
    res.render("guides.html", {title:"Guides | Node.js"})
})

router.get("/blog", (req, res)=>{
    res.render("blog.html", {title:"Blog | Node.js"})
})
module.exports = router