import express from "express"
import path from "path"
const router = express.Router();
router.get("/greeting",(req,res) => {
    res.send("Hello, Gavrán Tamás")})
export default router