const mongoose = require("mongoose");

const dbInitConf = () => {
    mongoose.connect("mongodb://localhost/netflix", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err)
    console.error("ERROR: Fallo de conexion con la Base de Datos." + err);
  else
    console.log("Base de datos Conectada");
});
};

module.exports = {
    dbInitConf: dbInitConf,
}