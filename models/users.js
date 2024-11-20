import fs from "fs";
import __dirname from "../util/rootpath.js"

class User{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}
export default User