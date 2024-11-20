import express from "express";
import path from "path";
import __dirname from "./util/rootpath.js"
import greetingRoutes from "./routes/greeting.js";
import nodejsRoutes from "./routes/nodejs.js";
import expressRoutes from "./routes/express.js";


const app = express();
const PORT = 3000;
app.use(greetingRoutes);
app.use(nodejsRoutes);
app.use(expressRoutes);

app.use(express.static(path.join(__dirname,'public')))

app.use((req,res, send) => {
    res.send("Hi there!")
})

app.listen(PORT, ()=> console.log(`app is running on http://localhost:${PORT}`));