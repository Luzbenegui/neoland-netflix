//ESTE ARCHIVO ES PARA CONECTAR NODE CON MONGO

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filmsSchema = new Schema({
    name: String,
    year: Number,
    director: String,
    time: Number,
    type: String,
    age: Number,
    rate: Number

},{
    versionKey:false
});

module.exports = mongoose.model("films", filmsSchema);