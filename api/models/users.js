const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    email: String,
    password: String,
    age: Number
},{
    versionKey: false
});

module.exports = mongoose.model("User", userSchema, "users"); // "users" es la coleccion