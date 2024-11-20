import fs from "fs";
import __dirname from "../util/rootpath.js"


const t = []
class User{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    save(){
        t.push(this)
    }
    static getAllUsers(){
        return t;
    }
}
export default User