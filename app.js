import express from "express";
import bodyParser from "body-parser";
import path from "path";
import * as greeting from "./routes/greeting";


const app = express();
const PORT = 3000;

app.use((req,res) => {
    res.render("/",{
        pageTitle: "",
        path: "public/index.html"
    })
})

app.listen(PORT, ()=> console.log("Hi there!"));